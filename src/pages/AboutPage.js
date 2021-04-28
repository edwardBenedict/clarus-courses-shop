import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about.png";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about us" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Who we are?</h2>
            <div className="underline"></div>
          </div>
          <p>
            We’re a Virginia-based IT training school specializing in coding,
            testing, automation, and Information Assurance. Our founding team of
            scholar-practitioners represents a wide spectrum of professional
            backgrounds, and leaders bring proven success records in their
            fields – IT professionals, IT entrepreneurs, and respected
            educators. We’ve established a practical bridge connecting the world
            of research and theory with emerging industry trends. In the
            ever-changing IT world, we continually update our versatile
            curriculum based on the latest advances in technology.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: auto;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
