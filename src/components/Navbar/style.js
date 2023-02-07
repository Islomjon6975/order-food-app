import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`

const Nav = styled.nav`
  max-width: 1440px;
  width: 100%;
  padding: 10px 131px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  border-bottom: 1px solid black;

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

Nav.Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

Nav.Column.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
`

Nav.Column.Wrapper.Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`

Nav.Column.Title = styled.h4`

`

const Logo = styled.img`
  width: 60px;

  @media (max-width: 428px) {
    width: 40px;
  }
`

Nav.Column.Ul = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 100%;
`

const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
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

export { Container, Wrapper , Nav, Logo, Icons}

// 1440 131
// 1280 -x
// 262
// 1178