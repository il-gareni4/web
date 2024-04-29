export function getApiKey() {
  if (process.env.NODE_ENV === "development") return process.env.REACT_APP_NASA_API_KEY;
  else return undefined;
}
