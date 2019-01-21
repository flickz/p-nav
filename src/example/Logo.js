import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`

`

const Link = styled.a`
  color: #af2b1a;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  text-decoration: none;
  margin-right: 30px;
  font-size: 1.8em;
`

export default () => {
  return (
    <LogoWrapper>
     <Link href="#">
        Passion.io
     </Link>
    </LogoWrapper>
  )
}
