import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 131px;
  margin: auto;

  @media (max-width: 1280px) {
    padding: 0 116px;
  }
`

export {Container, Wrapper}