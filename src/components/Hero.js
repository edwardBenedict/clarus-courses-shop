import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/inf-tech-2.png";
import heroBcg2 from "../assets/inf-tech.png";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <div className="design">Design Your</div>
        <div className="design-body">
          <h1>future</h1>
          <h1>future</h1>
        </div>
        <p>
          We are committed to providing the most innovative and effective IT
          training available today. Our process is designed to lead each and
          every student to a successful professional career in the emerging
          global marketplace. We offer programs that enable YOU to level up!
        </p>
        <Link to="/products" className="btn hero-btn">
          enroll now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  .design {
    font-size: 4rem;
    color: var(--clr-cw-purple-dark);
    font-weight: bold;
  }

  .design-body {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 8rem;
      font-weight: 900;
      background-color: var(--clr-cw-purple-dark);
      color: #fff;
      display: block;
      /* padding: 0.5em; */
      border-bottom: 6px double white;
      border-top: 6px solid var(--clr-cw-purple-dark);
    }

    h1:nth-child(2) {
      position: absolute;
      background-color: #fff;
      color: var(--clr-cw-purple-dark);
      clip-path: inset(
        -1% -1% 38% -1%
      ); // Added the negative values to prevent icky "bleed" in Chrome
    }
  }

  /* span {
    color: var(--clr-cw-purple-light);
    font-family: courier;
    border-bottom: 6px double var(--clr-cw-purple-light);
    border-top: 6px double var(--clr-cw-purple-light);
    font-size: 5rem;
    padding-top: 4rem;
  } */

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: auto;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    /* .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    } */
  }
`;

export default Hero;
