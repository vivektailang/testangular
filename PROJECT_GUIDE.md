# MyShop - Angular E-Commerce Application

A modern, responsive Angular application built with Bootstrap 5, featuring a complete user authentication system, product showcase, and multi-page layout.

## Features

- ✅ **Responsive Design** - Mobile-first approach using Bootstrap 5
- ✅ **User Authentication** - Login and Registration with JSON-based user management
- ✅ **Multiple Pages** - Home, About Us, Contact, and Login pages
- ✅ **Sticky Header & Footer** - Navigation bar and footer on every page
- ✅ **Service Layer Architecture** - Clean separation with Service and DAO layers
- ✅ **Product Showcase** - Featured products with icons
- ✅ **Contact Form** - Functional contact form
- ✅ **Modern UI** - Interactive components with smooth animations

## Tech Stack

- **Angular 17** - Latest Angular framework
- **Bootstrap 5** - Responsive CSS framework
- **TypeScript** - Type-safe programming language
- **RxJS** - Reactive programming library
- **Node.js 20** - JavaScript runtime

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   └── footer/
│   ├── pages/
│   │   ├── home/
│   │   ├── about/
│   │   ├── contact/
│   │   └── login/
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── user.dao.ts
│   ├── models/
│   │   └── user.model.ts
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
│   └── data/
│       └── users.json
├── index.html
├── styles.css
└── main.ts
```

## Installation

1. **Install Node.js and npm** (if not already installed)
   ```bash
   # Download from https://nodejs.org/
   # Recommended: Latest LTS version
   ```

2. **Install Angular CLI** (global)
   ```bash
   npm install -g @angular/cli
   ```

3. **Install project dependencies**
   ```bash
   cd testangular
   npm install
   ```

## Running the Application

### Development Server

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:4200/`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Demo Credentials

Use these credentials to test the login functionality:

| User ID | Password   | Name       |
|---------|-----------|-----------|
| user1   | password1 | John Doe  |
| user2   | password2 | Jane Smith|
| admin   | admin123  | Admin User|
| test    | test123   | Test User |

## Application Architecture

### Service Layer (AuthService)
- Handles all authentication logic
- Manages user login and registration
- Maintains current user state

### DAO Layer (UserDAO)
- Manages user data persistence
- Reads from `users.json` file
- Provides user retrieval methods

### Components
- **Header** - Navigation menu with links
- **Footer** - Footer with company info
- **Home** - Landing page with featured products
- **About** - Company information
- **Contact** - Contact form for user inquiries
- **Login** - Authentication page with register option

## Features Breakdown

### 1. **Header Navigation**
- Sticky navigation bar
- Links: Home, About Us, Contact, Login
- Mobile-responsive hamburger menu
- Active link highlighting

### 2. **Product Showcase**
- Grid layout with product cards
- Product icons from Bootstrap Icons
- Hover animations
- Mobile-responsive grid

### 3. **Authentication System**
- Login with User ID and Password
- User Registration form
- Form validation
- Error and success messages
- JSON-based user storage

### 4. **Mobile Responsiveness**
- Breakpoints for mobile, tablet, desktop
- Touch-friendly buttons
- Responsive typography
- Flexible layouts using Bootstrap grid

## JSON User Data Format

The `users.json` file structure:

```json
[
  {
    "id": 1,
    "userId": "user1",
    "password": "password1",
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

You can add new users by following the same structure.

## Customization

### Adding New Users

Edit `src/assets/data/users.json` and add new user objects:

```json
{
  "id": 5,
  "userId": "newuser",
  "password": "newpassword",
  "name": "New User",
  "email": "newuser@example.com"
}
```

### Changing Colors

Primary colors are defined in components CSS. To change the theme:
1. Edit the gradient colors in component styles
2. Update Bootstrap primary color
3. Modify color variables in `styles.css`

### Adding New Pages

1. Create a new component in `src/app/pages/`
2. Add route to `app.routes.ts`
3. Add navigation link in header component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

- Application uses lazy loading where applicable
- Optimized bundle size with tree shaking
- Minified assets in production build
- Efficient change detection with OnPush strategy

## Troubleshooting

### Application won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm start
```

### Port 4200 already in use
```bash
# Use a different port
ng serve --port 4201
```

### Users.json not loading
- Ensure the file is in `src/assets/data/users.json`
- Check browser console for HTTP errors
- Verify assets are included in `angular.json`

## Future Enhancements

- Backend API integration
- Database user storage
- Advanced product filtering
- Shopping cart functionality
- Payment integration
- User profile management
- Admin dashboard

## License

This project is open-source and available for educational purposes.

## Support

For issues or questions, please check the project documentation or contact support.

---

**Created:** 2024  
**Version:** 1.0.0  
**Framework:** Angular 17  
**Bootstrap:** 5.3.2
