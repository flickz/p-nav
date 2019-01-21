import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MenuItemWrapper, MenuWrapper } from './util/sharedStyles'

import MenuItems from './MenuItems';

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

export default class VerticalMenu extends React.PureComponent {
  static propTypes = {
    styles: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.shape({
      Id: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      Categories: PropTypes.arrayOf(PropTypes.shape({
        Id: PropTypes.number.isRequired,
        Name: PropTypes.string.isRequired,
        Verticals: PropTypes.number.isRequired,
        State: PropTypes.string
      }))
    })),
    exploreBtnOption: PropTypes.shape({
      include: PropTypes.bool,
      url: PropTypes.string
    }),
    fetchCourses: PropTypes.func
  }

  static defaultProps = {
    styles: {},
    data: [],
    exploreBtnOption: {
      include: true,
      url: '#'
    }
  }

  renderExploreButton () {
    const { exploreBtnOption } = this.props;
    if (exploreBtnOption.include) {
      return (
        <ExploreMenuFooterWrapper>
          <DividerLine />
          <ExploreAllButton href={exploreBtnOption.url}>Explore All</ExploreAllButton>
        </ExploreMenuFooterWrapper>
      )
    }
  }

  render() {
    const { styles, data, fetchCourses } = this.props;

    return (
      <React.Fragment>
        <MenuWrapper style={{...styles}}>
          <MenuItemWrapper>
            <MenuItems 
              verticals={data}
              fetchCourses={fetchCourses}
            />
          </MenuItemWrapper>
          {this.renderExploreButton()}
        </MenuWrapper>
      </React.Fragment>
    )
  }
}
