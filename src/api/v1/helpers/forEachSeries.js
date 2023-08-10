const forEachSeries = async (iterable, action) => {
  let count = 0;
  for (const x of iterable) {
    await action(x);
    count++;
    console.log(`progress: ${count}/${iterable.length}`);
  }
};

export default forEachSeries;
