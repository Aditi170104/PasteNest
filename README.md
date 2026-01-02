# PasteNest

PasteNest is a React-based paste management application built to practice and demonstrate real-world frontend development concepts such as state management, routing, persistence, and UI interactions. The project focuses on learning by implementation rather than using pre-built abstractions.

---

## Features

- Create, edit, view, and delete text pastes
- Edit pastes using URL query parameters
- View pastes via dynamic routing
- Search pastes by title
- Copy paste content to clipboard
- Delete all pastes at once
- Persistent data storage using localStorage
- Clean, minimal UI with icon-based actions

---

## Key Learnings & Concepts Used

### React Fundamentals
- Functional components
- `useState` for form and UI state
- `useEffect` for syncing state with route changes
- Controlled inputs
- Component-based architecture

---

### Routing (React Router DOM)
- Client-side routing using `createBrowserRouter`
- Dynamic routes using `useParams`
- Query parameter handling using `useSearchParams`

Routes implemented:
- `/` → Create / Edit paste
- `/pastes` → View all pastes
- `/pastes/:id` → View individual paste

---

### State Management (Redux Toolkit)
- Centralized global state using Redux Toolkit
- Created a Redux slice for paste operations
- Used `useDispatch` and `useSelector` hooks
- Implemented reducers for:
  - Add paste
  - Update paste
  - Delete paste
  - Reset all pastes


<img width="870" height="400" alt="image" src="https://github.com/user-attachments/assets/d4c53978-cc49-4604-a66b-11af93fd4ab7" />

<img width="870" height="400" alt="image" src="https://github.com/user-attachments/assets/9b99f70a-0472-4d3d-aa90-0fb5f2681a48" />
