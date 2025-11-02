export const truncateString = (str, limit = 100) => {
  return limit && str.length > limit ? `${str.slice(0, limit)}...` : str
}
