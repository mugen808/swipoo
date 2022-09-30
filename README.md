# swipoo


The idea here is to build a very simple UI platform enable users to create and store data entries (user+car details). Models list and model details should be fecthed using swipoo's APIs endpoints.

## Task 1
- After choosing required parameters (Brand, Fuel and Enrollment date), user is able to choose from a list of models
- This entry (with all its data) should have the possibility to be added to a list of "booked cars"

## Task 2
- A second screen is needed, where we will show more details of the "booked" car
- We also show an "evaluation" of the total price of the car and an estimation for the next years, where the value decreases 10% per year

For pursuing that, the idea was to present a clean interface, where a user can add and consult multiple entries and its details without less clicks

### Run project
To run this project you need to clone the repository and:

### Option 1
- npm i
- npm run dev
- should be running on http://localhost:5173/

### Option 2
- npm i
- npm run build
- npm run preview
- should be running on http://localhost:4173/