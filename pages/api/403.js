import Cors from 'cors';

const cors = Cors({
  credentials: true,
  methods: ['GET', 'HEAD', 'OPTIONS', 'POST']
});

const middleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
};

export default async function handler(req, res) {
  await middleware(req, res, cors);

  res.status(403).send("Forbidden");
}
