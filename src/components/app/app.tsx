import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { HelmetProvider } from 'react-helmet-async';
import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  placesCount: number;
}

function App({ placesCount }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main placesCount={placesCount} />}
          >
          </Route>
          <Route
            path={AppRoute.Login}
            element={<Login />}
          >
          </Route>
          <Route
            path={AppRoute.Favorites}
            element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><Favorites /></PrivateRoute>}
          >
          </Route>
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          >
          </Route>
          <Route
            path='*'
            element={<NotFound />}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
