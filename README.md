# React Shopping List App

Shopping list app that allows users to manage items they need
to buy on their next shop visit.

## Objective

The objective of this task is to help understand Redux, which is the default tool used in
complex projects to manage and share state between components as compared to prop
drilling and context.

### The requirements of the app are as follows:

1. Design a user-friendly interface that allows users to manage their shopping list
efficiently. Include pages that allow users to:
a. Add new items to the list
b. Display the already added items
c. Edit existing items on the shopping list
d. Delete existing items from the list
2. Firebase should be used as the database, so all edits that happen should be
persistent and available on every app reload.
3. Redux should be used for state management within the project.
a. Set up a Redux store, reducers and actions to manage your data.
b. All data from firebase will be stored on the redux store then accessed from
the app’s components using Redux actions/reducers.
4. Adding Items:
a. Implement a screen or modal for adding new items to the shopping list.
b. Include input fields for entering the item name, quantity, and any other desired
information.
c. On submission, dispatch a Redux action to add the new item to the shopping
list.
5. Shopping List Display:
a. Display the list of shopping items on a dedicated screen.
b. Retrieve and display the list from the Redux store.
c. Each shopping item should include a name, quantity, and any other relevant
information.
6. Editing Items:
a. Provide functionality to edit existing shopping list items.
b. Allow users to select an item from the list and navigate to an edit screen.
c. Display the current information of the selected item and provide input fields to
modify the details.
d. On submission, dispatch a Redux action to update the item in the shopping
list.
7. Deleting Items:
a. Allow users to delete items from the shopping list.
b. Include a delete button or icon for each item in the list.
c. On deletion, dispatch a Redux action to remove the item from the shopping
list.
8. Styling:
a. Apply appropriate styles to the components to create an appealing and
user-friendly interface.
b. Utilize styling properties like font family, font size, color, padding, margin, and
background color to enhance the design.
c. Consider using a consistent color scheme and typography throughout the
app.
9. Code Quality and Organization:
a. Write clean and well-structured code, adhering to best practices for React
Native and Redux development.
b. Use meaningful variable and function names.
