const addAuthor = (_req, res, next) => {
  res.locals.name = "Jose";
  res.locals.lastname = "Losada"

  next();
};

module.exports = addAuthor;
