import { delay } from 'roadhog-api-doc';

const proxy = {
  'GET /cache': (req, res) => {
    res.json({
      data: 1,
    });
  },
};

export default delay(proxy, 1000);
