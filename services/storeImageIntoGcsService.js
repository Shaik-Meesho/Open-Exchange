const { Storage } = require('@google-cloud/storage');
const got = require('got').default;

async function uploadFileFromUrl(bucketName, imageUrl, destinationFileName) {
    const storage = new Storage();
    const bucket = storage.bucket(bucketName);
  
    // Fetch image from URL
    const response = await got(imageUrl, { responseType: 'buffer' });
  
    // Upload image buffer to GCS
    const file = bucket.file(destinationFileName);
    await file.save(response.body, {
      metadata: {
        contentType: response.headers['content-type'], // Set content type based on fetched image
      },
    });
  
    console.log(`${destinationFileName} uploaded to ${bucketName}/${destinationFileName}.`);
  }

module.exports = {
    uploadFileFromUrl,
}