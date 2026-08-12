export const cloneRecords = (records) => records.map((record) => ({ ...record }));

export const findRecordById = (records, id) => records.find((record) => record.id === Number(id)) ?? null;

export const nextId = (records) => (records.length === 0 ? 1 : Math.max(...records.map((record) => record.id)) + 1);

export const createRecord = (records, payload) => {
  const record = {
    id: nextId(records),
    ...payload,
  };

  records.push(record);
  return { ...record };
};

export const updateRecord = (records, id, payload) => {
  const index = records.findIndex((record) => record.id === Number(id));

  if (index === -1) {
    return null;
  }

  records[index] = {
    ...records[index],
    ...payload,
    id: records[index].id,
  };

  return { ...records[index] };
};

export const deleteRecord = (records, id) => {
  const index = records.findIndex((record) => record.id === Number(id));

  if (index === -1) {
    return null;
  }

  const [removed] = records.splice(index, 1);
  return { ...removed };
};
