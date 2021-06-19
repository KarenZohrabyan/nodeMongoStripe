
//AWS
// const AWS = require('aws-sdk');
// const fs = require('fs');
// const getImgBuffer = require('./src/utility/getImageBuffer');

// const AWS_ACCESS_KEY_ID = 'AKIA2HWLT6SLGLA4X3FN';
// const AWS_SECRET_ACCESS_KEY = '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';

// AWS.config.update({
//   accessKeyId: AWS_ACCESS_KEY_ID,
//   secretAccessKey: AWS_SECRET_ACCESS_KEY,
//   region: 'ca-central-1'
// })

// const s3Bucket = new AWS.S3({ params: { BaScket: 'ideaimagesbucket' } });

// const dirName = 'C:\\Users\\Karen\\Desktop\\123.jpg'
// Upload File

// const uploadFile = (dirName) => {
//   const fileContent = fs.readFileSync(dirName);

//   const params = {
//     Bucket: 'ideaimagesbucket',
//     Key: '123456778.jpg',
//     Body: fileContent
//   };

//   s3Bucket.upload(params, (err, data) => {
//     if(err) {
//       // throw new Error('Chexav  axpers');
//       console.log(err)
//     }
//     console.log(`File uploaded successfully`)
//   })
// }

// uploadFile('123.jpg')


// const bucketParams = {
//   Bucket: 'ideaimagesbucket'
// }
// const getImagesFromAwsS3 = (bucketParams) => {
//   return new Promise((resolve, reject) => {
//     s3Bucket.listObjects(bucketParams, (err, data) => {
//       if(err) {
//         reject(err);
//       } 
//       else {
//         resolve(data);
//       }
//     })
//   })
// }
// getImagesFromAwsS3(bucketParams).then((data)=> console.log(data.Contents[1]));