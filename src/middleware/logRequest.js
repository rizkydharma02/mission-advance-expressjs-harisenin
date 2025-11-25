const logRequest = (req, res, next) => {
  console.log('request on path: ', req.path);
  next();
};

export default logRequest;
