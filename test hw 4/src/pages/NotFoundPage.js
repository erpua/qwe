import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../routes';
import imageNotFound from '../images/error_image.jpg';

const styles = {
  container: { textAlign: 'center' },
  image: { paddingTop: 100 },
};

const NotFoundPage = () => (
  <div style={styles.container}>
    <img
      src={imageNotFound}
      alt="cat detective"
      width="320"
      style={styles.image}
    />
    <p>
      Такого адреса не существует. Вот <Link to={routes.HOME}>ccылка</Link> на
      главную страницу.
    </p>
  </div>
);

export default NotFoundPage;
