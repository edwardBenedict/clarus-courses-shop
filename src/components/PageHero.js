import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cwWtry from "../assets/cw-wtry.png";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center about-header">
        <h3 className="h3-header">
          <Link to="/">Home </Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
        <img src={cwWtry} alt="way-to-reinvent-yourself" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  .about-header {
    display: flex;
    justify-content: space-around;
  }

  .h3-header {
    display: flex;
    align-items: center;
  }

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }

  img {
    width: 400px;
  }

  @media (max-width: 992px) {
    img {
      width: 200px;
    }
    .about-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default PageHero;
