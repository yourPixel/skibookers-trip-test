# HANDBOOK

The project is a Vite + React (TypeScript) app built with 
a simple and clear structure. Reusable UI lives in components, 
pages like TripDetails are placed in pages, and shared layout 
elements are in layouts. Domain types, helpers, and utilities 
are separated to keep the code clean. Styling is done with 
styled-components using a small custom theme and media helpers 
for consistent responsiveness. Instead of using Feature-Sliced 
Design or Atomic Design, I chose a lighter, straightforward structure 
that fits the size of this project and keeps everything easy to navigate.

<hr>

For the logic, a small Zustand store manages the current 
trip state and updates. UI sections (Gallery, InfoPanel, 
PreferencesList) read from the store, which keeps the data 
flow simple and predictable. I’m a big fan of custom hooks 
and usually prefer to extract logic out of the UI layer, 
but in this project there wasn’t a large amount of complex 
logic, so there was less need to create additional hooks 
beyond small helpers. A mock API simulates data loading 
to keep the structure close to a real application. 
Combined with TypeScript and Vite, the project stays fast, 
easy to maintain, and simple to extend later.

## URL OF DEPLOYED APP
- https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react


