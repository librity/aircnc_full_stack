import React, { useState } from 'react';

import camera from '../../assets/camera.svg';

export default function New() {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  function handlesSubmit() {

  }
  return (
    <form onSubmit={handlesSubmit}>
      <label id="thumbnail">
        <input type="file"  />
        <img src={camera} alt="Select image" />
      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
      id="company"
      placeholder="Sua empresa maravilhosa"
      value={company}
      onChange={event => setCompany(event.target.valeu)}
      />

      <label htmlFor="techs">TECNOLOGIAS * <span>(separades por virgula)</span></label>
      <input
      id="techs"
      placeholder="Quais tecnoligias usam?"
      value={techs}
      onChange={event => setTechs(event.target.valeu)}
      />

      <label htmlFor="price">VALOR DA DIARIA <span>(em branco para gratuito)</span></label>
      <input
      id="price"
      placeholder="Valor cobrado por dia?"
      value={price}
      onChange={event => setPrice(event.target.valeu)}
      />

      <button type="submit" className="type1">Cadastrar</button>
    </form>
  )
};