import React, { Component } from 'react';
import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { MenuItemWrapper, MenuWrapper } from './util/sharedStyles'

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

const CategoriesSubMenuWrapper = styled(MenuWrapper)`
  background-color: #F7F8FA;
  left: 100%;
  box-shadow: 4px 4px 16px rgba(10,13,18,0.15);
  z-index: 15;
  top: -1px;
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

const SubMenuTitleWrapper = styled.div`
  text-align: center;
  padding-top: -20px;
  margin-top: -10px;
`

const SubMenuTitle = styled.p`
  color: #545963;
  font-weight: 700;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
`
const CategoryTitleWrapper = styled(SubMenuTitleWrapper)`
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CategoryTitle = styled.span`
  color: #545963;
  font-weight: 700;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
`
const ViewAllLinkWrapper = styled.span`
  
`

const ViewAllLink = styled(Link)`
  padding: 0;
  font-size: 13.5px;
  text-decoration: underline;
`

const CourseSubMenuWrapper = styled(CategoriesSubMenuWrapper)`
  background-color: #F2F3F5;
`
const ScrollableMenuItemWrapper = styled(MenuItemWrapper)`
  overflow-y: auto;
  min-height: 350px;
`
const CourseListWrapper = styled(ListItemWrapper)`
  min-height: 70px;
  margin-top: 10px;
`  

const CourseLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CoursePlaceImagePlaceHolder = styled.span`
  height: 100%;
  width: 10%;
  box-sizing: border-box;
  background-color: #af2b1a;
`
const CourseInformation = styled.span`
  height: 100%;
  width: 100%;
  box-sizing: content-box;
  text-align: right;
`
const CourseAuthorName = styled.span`
  color: #af2b1a;
`

const iconStyles = {
  fontSize: '16',
  fontWeight: '700',
  fontFamily: `'Open Sans', sans-serif;`
}

export default class MenuItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      verticalExpanded: false,
      categoryExpanded: false,
      selectedVertical: {},
      selectedCategeory: {}
    }
  }

  handleMouseEnterVertical (vertical, event) {
    this.setState({
      verticalExpanded: true,
      selectedVertical: vertical
    })
  }

  handleMouseLeaveVertical (categories, event) {
    this.setState({
      verticalExpanded: false
    })
  }

  handleMouseEnterCategory (category, event) {
    this.setState({
      categoryExpanded: true,
      selectedCategeory: category
    })
  }

  handleMouseLeaveCategory (category, event) {
    this.setState({
      categoryExpanded: false
    })
  }

  renderCoursesSubMenu () {
    const { selectedCategeory, categoryExpanded } = this.state
    const courses = this.props.fetchCourses(selectedCategeory.Id)
    if (categoryExpanded && courses.length !== 0) {
      return (
        <CourseSubMenuWrapper>
          <ScrollableMenuItemWrapper>
            <CategoryTitleWrapper>
              <CategoryTitle>{selectedCategeory.Name}</CategoryTitle>
              <ViewAllLinkWrapper>
                <ViewAllLink href="#">View All</ViewAllLink>
              </ViewAllLinkWrapper>
            </CategoryTitleWrapper>
            {courses.map(course => {
              return (
                <MenuItem key={course.Id}>
                  <CourseListWrapper>
                    <CourseLink href="#" >
                      <CoursePlaceImagePlaceHolder />
                      <CourseInformation>
                        <p>{course.Name}</p>
                        <CourseAuthorName>- {course.Author}</CourseAuthorName>
                      </CourseInformation>
                    </CourseLink>
                  </CourseListWrapper>
                </MenuItem>
              )
            })}
          </ScrollableMenuItemWrapper>        
        </CourseSubMenuWrapper>
      )
    }
  }

  renderCategoriesSubMenu () {
    const { verticalExpanded, selectedVertical, selectedCategeory } = this.state;
    const categories = selectedVertical.Categories
    if (verticalExpanded && categories.length !== 0) {
      return (
        <CategoriesSubMenuWrapper>
          <MenuItemWrapper>
            <SubMenuTitleWrapper>
              <SubMenuTitle>{selectedVertical.Name}</SubMenuTitle>
            </SubMenuTitleWrapper>
            {categories.map((category) => {
              return (
                <MenuItem 
                  key={category.Id}
                  onMouseEnter={this.handleMouseEnterCategory.bind(this, category)}
                  onMouseLeave={this.handleMouseLeaveCategory.bind(this, category)}  
                >
                  <ListItemWrapper>
                    <Link href="#">
                      {category.Name}
                      <FiChevronRight style={iconStyles}/>
                    </Link>
                    {selectedCategeory.Id === category.Id && this.renderCoursesSubMenu()}
                  </ListItemWrapper>
                </MenuItem>
              )
            })}
          </MenuItemWrapper>
        </CategoriesSubMenuWrapper>
      )
    }
  }

  render() {
    const { verticals } = this.props;
    const { selectedVertical } = this.state;
 
    return (
      <React.Fragment>
        {verticals.length !== 0 && verticals.map((vertical) => {
          return (
            <MenuItem
              key={vertical.Id}
              onMouseEnter={this.handleMouseEnterVertical.bind(this, vertical)}
              onMouseLeave={this.handleMouseLeaveVertical.bind(this, vertical)}
            >
              <ListItemWrapper >
                <Link 
                  href="#"
                >
                  {vertical.Name}
                  {/* Don't show expandable arrow when categories is zero */}
                  {vertical.Categories.length !== 0 && <FiChevronRight style={iconStyles}/>}
                </Link>
                <div>
                  {selectedVertical.Id === vertical.Id && this.renderCategoriesSubMenu()}
                </div>
              </ListItemWrapper>
            </MenuItem>
          )
        })}
      </React.Fragment>
    )
  } 
} 
