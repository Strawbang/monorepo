import { app } from '../app/ExpressApp';
import http from 'http';

const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server http is running on port ${port}.`);
});
