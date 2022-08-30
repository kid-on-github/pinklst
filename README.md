![checkmark logo](./public/logo192.png)
# [pinklst.com](https://pinklst.com/)

This is an over-engineered checklist web app used as a testing ground for learning new things during my free/personal development time at work.

### Naming
- Files and directories are CamelCase.
- Components are PascalCase.

### File Structure:
I'm experimenting with a new file structure for this project.
I'll be splitting the application up based on routes.
Each route that displays something will have a js file that will define the template and data for that page along with a Routes component that will contain routing rules for the current directory.
There may be components folders that will contain reusable components that can be used in the current route, or for subroutes (if multiple subroutes share that component).

> src/\
> -- app/\
> ---- app.js\
> ---- dashboard/\
> ------ dashboard.js\
> ------ list/\
> -------- list.js


### Things learned/experimented with so far:
- Redux
- React Refs / useRef hook
- Attaching a domain to a Cloudflare Pages project

### Deploying code:
- Cloudflare Pages

### Todo:
https://trello.com/b/lrNBVmkW/pinklstcom

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
