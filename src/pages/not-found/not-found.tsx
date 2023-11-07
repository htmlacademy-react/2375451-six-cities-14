import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function NotFound(): JSX.Element {
  return (
    <section className='found'>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <h1>Страница не найдена</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}
export default NotFound;
