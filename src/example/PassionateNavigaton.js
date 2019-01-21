import React, { Component } from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import { transFormData } from './util'
import Menu from '../components/Menu';

import Logo from './Logo';

const Header = styled.header`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 4;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0,0,0,.12);
  background: #fff;
`

const StartWrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
`

const EndWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Button = styled.button`
  background-color: #af2b1a;
  outline: none;
  cursor: pointer;
  height: 36px;
  color: #fff;
  border: none;
  font-weight: 700;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
`

const DropDownButton = styled(Button)`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 10px;
  :only-child {
    font-weight: 700;
    font-size: 16px !important;
  }
`

const TopSearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  width: 70%;
  height: 40px;
  background-color: #F2F3F5;
  box-sizing: border-box;
`

const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border: none;
  outline: none;
  line-height: 1.43;
  box-sizing: border-box;
  color: #000;
  background-color: #F2F3F5;
  padding: 10px 12px;
`

const SearchButton = styled(Button)`
  border-radius: 0;
  cursor: pointer;
  height: 100%;
  width: 40px;
`

const AuthButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SignUpButton = styled(Button)`

`
const LoginButton = styled(Button)`
  color: #545963;
  background-color: #fff;
  border: 1px solid #545963;
  margin-right: 30px;
`

const iconStyles = {
  fontSize: '16',
  fontWeight: '700',
  fontFamily: `'Open Sans', sans-serif;`
}

export default class PassionateNavigation extends Component {
  state = {
    menuOpened: false
  }

  handleExploreMouseHover = () => {
    this.setState((prevState) => ({
      menuOpened: !prevState.menuOpened
    }))
  }

  renderMenu () {
    const { getCourses, menuData } = transFormData()
    if (this.state.menuOpened) {
      return (
        <Menu 
          styles={{
            top: '52px'
          }}
          data={menuData}
          exploreBtnOption={{
            include: true,
            url: '/explore'
          }}
          fetchCourses={(categoryId) => {
            return getCourses(categoryId)
          }}
        />
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <StartWrapper>
            <Logo />
            <DropDownButton onMouseEnter={this.handleExploreMouseHover} onMouseLeave={this.handleExploreMouseHover}>
              Explore
              <FiChevronDown style={iconStyles} />
              <div>
                {this.renderMenu()}
              </div>
            </DropDownButton>
            <TopSearchInputWrapper>
              <SearchInput type="text" placeholder="Search for courses"/>
              <SearchButton>
                <FiSearch style={iconStyles} />  
              </SearchButton>   
            </TopSearchInputWrapper>
          </StartWrapper>
          <EndWrapper>
            <AuthButtonWrapper>
              <LoginButton>Log In</LoginButton>
              <SignUpButton>Sign Up</SignUpButton>
            </AuthButtonWrapper>
          </EndWrapper>
        </Header>
      </React.Fragment>
    )
  }
}