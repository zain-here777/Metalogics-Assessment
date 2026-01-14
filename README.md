# React Landing Page with Tailwind CSS

A professional, modern React.js landing page built with Vite and Tailwind CSS. This project features a clean, component-based architecture that makes it easy to customize and extend.

## 🚀 Features

- **React 19** with Vite for fast development and building
- **Tailwind CSS** for utility-first styling
- **Responsive Design** - Mobile-first approach
- **Component-Based Architecture** - Reusable and maintainable components
- **Professional Structure** - Organized folder structure following best practices
- **Dynamic Sections** - Easy to add, remove, or modify sections

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar/         # Navigation bar component
│   ├── Footer/         # Footer component
│   └── Section/         # Reusable section component
├── layouts/            # Layout components
│   └── Main/           # Main layout with dynamic sections
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Component Structure

### Navbar
The navigation bar component with:
- Responsive mobile menu
- Smooth scrolling navigation
- Sticky positioning
- Call-to-action button

### Main Layout
The main layout component that accepts an array of sections and dynamically renders them. Each section can have:
- Custom ID for navigation
- Title and subtitle
- Background color
- Full-width option
- Custom content

### Section Component
A reusable section component that provides:
- Consistent spacing and styling
- Optional title and subtitle
- Customizable background colors
- Flexible content area

### Footer
A comprehensive footer with:
- Company information
- Quick links
- Contact information
- Social media links

## 🎨 Customization

### Adding New Sections

To add a new section to your landing page, simply add a new object to the `sections` array in `App.jsx`:

```jsx
{
  id: 'your-section-id',
  title: 'Your Section Title',
  subtitle: 'Optional Subtitle',
  bgColor: 'bg-white', // or 'bg-gray-50', 'bg-primary-50', etc.
  content: (
    <div>
      {/* Your section content here */}
    </div>
  ),
}
```

### Customizing Colors

Tailwind CSS is configured with a custom primary color palette. You can modify colors in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - CSS variables for theming

### Styling Components

All components use Tailwind CSS utility classes. You can:
- Modify existing classes in component files
- Add custom styles in `index.css`
- Extend Tailwind theme in `tailwind.config.js`

## 🏗️ Best Practices Used

1. **Component Separation** - Each component in its own folder with index.js for clean imports
2. **PropTypes** - Type checking for component props
3. **Semantic HTML** - Proper use of HTML5 semantic elements
4. **Accessibility** - ARIA labels and keyboard navigation support
5. **Responsive Design** - Mobile-first approach with Tailwind breakpoints
6. **Performance** - Optimized with Vite's build tools
7. **Code Organization** - Clear folder structure and naming conventions

## 📦 Dependencies

- **react** ^19.2.0 - UI library
- **react-dom** ^19.2.0 - React DOM renderer
- **tailwindcss** ^4.1.18 - Utility-first CSS framework
- **vite** ^7.2.4 - Build tool and dev server
- **prop-types** - Runtime type checking for React props

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

Built with ❤️ using React and Tailwind CSS
