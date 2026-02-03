# MyShop Angular Application - Architecture Diagrams

## 1. Application Structure

```
┌─────────────────────────────────────────────────────────┐
│          MyShop Angular Application (v1.0)              │
├─────────────────────────────────────────────────────────┤
│                    App Component (Root)                  │
│  ┌──────────────────────────────────────────────────┐   │
│  │            Header Component (Global)              │   │
│  │  [Home] [About] [Contact] [Login]                │   │
│  └──────────────────────────────────────────────────┘   │
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │              Main Content (Router)                │   │
│  │  ┌────────────┬────────────┬────────────┐         │   │
│  │  │    Home    │   About    │  Contact   │         │   │
│  │  │  Component │ Component  │ Component  │ + Login │   │
│  │  └────────────┴────────────┴────────────┘         │   │
│  └──────────────────────────────────────────────────┘   │
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │            Footer Component (Global)              │   │
│  │         [Company] [Links] [Social Media]         │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## 2. Service Architecture (3-Tier)

```
┌──────────────────────────────────────────────────────────┐
│          PRESENTATION LAYER (Components)                 │
├──────────────────────────────────────────────────────────┤
│  Header  │  Footer  │  Home  │  About  │  Contact │ Login│
│  Comp.   │  Comp.   │ Comp.  │  Comp.  │  Comp.   │ Comp.│
└────────┬─────────────────────────────────────────────────┘
         │
         │ Uses
         ▼
┌──────────────────────────────────────────────────────────┐
│           SERVICE LAYER (AuthService)                    │
├──────────────────────────────────────────────────────────┤
│  • login(userId, password)                               │
│  • register(userId, password, name, email)               │
│  • isLoggedIn()                                          │
│  • getCurrentUser()                                      │
│  • logout()                                              │
└────────┬─────────────────────────────────────────────────┘
         │
         │ Uses
         ▼
┌──────────────────────────────────────────────────────────┐
│         DATA ACCESS LAYER (UserDAO)                      │
├──────────────────────────────────────────────────────────┤
│  • getAllUsers(): Observable<User[]>                     │
│  • getUserById(userId): Observable<User>                 │
│  • addUser(user): Observable<AuthResponse>               │
└────────┬─────────────────────────────────────────────────┘
         │
         │ Uses
         ▼
┌──────────────────────────────────────────────────────────┐
│           HTTP CLIENT & JSON FILE                        │
├──────────────────────────────────────────────────────────┤
│  src/assets/data/users.json (User Database)              │
└──────────────────────────────────────────────────────────┘
```

## 3. Data Flow - Login Process

```
┌──────────────────┐
│  Login Component │
│   (User Input)   │
└────────┬─────────┘
         │
         │ onLogin(userId, password)
         ▼
┌──────────────────────────┐
│   AuthService            │
│   login() method         │
└────────┬─────────────────┘
         │
         │ Calls
         ▼
┌──────────────────────────┐
│   UserDAO                │
│   getAllUsers() method   │
└────────┬─────────────────┘
         │
         │ HTTP GET
         ▼
┌──────────────────────────┐
│   users.json             │
│   (User Database)        │
└────────┬─────────────────┘
         │
         │ Returns User[]
         ▼
┌──────────────────────────┐
│   AuthService            │
│   Validates Credentials  │
└────────┬─────────────────┘
         │
         │ AuthResponse
         ▼
