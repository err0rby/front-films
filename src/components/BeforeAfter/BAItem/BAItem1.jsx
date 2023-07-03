import React from "react";
import './styles.css';

const BAItem1 = () => {
  function before() {
    document.getElementById("obavenusab").style.width =
      document.getElementById("edsumid").value + "%";
  }
  return (
    <div className="gallery_img">
      <div className="gallery_info">
        <p>Заказ №371: Альпийская горка</p>
        <p>Альпинарий на даче – украшение участка. Учитывая размер дачной территории, можно устанавливать горку большого размера с применением различных видов растений, кустарников и дополнительных фигурок (вечером освещённая горка будет смотреться особенно роскошно)</p>
      </div>
      <div className="slayden-savnena1">
        <figure>
          <div id="obavenusab"></div>
        </figure>
        <input
          onInput={before}
          onChange={before}
          type="range"
          min="0"
          max="100"
          value="50"
          id="edsumid"
        />
      </div>
    </div>
  );
};

export default BAItem1;
