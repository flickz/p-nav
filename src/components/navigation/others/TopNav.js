import React, { Component } from 'react'
import styled from 'styled-components'
import { FiChevronDown, FiSearch, FiChevronRight } from 'react-icons/fi'

import Logo from '../../util/logo';

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
  height: 36px;
  color: #fff;
  cursor: pointer;
  border: none;
  font-weight: 700;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
`

const DropDownButton = styled(Button)`
  display: flex;
  align-items: center;
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

const ExploreMenuWrapper = styled.div`
  height: 400px;
  width: 300px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 4px 16px rgba(20,23,28,0.25);
  position: absolute;
  top: 54px;
  left: 20.5%;
  z-index: 10;
`

const MenuItemWrapper = styled.ul`
  padding: 0;
  display: block;
  margin-top: 25px;
  margin-left: -0px;
`

const MenuItem = styled.li`
  list-style: none;
  width: 100%;
`

const ListItemWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  :hover {
    background-color: #f1f1f1; 
  }
`

const Link = styled.a`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding: 5px 25px;
  color: #1f1f1f;
`
const ExploreMenuFooterWrapper = styled.div`
  position: relative;
  top: 35%;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
const DividerLine = styled.hr`
  margin: 0 25px;
`
const LinkButton = styled.a`
  text-decoration: none;
  width: 100%;
  height: 30px;
  padding: 10px;
  color: #ffffff;
  background-color: #af2b1a;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
`

const ExploreAllButton = styled(LinkButton)`
  margin-top: 20px;
  margin-left: 60px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-image: linear-gradient(#c35753,#af2b1a);
  :hover {
    opacity: 8;
  }
`
const ExploreSubMenuWrapper = styled(ExploreMenuWrapper)`
  background-color: #F7F8FA;
  left: 100%;
  top: -1px;
  box-shadow: 4px 4px 16px rgba(10,13,18,0.15);
  z-index: 15;
`

const verticals = [
  {
    Id: 1,
    Name: "Health & Fitness",
    categories: [
      {
        Id: 1,
        Name: "Booty & Abs",
        Verticals: 1,
        State: "active"
      },
      {
        Id: 2,
        Name: "Full Body",
        Verticals: 1,
        State: "active"
      }
    ]
  },
  {
    Id: 2,
    Name: "Business",
    categories: [
      {
        Id: 3,
        Name: "Advertising",
        Verticals: 2,
        State: "active"
      },
      {
        Id: 4,
        Name: "Writing",
        Verticals: 2,
        State: "active"
      }
    ]
  },
  {
    Id: 3,
    Name: "Music",
    categories: []
  }
]

export default class TopNav extends Component {
  state = {
    menuIsOpen: false,
    verticalExpanded: false,
    expandedVerticalCategories: []
  }

  handleExploreMouseHover = () => {
    this.setState((prevState) => ({
      menuIsOpen: !prevState.menuIsOpen
    }))
  }

  handleMouseEnterVertical (categories, event) {
    console.log(categories)
    this.setState({
      verticalExpanded: true,
    })
  }

  handleMouseLeaveVertical (categories, event) {
    this.setState({
      verticalExpanded: false,
      categories: []
    })
  }

  renderExploreSubMenu () {
    const { verticalExpanded } = this.state;
    const categories = verticals[0].categories;
    if (verticalExpanded) {
      return (
        <ExploreSubMenuWrapper>
          <MenuItemWrapper>
            {categories.map((category) => {
              return (
                <MenuItem key={category.Id}>
                  <ListItemWrapper>
                    <Link 
                      href="#" 
                      // onMouseEnter={this.handleMouseEnterVertical.bind(this, vertical.Id)}
                      // onMouseLeave={this.handleMouseLeaveVertical.bind(this, vertical.Id)}
                    >
                      {category.Name}
                      <FiChevronRight style={iconStyles}/>
                    </Link>
                  </ListItemWrapper>
                </MenuItem>
              )
            })}
          </MenuItemWrapper>
        </ExploreSubMenuWrapper>
      )
    }
  }

  renderExploreMenu () {
    if (this.state.menuIsOpen) {
      return (
        <ExploreMenuWrapper>
          <MenuItemWrapper>
            {verticals.map((vertical) => {
              return (
                <MenuItem 
                  key={vertical.Id}
                  onMouseEnter={this.handleMouseEnterVertical.bind(this, vertical.categories)}
                  onMouseLeave={this.handleMouseLeaveVertical.bind(this, vertical.categories)}  
                >
                  <ListItemWrapper >
                    <Link 
                      href="#"
                    >
                      {vertical.Name}
                      {/* Don't show expandable arrow when categories is zero */}
                      {vertical.categories.length !== 0 && <FiChevronRight style={iconStyles}/>}
                    </Link>
                    {this.renderExploreSubMenu()}
                  </ListItemWrapper>
                </MenuItem>
              )
            })}
          </MenuItemWrapper>
          <ExploreMenuFooterWrapper>
            <DividerLine />
            <ExploreAllButton href="#">Explore All</ExploreAllButton>
          </ExploreMenuFooterWrapper>
        </ExploreMenuWrapper>
      )
    } 
  }

  render () {
    return(
      <Header>
        <StartWrapper>
          <Logo />
          <DropDownButton onMouseEnter={this.handleExploreMouseHover} onMouseLeave={this.handleExploreMouseHover}>
            Explore
            <FiChevronDown style={iconStyles} />
            {this.renderExploreMenu()}
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
    )
  }
}

