import { HttpResponse, http } from 'msw';
import { APPOINTMENTS } from './data/appointments';

export const handlers = [
  http.get('/get-appointments', () => {
    console.log('Intercepted GET appointments');

    return HttpResponse.json(APPOINTMENTS);
  }),
];
