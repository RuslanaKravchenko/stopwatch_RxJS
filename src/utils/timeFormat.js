export const toHHMMSS = (time) => {
  return new Date(time * 1000).toISOString().substr(11, 8);
};
