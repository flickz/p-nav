import verticals from './data/verticals.json'
import categories from './data/categories.json'
import courses from './data/courses.json'

export const transFormData = function () {
  let verticalData, categoryData, courseData;
  verticalData = JSON.stringify(verticals)
  categoryData = JSON.stringify(categories)
  courseData = JSON.stringify(courses)

  try {
    verticalData = JSON.parse(verticalData);
    categoryData = JSON.parse(categoryData);
    courseData = JSON.parse(courseData);
  } catch (err) {
    throw new Error(err)
  }

  function getVerticalCategories (verticalId) {
    const categories = categoryData.filter((category) => {
      return category.Verticals === verticalId
    })
    return categories
  }

  function getCourses (categoryId) {
    const courses = courseData.filter((course) => {
      return course.Categories === categoryId
    })
    return courses;
  }

  verticalData.forEach((vertical) => {
    vertical.Categories = getVerticalCategories(vertical.Id)
  })

  return {
    menuData: verticalData,
    getCourses
  }
}