┌──────────────────────────┐
│   Login Component        │
│   Shows Result Message   │
│   Redirects to Home      │
└──────────────────────────┘
```

## 4. Routing Structure

```
Root (/)
├── /home  ──→  HomeComponent
│               • Hero section
│               • Product grid (6 items)
│               • Why choose us
│
├── /about  ──→  AboutComponent
│               • Company info
│               • Team members
│               • Values
│
├── /contact  ──→  ContactComponent
│               • Contact form
│               • Contact info
│               • Business hours
│
├── /login  ──→  LoginComponent
│               • Login form
│               • Register form
│               • Toggle forms
│
└── /*  ──→  Redirect to /home (wildcard)
```

## 5. Component Hierarchy

```
AppComponent (Root)
│
├── HeaderComponent
│   ├── Navigation Links
│   │   ├── Home
│   │   ├── About
│   │   ├── Contact
│   │   └── Login
│   └── Hamburger Menu (Mobile)
│
├── RouterOutlet (Dynamic)
│   ├── HomeComponent
│   │   ├── Hero Section
│   │   ├── Products Grid
│   │   │   ├── Product Card 1
│   │   │   ├── Product Card 2
│   │   │   └── ... (6 total)
│   │   └── Why Choose Us
│   │
│   ├── AboutComponent
│   │   ├── About Text
│   │   ├── Values List
│   │   └── Team Members
│   │
│   ├── ContactComponent
│   │   ├── Contact Info
│   │   └── Contact Form
│   │
│   └── LoginComponent
│       ├── Login Form
│       └── Register Form (Toggle)
│
└── FooterComponent
    ├── Company Info
    ├── Quick Links
    └── Social Media
```

## 6. State Management

```
┌─────────────────────────────────────────┐
│      AuthService (Central State)        │
├─────────────────────────────────────────┤
│  Private currentUser: User | null       │
│                                          │
│  Public Methods:                         │
│  • login(): Observable<AuthResponse>    │
│  • register(): Observable<AuthResponse> │
│  • isLoggedIn(): boolean                │
│  • getCurrentUser(): User | null        │
│  • logout(): void                       │
└─────────────────────────────────────────┘
         ▲
         │ Injected
         │
    ┌────────┴─────────┬──────────────────────┐
    │                  │                      │
LoginComponent     HeaderComponent      OtherComponents
  Queries &        Queries for         Can subscribe
  Updates State    Display Info        to Changes
```

## 7. File Organization

```
src/
│
├── app/                              [Application Code]
│   ├── components/                   [Shared Components]
│   │   ├── header/
│   │   │   └── header.component.ts
│   │   └── footer/
│   │       └── footer.component.ts
│   │
│   ├── pages/                        [Page Components]
│   │   ├── home/
│   │   │   └── home.component.ts
│   │   ├── about/
│   │   │   └── about.component.ts
│   │   ├── contact/
│   │   │   └── contact.component.ts
│   │   └── login/
│   │       └── login.component.ts
│   │
│   ├── services/                     [Business Logic]
│   │   ├── auth.service.ts
│   │   └── user.dao.ts
│   │
│   ├── models/                       [Data Interfaces]
│   │   └── user.model.ts
│   │
│   ├── app.component.ts              [Root Component]
│   └── app.routes.ts                 [Route Config]
│
├── assets/                           [Static Assets]
│   └── data/
│       └── users.json                [User Database]
│
├── environments/                     [Environment Config]
│   ├── environment.ts
│   └── environment.prod.ts
│
├── styles.css                        [Global Styles]
├── index.html                        [HTML Template]
└── main.ts                           [Entry Point]

Configuration Files:
├── angular.json                      [Angular Config]
├── tsconfig.json                     [TypeScript Config]
├── tsconfig.app.json                 [App TS Config]
└── package.json                      [Dependencies]
```

## 8. User Authentication Flow

```
┌─────────────────────────────────────────────────────────┐
│              USER AUTHENTICATION FLOW                    │
└─────────────────────────────────────────────────────────┘

1. USER ENTERS CREDENTIALS
   ┌──────────────────┐
   │ Login Component  │
   │ User ID: user1   │
   │ Password: pass1  │
   └────────┬─────────┘
            │
            ▼
2. SUBMIT FORM
   ┌──────────────────────────────┐
   │ onLogin() triggered          │
   │ Calls AuthService.login()    │
   └────────┬─────────────────────┘
            │
            ▼
3. FETCH USERS
   ┌──────────────────────────────┐
   │ UserDAO.getAllUsers()        │
   │ Reads users.json via HTTP    │
   └────────┬─────────────────────┘
            │
            ▼
4. VALIDATE CREDENTIALS
   ┌──────────────────────────────┐
   │ AuthService compares:        │
   │ • userId match?              │
   │ • password match?            │
   └────────┬─────────────────────┘
            │
            ├─── ✓ MATCH ──→ Set currentUser
            │               Return success
            │
            └─── ✗ NO MATCH → Return error
                             Show message
                             Clear form
```

## 9. Responsive Design Breakpoints

```
┌─────────────────────────────────────────────────────────┐
│           RESPONSIVE DESIGN BREAKPOINTS                 │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Mobile                320px ─────────────── 576px      │
│  [Hamburger Menu] [Single Column]                       │
│                                                          │
│  Tablet               576px ─────────────── 992px       │
│  [Hamburger Menu] [2-Column Layout]                     │
│                                                          │
│  Desktop              992px ─────────────── 1400px      │
│  [Full Menu] [3-4 Column Layout]                        │
│                                                          │
│  Large Desktop        1400px and above                  │
│  [Full Menu] [Full Layout]                              │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 10. User Model Structure

```
┌───────────────────────────────────┐
│          User Model               │
├───────────────────────────────────┤
│ id: number                        │
│ userId: string (unique)           │
│ password: string                  │
│ name?: string                     │
│ email?: string                    │
└───────────────────────────────────┘

Example JSON:
{
  "id": 1,
  "userId": "user1",
  "password": "password1",
  "name": "John Doe",
  "email": "john@example.com"
}
```

## 11. Angular Features Used

```
┌──────────────────────────────────────┐
│    ANGULAR FEATURES IMPLEMENTED      │
├──────────────────────────────────────┤
│                                      │
│ ✓ Standalone Components             │
│ ✓ Component-based Architecture       │
│ ✓ Dependency Injection               │
│ ✓ Services                           │
│ ✓ Routing & Navigation               │
│ ✓ Two-way Data Binding (ngModel)     │
│ ✓ Property Binding ([])              │
│ ✓ Event Binding (())                 │
│ ✓ Structural Directives              │
│   - *ngIf                            │
│   - *ngFor                           │
│ ✓ RxJS Observables                   │
│ ✓ HTTP Client                        │
│ ✓ Forms (Template-driven)            │
│ ✓ TypeScript Interfaces              │
│                                      │
└──────────────────────────────────────┘
```

## 12. Development Workflow

```
START
  │
  ▼
npm install          [Install Dependencies]
  │
  ▼
npm start            [Start Dev Server on Port 4200]
  │
  ▼
Browser Opens        [http://localhost:4200/]
  │
  ├─ Make Changes ──→ Auto-Reload (Hot Module Replacement)
  │
  ▼
Test Features
  │
  ├─ Navigate Pages
  ├─ Test Login (Demo Users)
  ├─ Submit Forms
  ├─ Check Responsive
  │
  ▼
Build for Production
  │
  ├─ npm run build    [Development Build]
  │ OR
  ├─ npm run build:prod [Optimized Production Build]
  │
  ▼
Deploy
  │
  ▼
END
```

---

## Color Scheme Reference

```
┌─────────────────────────────────────────┐
│        PRIMARY COLORS                   │
├─────────────────────────────────────────┤
│ Primary:     #667eea  ███ (Purple-Blue) │
│ Secondary:   #764ba2  ███ (Dark Purple) │
│ Accent:      #0dcaf0  ███ (Cyan)        │
│ Background:  #f5f5f5  ███ (Light Gray)  │
│ Text:        #333333  ███ (Dark Gray)   │
│ Success:     #198754  ███ (Green)       │
│ Danger:      #dc3545  ███ (Red)         │
│ Warning:     #ffc107  ███ (Yellow)      │
│ Info:        #0dcaf0  ███ (Blue)        │
└─────────────────────────────────────────┘
```

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Framework**: Angular 17  
**Status**: Complete
