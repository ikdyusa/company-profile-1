import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


//versi non react memiliki kekurangan dalam hal renderingnya. 
//versi ini akan me-render seluruh page, yang diakibatkan oleh fitur anchor.
//selain itu, penulisan kode untuk mengarahkan url yang di klik dengan page yang
//sesuai, lebih ribet.

//versi react dapat mengatasi permasalahan ini, yang dapat dilakukan dengan memanfaatkan
//modul react router dom dan mempergunakan fungsi link yang memungkinkan pengalihan url tanpa perlu 
//me-render seluruh page.