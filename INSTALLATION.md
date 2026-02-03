# 🚀 MyShop Angular Application - Installation Instructions

## ⚡ Quick Start (5 Minutes)

### Step 1: Check Node.js Installation
Open PowerShell and run:
```powershell
node --version
npm --version
```

If you see version numbers, skip to Step 3. If not, continue with Step 2.

### Step 2: Install Node.js (If Needed)
1. Download Node.js LTS from: https://nodejs.org/
2. Run the installer (recommended: Latest LTS version)
3. Accept all default settings
4. Restart your computer or refresh environment
5. Verify: Open PowerShell and run:
   ```powershell
   node --version
   npm --version
   ```

### Step 3: Install Dependencies
Open PowerShell in the project directory:
```powershell
cd e:\OffViv\PT_Codes\GitTesting\testangular
npm install
```

This will take 2-5 minutes depending on your internet speed.

### Step 4: Start the Application
```powershell
npm start
```

The application will automatically open in your browser at `http://localhost:4200/`

---

## 📋 What You'll See

### Home Page
- Welcome banner
- 6 featured products (Electronics, Fashion, Books, Sports, Home Decor, Beauty)
- "Why Choose Us" section
- Responsive design

### Navigation Menu
- **Home** - Landing page with products
- **About Us** - Company information and team
- **Contact** - Contact form and business info
- **Login** - Authentication (Login & Register)

### Login Page Demo Credentials
| User ID | Password |
|---------|----------|
| user1   | password1 |
| user2   | password2 |
| admin   | admin123 |
| test    | test123 |

---

## 📁 Project Structure

```
testangular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/      (Navigation bar)
│   │   │   └── footer/      (Footer)
│   │   ├── pages/
│   │   │   ├── home/        (Home page)
│   │   │   ├── about/       (About page)
│   │   │   ├── contact/     (Contact form)
│   │   │   └── login/       (Login & Register)
│   │   ├── services/
│   │   │   ├── auth.service.ts      (Authentication logic)
│   │   │   └── user.dao.ts          (Database access)
│   │   └── models/
│   │       └── user.model.ts        (Data interfaces)
│   └── assets/
│       └── data/
│           └── users.json   (User database)
├── package.json             (Dependencies)
├── angular.json             (Angular config)
└── README.md                (Documentation)
```

---

## 🔧 Available Commands

```powershell
# Start development server (opens browser automatically)
npm start

# Start without opening browser
npm run dev

# Build for production
npm run build

# Production build with optimization
npm run build:prod

# Watch mode (auto-rebuild on file changes)
npm run watch

# Stop the server: Ctrl + C
```

---

## ✨ Features Overview

✅ **Modern UI**
- Bootstrap 5 framework
- Responsive design
- Smooth animations
- Professional color scheme

✅ **User Authentication**
- Login functionality
- User registration
- JSON-based user storage
- Demo accounts for testing

✅ **Multiple Pages**
- Home page with products
- About Us section
- Contact form
- Dedicated login page

✅ **Mobile Responsive**
- Works on all devices
- Optimized for mobile
- Touch-friendly buttons
- Responsive images

✅ **Service Architecture**
- Service layer for business logic
- DAO layer for data access
- Proper separation of concerns
- Clean code structure

---

## 🔑 User Authentication

### How Login Works

1. User enters credentials (User ID and Password)
2. Application reads from `users.json`
3. Validates credentials
4. Shows success/error message
5. Redirects to home page on success

### Adding New Users

Edit `src/assets/data/users.json`:

```json
{
  "id": 5,
  "userId": "mynewuser",
  "password": "mypassword",
  "name": "My Name",
  "email": "my@email.com"
}
```

Then login with:
- User ID: `mynewuser`
- Password: `mypassword`

---

## 🎨 Customization

### Change Primary Color
Edit component styles and change:
```css
color: #667eea;           /* Current: Purple-Blue */
```
to your desired color.

### Change Product List
Edit `src/app/pages/home/home.component.ts` and modify the `products` array.

### Add New Menu Item
1. Create a new component in `src/app/pages/`
2. Add route in `src/app/app.routes.ts`
3. Add link in `src/app/components/header/header.component.ts`

---

## 🐛 Troubleshooting

### Problem: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Problem: "Port 4200 already in use"
**Solution**: Use different port
```powershell
ng serve --port 4201
```

### Problem: "Cannot read users.json"
**Solution**: Verify file exists at `src/assets/data/users.json`

### Problem: Application won't start
**Solution**: Clear cache and reinstall
```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm start
```

### Problem: Styles not loading
**Solution**: Restart dev server
```powershell
# Press Ctrl + C to stop
# Then run: npm start
```

---

## 📱 Browser Compatibility

The application works on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

---

## 📚 Documentation Files

- **README.md** - Full project documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **PROJECT_GUIDE.md** - Architecture and features
- **QUICK_REFERENCE.md** - Quick code reference

---

## 🚨 Important Notes

⚠️ **Node.js Required**: The application requires Node.js 16+ (tested with 20 LTS)

⚠️ **Internet Connection**: Needed for npm install and Bootstrap CDN resources

⚠️ **Port 4200**: Make sure port 4200 is available on your system

⚠️ **JSON Format**: Keep `users.json` in valid JSON format

---

## ✅ Installation Checklist

Before starting, make sure you have:

- [ ] Node.js installed (v16 or higher)
- [ ] npm installed
- [ ] Project folder extracted/cloned
- [ ] Terminal open in project directory
- [ ] Stable internet connection
- [ ] Port 4200 available

---

## 📞 Getting Help

If you encounter issues:

1. **Check browser console** (F12 → Console tab)
2. **Read error messages carefully**
3. **Check Terminal output**
4. **Review SETUP_GUIDE.md**
5. **Verify file structure matches docs**

---

## 🎯 Next Steps After Installation

1. ✅ Run `npm start`
2. ✅ Explore all pages using navigation menu
3. ✅ Test login with demo credentials
4. ✅ Submit contact form
5. ✅ Try responsive design (resize browser)
6. ✅ Register a new user
7. ✅ Customize colors and content

---

## 📊 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 20.x LTS | Runtime |
| npm | Latest | Package Manager |
| Angular | 17.x | Framework |
| TypeScript | 5.2 | Language |
| Bootstrap | 5.3 | CSS Framework |
| RxJS | 7.8 | Reactive Lib |

---

## 🎓 Learning Resources

- [Angular Documentation](https://angular.io/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

---

## 📝 Notes

- Application uses standalone components (Angular 17 style)
- Bootstrap Icons are loaded from CDN
- User data is stored locally in JSON (not a backend database)
- All features work offline after dependencies are installed

---

## 🎉 You're All Set!

Your Angular MyShop application is ready to run. 

Happy coding! 🚀

**Questions?** Check the documentation files for more details.
