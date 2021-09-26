import axios from 'axios';

/* process.env !== 'production' ? 'http://localhost:3000' : */
export const EVENT_URL = 'https://homeapi.vercel.app/';
// export const EVENT_URL = 'http://localhost:3000';

const EventService = {
  findAll: async () => {
  // eslint-disable-next-line no-console
    const config = {
      method: 'get',
      url: `${EVENT_URL}/events`,
      headers: {},
    };

    const data = await axios(config);
    return data;
  },
  findOne: () => { },
  create: async (params) => {
    const form = new FormData();
    if (params) {
      // eslint-disable-next-line no-restricted-syntax
      for (const [k, v] of Object.entries(params)) {
        if (k === 'medias') {
          form.append('medias', v[0]);
        } else {
          form.append(k, v);
        }
      }
    }

    const config = {
      method: 'post',
      url: `${EVENT_URL}/events`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: form,
    };

    const response = await axios(config);

    return response;
  },
};

export default EventService;
