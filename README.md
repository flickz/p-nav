# Passsionate Navigation

### Thought process
I went through the json sample data provided, tried to understand what sort of navigation system can be build with the type of data, decided to do a little research and tap inspiration from related websites. Both [Coursera](https://coursera.org) and [Udemy](https://udemy.com) inspired my approach.

## Questions

### How does your solution perform?
My current solution works as a customizeble and reusable React component module, below is the API sample.
```js
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
```
In order to ease the complexity of using the module and without altering the original json sample provided, I wrote a small utility [function](https://github.com/flickz/p-nav/blob/master/src/example/util.js#L5) to parse and transform the data strcuture to an object similar to the one below:
```js
    const menuData = [
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
        }
    ]
```
NOTE: Only the category list are embeded in the transformation, embedling courses would result into a deeply nested object making it difficult to iterate. The courses are fetched through the `fetchCourses` prop required in the `Menu` component, by passing a function that takes `categoryId` as parameter. This allows fetching directly from a remote API server.

The `Menu` Component renders the list of the Vertical menu items while listening to two events `onMouseEnter` and `onMouseLeave`, the fomer set `verticalExpanded` and `selectedVertical` state to `true` and the currently hovered `vertical` object respectively, causing the category list to be rendered. While the latter event set the `verticalExpanded` to `false` and resets `selectedVertical` Similary thesame process applies to `CategoryList`. 
Below image shows what the UI looks like while the demo of the use case is here (https://flickz.github.io/p-nav/). Demo source code is [here](https://github.com/flickz/p-nav/blob/master/src/example/PassionateNavigaton.js)


![Screenshot (46).png](https://www.dropbox.com/s/dg2t4m6h6tjtcos/Screenshot%20%2846%29.png?dl=0&raw=1)

NOTE: The "Explore All" button provides a way for the user to explore all Courses and Categories and it is optional, the `Menu` component allows `exploreBtnOption` object props to be passed, by simply setting `exploreBtnOption.include` to `false` prevents it from showing and in case the user wants it, `exploreBtnOption.url` (the url to open when the "Explore All" is clicked) needs to be set. The `Menu` component can further be customized through `styles` props.
In cases where the course list is much, the `CourseList` box is scrollable.

## How does your solution scale?
The current solution scales automatically as the `Verticals` and `Categories` grows. `Courses` have the potential to grow much faster and would require fetching asynchrously, `fetchCourses(categoryId)` prop will make this easier to do.

## What would you improve next?
The module still needs a lot of improvements like enhancing a mobile experience, allow more style customization by adding a category icon. I couldn't get the time to write unit test for the module, an improved version should have a unit test. Also the Verticals, Categories and Courses need to have a url property.

Please regardless of the challenge outcome, I'd appreciate a feedback on this. 
Built with :heart: Oluwaseun

