import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">Страница не найдена</p>
        <a className="page-not-found__back" href="./">
          Назад
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
