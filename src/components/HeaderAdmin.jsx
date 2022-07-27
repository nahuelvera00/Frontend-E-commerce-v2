import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import BurgerButton from './BurguerButton';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const HeaderAdmin = () => {
  const { cerrarSesionAuth } = useAuth();

  const handleCerrarSesion = () => {
    cerrarSesionAuth();
    localStorage.removeItem('token');
  };

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <Link className="text-white font-bold text-xl" to="/admin">
          Admin
        </Link>
        {screen.width <= 768 ? null : (
          <div className="btn-logout">
            <button type="button" onClick={handleCerrarSesion}>
              Cerrar Sesion
            </button>
          </div>
        )}
        <div
          className={`text-white uppercase links ${clicked ? 'active' : ''}`}
        >
          <div className="pt-2">
            <Link to="products">Productos</Link>
          </div>
          <div className="py-1">
            <Link to="orders">Pedidos</Link>
          </div>
          <div className="py-1">
            <Link to="events">Eventos</Link>
          </div>
          <div className="py-1">
            <Link to="categories-brands">Categorias y Marcas</Link>
          </div>
          <div className="pb-2">
            <button type="button" onClick={handleCerrarSesion}>
              Cerrar Sesion
            </button>
          </div>
        </div>

        <div className="burguer">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
    </>
  );
};

export default HeaderAdmin;

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  h2 {
    color: white;
    font-weight: 400;
    font-size: 20px;
  }
  .btn-logout {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  padding: 5px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  button {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: 0px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 80;
    button {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      button {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: none;
    }
  }
  .links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    top: 62px;
    left: 0;
    right: 0;
    text-align: center;
    background-color: #bfb9b9;
    button {
      color: black;
      margin-top: 7px;
      margin-bottom: 7px;
      font-size: 1rem;
    }
  }
  .burguer {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
