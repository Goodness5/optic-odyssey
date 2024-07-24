const AWS = require('aws-sdk');
const fs = require('fs');
const formidable = require('formidable');

// Initialize S3 client
const s3 = new AWS.S3({
    accessKeyId: 'EA25B2F44D45FD5FD6F4', // replace with your actual access key
    secretAccessKey: '0Bs6JtKH21nL04OsuAi1fzhenoYJgVukClZLbvxk', // replace with your actual secret key
    endpoint: 'https://s3.filebase.com',
    region: 'us-east-1',
    signatureVersion: 'v4',
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    console.log('Fields:', fields);
    console.log('Files:', files);

    const file = files.file && files.file[0]; // Access the first file in case of multiple files
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

   
    const filePath = String(file.filepath || file.path); // Convert to string
    const fileName = file.originalFilename || file.name; // handle different property names

// Read the file
fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    
    // Set up parameters for S3 upload
    const params = {
        Bucket: 'xpresscollection', // replace with your actual bucket name
        Key: `profilephotos/${fileName}`, // Corrected the Key to use the file name only
        ContentType: file.mimetype || file.type, // handle different property names
        Body: data,
    };
    
    // Upload the file to S3
    const request = s3.putObject(params);
    request.on('httpHeaders', (statusCode, headers) => {
        if (statusCode === 200) {
            console.log(`File uploaded successfully. CID: "https://ipfs.filebase.io/ipfs/${headers['x-amz-meta-cid']}"`);
            const cidUrl = `https://ipfs.filebase.io/ipfs/${headers['x-amz-meta-cid']}`
            res.status(200).json({ cid: cidUrl });
        } else {
            console.log(`File upload failed with status code ${statusCode}`);
        }
    });
    
    // Error handling for request
    request.on('error', (error) => {
        console.error('Error uploading file:', error);
    });
    
    // Send the request
    request.send();
});
  });
}



