const AWS = require('aws-sdk');
const s3 = new AWS.S3();
AWS.config.update({accessKeyId: 'ACCESS-KEY-VAL', secretAccessKey: 'SECRET-ACCESS-KEY-VAL'});

const myBucket = 'presigned-url-demo-xrajtri'
const myKey = 'img1.jpg'
const signedUrlExpireSeconds = 60 // In seconds

const url = s3.getSignedUrl('getObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
})

console.log(" Presigned URL to access the object is: "+url);