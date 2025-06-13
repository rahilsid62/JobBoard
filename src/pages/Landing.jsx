import styled from 'styled-components';

const Landing = ()=>{
  return (
      <Wrapper>
          <h1>This is our landing page</h1>
          <h2>This the first index page of my website called as landing page</h2>
          <StylishButton>Click here please!</StylishButton>
      </Wrapper>
  );
};

const StylishButton = styled.button`
background-color:white;
color:black;`;

const Wrapper = styled.div`
background-color:green;
color: white;`


export default Landing;