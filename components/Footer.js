import React from "react";

import styled from "styled-components";
const Footer = () => {
  return (
    //&copy is the copyright symbol
    //new Date().getFullYear() is the current year
    <footer className="footer bg-dark mt-auto py-3">
      <h5 className="text-center text-muted">
        <small>&copy; {new Date().getFullYear()}</small>
      </h5>
      <h5 className="text-center text-muted">
        <small>All Rights Reserved</small>
      </h5>
    </footer>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
