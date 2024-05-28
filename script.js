function exportAllImages() {
  const imageUrls = [
    'images/Poss_All.jpg',
    'images/Poss_Q1.jpg',
    'images/Poss_Q2.jpg',
    'images/Poss_Q3.jpg',
    'images/Poss_Q4.jpg',
    'images/Poss_Q5.jpg',
    'images/Stats_Total.jpg',
    'images/Stats_Q1.jpg',
    'images/Stats_Q2.jpg',
    'images/Stats_Q3.jpg',
    'images/Stats_Q4.jpg',
    'images/Stats_Q5.jpg'
  ]; 

  const zip = new JSZip();
  const folder = zip.folder('exported_images');

  const promises = imageUrls.map(url => {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        const filename = url.split('/').pop();
        folder.file(filename, blob, { base64: true });
      })
      .catch(error => {
        console.error(`Error fetching image: ${url}`, error);
      });
  });

  return Promise.all(promises)
    .then(() => {
      return zip.generateAsync({ type: 'blob' });
    })
    .then(content => {
      saveAs(content, 'exported_images.zip');
      console.log('Images exported successfully!');
    })
    .catch(error => {
      console.error('Error exporting images:', error);
    });
}