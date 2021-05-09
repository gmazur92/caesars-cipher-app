export const handleError = (err, statusCode) => {
  process.stderr.write(`${err}\n`);
  process.exit(statusCode);
}
