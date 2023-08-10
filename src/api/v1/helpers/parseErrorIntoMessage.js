const parseErrorIntoMessage = (error) => {
  return {
    message: error?.message || 'Unknown error',
  };
};

export default parseErrorIntoMessage;
