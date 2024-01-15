// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter } from 'react-router-dom';
import { Page } from '../components';
import { AppRoutes } from '../routes';

export function App() {
  return (
    <BrowserRouter>
      <Page>
        <AppRoutes />
      </Page>
    </BrowserRouter>
  );
}

export default App;
