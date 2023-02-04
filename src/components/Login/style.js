import styled from "styled-components";

const Container  = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  max-width: 1440px;
  padding: 0 131px;
  width: 100%;
  margin: auto;

  @media (max-width: 1280px) {
    padding: 0 116px;
  }

  @media (max-width: 1178px) {
    padding: 0 30px;
  }

  @media (max-width: 884px) {
    grid-template-columns: 1fr  1fr;
  }

  @media (max-width: 428px) {
    padding: 0 10px;
  }
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid black;
  margin: auto;
`

const Input = styled.input`
  outline: none;
  height: 35px;
  padding-left: 15px;
`

export { Container, Wrapper, Input,Form }