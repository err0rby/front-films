import React from "react";
import './styles.css';

const BAItem2 = () => {
  function before() {
    document.getElementById("kobavenusab").style.width =
      document.getElementById("pedsumid").value + "%";
  }
  return (
    <div className="gallery_img">
      <div className="gallery_info">
        <p>Заказ №568: Дорожки из мозаики</p>
        <p>Дорожки, выполненные из мозаики, существенно меняют общее восприятие всего двора. Мозаика должна не только радовать глаз, но и быть практичной. Поэтому часто ее комбинируют с бетонными и кирпичными сегментами. Если ваш двор является небольшим по размеру, то можно позволить себе выложить тропинки мозаикой полностью.</p>
      </div>
      <div className="slayden-savnena2">
        <figure>
          <div id="kobavenusab"></div>
        </figure>
        <input
          onInput={before}
          onChange={before}
          type="range"
          min="0"
          max="100"
          value="50"
          id="pedsumid"
        />
      </div>
    </div>
  );
};

export default BAItem2;
