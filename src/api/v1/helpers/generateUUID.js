const generateUUID = (length = 1) => {
  const resultArray = [];
  for (let i = 0; i < length; i++) {
    const random = Math.round(Math.random() * 31);
    const char = random.toString(32);
    resultArray.push(char);
  }
  const resultString = resultArray.join('');
  return resultString;
};

export default generateUUID;
