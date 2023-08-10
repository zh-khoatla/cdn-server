import fs from 'fs';

const deleteDirectory = (path) => {
  fs.rmSync(path, { recursive: true, force: true });
};

export default deleteDirectory;
