const { Buffer } = require('buffer');

function getImgBuffer(base64) {
    const base64str = base64.replace(/^data:image\/\w+;base64,/, '');
    return Buffer.from(base64str, 'base64');
}

module.exports = getImgBuffer;




//This code should be in main js file

// const imageUpload = (path, buffer) => {
//   const data = {
//     Key: path,
//     Body: buffer,
//     ContentEncoding: 'base64',
//     ContentType: 'image/jpeg' ,
//     ACL: 'public-read'
//   };
//   return new Promise((resolve, reject) => {
//     s3Bucket.putObject(data, (err) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(s3Url + path);
//       }
//     })
//   })
// }

// const getImageUrl = async (type, base64Image) => {
//   const buffer = getImgBuffer(base64Image);
//   const currentTime = new Date().getTime();
//   return imageUpload(`${type}/${currentTime}.jpeg`, buffer);
// }