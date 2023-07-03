import React from "react";
import './styles.css';

const BAItem3 = () => {
  function before() {
    document.getElementById("bavenusab").style.width =
      document.getElementById("dsumid").value + "%";
  }
  return (
    <div className="gallery_img">
      <div className="gallery_info">
        <p>Заказ №222: Большой лабиринт</p>
        <p>Бордюр для газона лабиринт выполнен в форме блоков, внешне напоминающих натуральный плоский камень. Когда секции устанавливаются одна за другой, получается своеобразная древняя кладка. В каждом блоке есть пазы-выступы, с помощью которых скрепляются соседние секции. Дополнительно предусмотрены специальные колья, втыкающиеся в грунт.</p>
      </div>
      <div className="slayden-savnena3">
        <figure>
          <div id="bavenusab"></div>
        </figure>
        <input
          onInput={before}
          onChange={before}
          type="range"
          min="0"
          max="100"
          value="50"
          id="dsumid"
        />
      </div>
    </div>
  );
};

export default BAItem3;
