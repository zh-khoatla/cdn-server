const mapObjectToArray = (object, keyName) => {
  const keys = Object.keys(object);

  const results = keys.map((key) => {
    return {
      [keyName]: key,
      ...object[key],
    };
  });

  return results;
};

export default mapObjectToArray;
