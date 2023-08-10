import json2csv from 'json2csv';

const jsonToCsvData = (data, fieldNames) => {
  const fields = fieldNames.map((fieldName) => {
    return {
      label: fieldName,
      value: fieldName,
    };
  });

  const parser = new json2csv.Parser({ fields });

  const csv = parser.parse(data);

  return csv;
};

export default jsonToCsvData;
