export const timestampToDate = (timestamp)=> {
  if(!timestamp) return {
    year: '',
    month: '',
    day: '',
  };

  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  return {
    year,
    month,
    day
  };
}