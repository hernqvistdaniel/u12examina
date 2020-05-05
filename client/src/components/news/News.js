import React from 'react';

const News = () => {

  return (
    <section className="news containPageSize">
      <div className="dark-overlay">
        <div className="news-inner">
          <h1 className="x-large">Nyheter</h1>

          <p className="lead">2020-03-02</p>
          <p className="startPageText">Regeringens nya avfallspolitik 2020!</p>
          <a href="https://www.avfallsverige.se/aktuellt/nyhetsarkiv/artikel/har-ar-nya-regeringens-avfallspolitik/" target="_blank" rel="noopener noreferrer">mer...</a>
          <br />
          <hr className="horrow" />

          <p className="lead">2020-04-16</p>
          <p className="startPageText">Vissa stadsdelar får närmare till sopsortering!</p>
          <a href="https://mitti.se/nyheter/farstaborna-narmare-sopsortering/?omrade=farstaskondal&view=app" target="_blank" rel="noopener noreferrer">mer...</a>
          <br />
          <hr className="horrow" />

          <p className="lead">2019-12-14</p>
          <p className="startPageText">Sorterar du verkligen rätt?</p>
          <a href="https://www.expressen.se/leva-och-bo/gor-det-sjalv/sa-sopsorterar-du-ratt--det-har-galler/" target="_blank" rel="noopener noreferrer">mer...</a>
          <br />
          <hr className="horrow" />

          <p className="lead">2019-10-27</p>
          <p className="startPageText">Det kommer att bli obligatoriskt att sopsortera!</p>
          <a href="https://www.svd.se/beslut-da-maste-alla-i-stockholm-sopsortera" target="_blank" rel="noopener noreferrer">mer...</a>
          <br />
          <hr className="horrow" />

        </div>
      </div>
    </section>
  );
};


export default News;
