const NotFound = (error) => {
  console.log(error.originalUrl);
  return `La ruta: [${error.originalUrl}] no existe`;
};

module.exports = NotFound;
