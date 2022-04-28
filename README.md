# afs-test

## Details

This is a Vue 2 project with TS using these libraries for component setup:
```vue-class-component```
```vue-property-decorator```

## Assignments

### table row
On the "Home" page is a table, add a row to this table that displays the totals of the other rows.

<-------------------------------------------------------------------------------------------------->

The implemented solution for this task is a separate component getting all the data it need from it's parent (Home.vue).
In order for the cells of this component to match with the table's in case of a big screen I have include the text label but gave a transparent color

### Async/Await
In the mounted function the data for the table is being fetched, edited and placed in the tableData property with a promise chain. 
Rewrite this function but instead of chaining promises use async/await to do the exact same. 

<-------------------------------------------------------------------------------------------------->

At the then chain, the loading prop was changing in to true after the data were fetched.
After the refactor in to async/await I moved the property mutation before the await so it will have the expected behavior.

### Add a security class
On the home page create a button that opens a modal window that contains a form. This form should allow you to add a security class to the table, also updating the totals.

<-------------------------------------------------------------------------------------------------->

For this task a new modal template was created and used to display the newSecurityModal component.
Also the data fetch and the state management of Home component's loading and homeTableData was moved to vuex. Now Home component holds the state for just showing the newSecurityModal.
Fore the form validation I used a custom method, an other approach could be to use the vee-validate but I wanted to avoid adding an extra third party package.

### Transfer search
On the Transfers page you find a list of financial transfers with a search bar. Make the transferlist searchable by "recordDate".

<-------------------------------------------------------------------------------------------------->

After the refactoring of the search function an extra null check was necessary because the recordDate prop might be null occasionally. 

### Style the transferRow.vue component
Rework the style for this component, using this design. Make it look as close as possible.
https://i.pinimg.com/736x/29/bc/e5/29bce59f6cdf71eb840d939ba05deff1--best-ui-design-app-ui-design.jpg 
If you for whatever reason do not have a similar result to the image, please let us know when you send in the work.

<-------------------------------------------------------------------------------------------------->

The left border's color of each tile is different depending on the type of the transfer. To get the appropriate color a new class is created in order to pass the appropriate class names of each transfer tile. 

### Fix the update transfers button
Something is going wrong with this button, fix it and explain why it broke in the comments.

<-------------------------------------------------------------------------------------------------->

The bug occurred because of Vue's default reactivity behavior. In to have Vue automatically react to value changes, the objects must be initially declared in data. Or, if not, they must be added using Vue.set(). 
So because in our case the property was added after the initial declaration one of the possible solutions is to add it using Vue.set()



To hand in the project, please create a repository and invite mvanloon@afsgroup.nl and sarissen@afsgroup.nl.
Good luck!

## Notes
Do not use the included buefy UI components for your assignments.

We have tested this project to work with node 16.14.0 (it may work with other versions as well).


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
