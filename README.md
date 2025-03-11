# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

DONE As a user, I should see a nav bar with links at the top of each page in the application.

DONE As a user, clicking on the ‘Home’ link should navigate me to a landing page that displays the text ‘Post Office’.

DONE As a user, clicking on the ‘New Mailbox’ link should navigate me to a page with a form for submitting new mailboxes.

DONE As a user, when viewing the form on the ‘New Mailbox’ page, I should see a <form> with an <input> for the name of the boxOwner and a <select> menu for the boxSize. The <select> menu should include three options: ‘Small’, ‘Medium’, and ‘Large’.

DONE As a user, I should not be required to select a box number when creating a new mailbox. When a new mailbox is created, it should be assigned a box number, or _id, automatically. This number should increment based on the number of mailboxes that already exist.

DONE As a user, when I submit a the ‘New Mailbox’ form, I should be redirected to the ‘Mailboxes’ page (/mailboxes) where I will see the newly created mailbox added to the list.

DONE As a user, clicking on the ‘Mailboxes’ link should navigate me to a ‘Mailboxes’ page.

DONE As a user, when viewing the ‘Mailboxes’ page, I should be able to see a list of all the existing mailboxes. Each mailbox in the list should be a square container with a box number _id.

As a user, when viewing the ‘Mailboxes’ list page, I want to be able to click on a mailbox, and be directed to a mailbox details page.

As a user, when viewing the details page, I should see details about a specific mailbox. The details should include the box number (_id), the name of the box owner, and the box size.

As a user, I should see the message ‘Mailbox Not Found!’ if I navigate to the details page for a mailbox that does not exist.
