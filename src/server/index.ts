import { createServer } from 'miragejs';

function makeServer() {
  return createServer({
    routes() {
      this.get('/api/reminders', () => ({
        reminders: [
          { id: 1, text: 'Walk the dog' },
          { id: 2, text: 'Take out the trash' },
          { id: 3, text: 'Work out' },
        ],
      }));
      this.get('/api/reminders/:id', () => {
        return { id: 1, text: 'Walk the dog' };
      });
      let newId = 4;
      this.post('/api/reminders', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;
        return { reminder: attrs };
      });
    },
  });
}

export default makeServer;
