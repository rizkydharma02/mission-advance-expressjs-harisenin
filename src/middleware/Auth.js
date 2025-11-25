import jwt from 'jsonwebtoken';

const Auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        message: 'Unauthorized: No token provided',
        data: null,
      });
    }

    const token = authHeader.split(' ')[1];

    // jwt verify()
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // set data user to request
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized: Invalid token',
      data: null,
    });
  }
};

export default Auth;
