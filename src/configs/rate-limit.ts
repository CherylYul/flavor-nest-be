import rateLimit from 'express-rate-limit';

const limit = rateLimit({
  windowMs: 15 * 1000,
  limit: 50,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  validate: {
    xForwardedForHeader: true
  }
});

export default limit;
