import path from 'path';

const getBundle = async (req, res) => {
  try {
    const fileName = req.params.bundleName;
    const version = req.params.version;

    const filePath = path.join(
      'src',
      'api',
      'v1',
      'bundles',
      version,
      fileName
    );

    console.log('🚀 ~ file: getBundle.js:7 ~ getBundle ~ filePath:', filePath);

    res.download(filePath, fileName, (err) => {
      if (err) {
        res.status(500).send('Error downloading the file.');
      }
    });
  } catch (error) {
    res.status(400).send({
      msg: error.message,
    });
  }
};

export default getBundle;
