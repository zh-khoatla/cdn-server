import deleteDirectory from './deleteDirectory';

const deletePublicDirectory = () => deleteDirectory(process.cwd() + '/public');

export default deletePublicDirectory;
