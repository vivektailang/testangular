# Angular MyShop Application - Setup Guide

## Quick Start Guide

### Step 1: Install Node.js

If Node.js is not installed on your system:

1. Visit https://nodejs.org/
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the on-screen instructions
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Navigate to Project Directory

```bash
cd e:\OffViv\PT_Codes\GitTesting\testangular
```

### Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages including Angular 17, Bootstrap 5, and other dependencies.

### Step 4: Start the Application

```bash
npm start
```

The application will automatically open in your browser at:
- `http://localhost:4200/`

## Alternative Commands

```bash
# Start without opening browser
npm run dev

# Build for production
npm run build

# Build production-ready version
npm run build:prod

# Watch mode (auto-rebuild on file changes)
npm run watch
```

## Project Features

### 🏠 Home Page
- Hero section with call-to-action
- Featured products grid
- Why choose us section
- Responsive product cards

### 📄 About Us Page
- Company information
- Values and mission
- Team members section

### 📧 Contact Page
- Contact form with validation
- Contact information
- Business hours
- Responsive layout

### 🔐 Login & Registration
- User authentication
- User registration form
- Form validation
- Error handling
- Demo credentials for testing

### 🎨 Design Features
- Modern, clean UI with Bootstrap 5
- Smooth animations and transitions
- Responsive mobile design
- Sticky header and footer
- Professional color scheme
- Bootstrap Icons integration

## Authentication System

### Demo Users

Test the login functionality with these credentials:

1. **User 1**
   - User ID: `user1`
   - Password: `password1`

2. **User 2**
   - User ID: `user2`
   - Password: `password2`

3. **Admin**
   - User ID: `admin`
   - Password: `admin123`

4. **Test**
   - User ID: `test`
   - Password: `test123`

### Adding New Users

Edit the file `src/assets/data/users.json`:

```json
{
  "id": 5,
  "userId": "yourusername",
  "password": "yourpassword",
  "name": "Your Name",
  "email": "your@email.com"
}
```

## Project Structure

```
testangular/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   └── header.component.ts
│   │   │   └── footer/
│   │   │       └── footer.component.ts
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   └── home.component.ts
│   │   │   ├── about/
│   │   │   │   └── about.component.ts
│   │   │   ├── contact/
│   │   │   │   └── contact.component.ts
│   │   │   └── login/
│   │   │       └── login.component.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts (Authentication Service)
│   │   │   └── user.dao.ts (Data Access Object)
│   │   ├── models/
│   │   │   └── user.model.ts (Data Interfaces)
│   │   ├── app.component.ts (Root Component)
│   │   └── app.routes.ts (Routing Configuration)
│   ├── assets/
│   │   └── data/
│   │       └── users.json (User Database)
│   ├── styles.css (Global Styles)
│   ├── index.html
│   └── main.ts (Entry Point)
│
├── angular.json (Angular Configuration)
├── tsconfig.json (TypeScript Configuration)
├── package.json (Dependencies)
└── README.md (Project Documentation)
```

## Application Architecture

### Three-Tier Architecture

1. **Presentation Layer** (Components)
   - HeaderComponent
   - FooterComponent
   - Pages (Home, About, Contact, Login)

2. **Service Layer** (AuthService)
   - Login functionality
   - Registration functionality
   - User state management

3. **Data Access Layer** (UserDAO)
   - User data retrieval
   - JSON file management
   - CRUD operations

## Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 20.x | JavaScript Runtime |
| npm | Latest | Package Manager |
| Angular | 17.x | Frontend Framework |
| TypeScript | 5.2 | Programming Language |
| Bootstrap | 5.3 | CSS Framework |
| RxJS | 7.8 | Reactive Programming |
| Bootstrap Icons | 1.11 | Icon Library |

## Common Tasks

### View Home Page
1. Click "Home" in the navigation menu
2. See featured products and company info

### Test Login
1. Click "Login" in the header
2. Enter demo credentials (e.g., user1/password1)
3. Click "Login" button

### Register New User
1. Go to Login page
2. Click "Register here" link
3. Fill in all fields
4. Click "Register" button
5. Login with new credentials

### Submit Contact Form
1. Go to "Contact" page
2. Fill in your information
3. Enter your message
4. Click "Send Message"

## Responsive Breakpoints

The application is optimized for:
- **Mobile**: 320px - 576px
- **Tablet**: 577px - 992px
- **Desktop**: 993px and above

## Troubleshooting

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 4200 already in use
**Solution**: Use different port
```bash
ng serve --port 4201
```

### Issue: Users not loading
**Solution**: Check if `src/assets/data/users.json` exists and is valid JSON

### Issue: Styles not applying
**Solution**: Clear cache and rebuild
```bash
ng serve --poll=2000
```

### Issue: Components not displaying
**Solution**: Verify all imports in component files

## Browser Support

The application works on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Tree-shaking for optimal bundle size
- Lazy-loaded routes (where applicable)
- Minified assets in production
- Optimized images
- CSS optimization

## Development Tips

1. **Hot Module Replacement**: Changes automatically reload in browser
2. **TypeScript Compilation**: Provides type safety
3. **Bootstrap Grid**: Use for responsive layouts
4. **Icons**: Use Bootstrap Icons for consistency
5. **Colors**: Main theme color is #667eea (purple-blue)

## Next Steps

After running the application:

1. Explore all pages using the navigation menu
2. Test login with demo credentials
3. Try the contact form
4. Test responsive design by resizing browser
5. Customize colors and content as needed

## Need Help?

- Check [PROJECT_GUIDE.md](PROJECT_GUIDE.md) for detailed documentation
- Review component code in `src/app/pages/` for examples
- Check browser console (F12) for errors
- Verify all files exist in the `src/` directory

## Getting Started Commands Summary

```bash
# Navigate to project
cd testangular

# Install dependencies (one-time)
npm install

# Start development server
npm start

# Stop server: Ctrl + C

# Build for production
npm run build

# View production build
npm run build:prod
```

---

**Happy Coding! 🚀**

For more information, check out:
- [Angular Documentation](https://angular.io/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
