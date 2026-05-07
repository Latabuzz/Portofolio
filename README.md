# Owen Kalumata - Modern Portfolio Website

A beautiful, modern, and fully responsive portfolio website built with HTML5, Tailwind CSS, and vanilla JavaScript. Features dark mode support, smooth animations, and integration with WhatsApp for contact forms.

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode** - Toggle between light and dark themes with localStorage persistence
- **Smooth Animations** - GSAP animations, scroll reveal effects, and interactive ribbons
- **WebGL Ribbons Effect** - Beautiful animated ribbons that follow mouse movement
- **Contact Form** - Direct WhatsApp integration for inquiries
- **SEO Friendly** - Semantic HTML and proper meta tags
- **Performance Optimized** - Lazy loading images and optimized CSS
- **Accessible** - WCAG compliant with proper semantic markup

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Tailwind CSS for styling
- **JavaScript (Vanilla)** - No framework dependencies
- **GSAP** - Animation library
- **Font Awesome** - Icons
- **Google Fonts** - Poppins font family

## 📂 Project Structure

```
portoweb/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # Custom CSS styles
├── js/
│   └── script.js        # JavaScript functionality
├── image/
│   ├── logo.JPG         # Profile image
│   └── webDesa.jpg      # Project image
├── package.json         # Dependencies
└── IMPROVEMENTS.md      # Improvement guide
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Python 3+ (for local server)

### Installation & Running

1. Clone or download this repository
2. Navigate to the project directory
3. Start a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000
```

4. Open your browser and visit `http://localhost:8000`

## 📝 Available Sections

- **Home** - Hero section with introduction
- **About** - Personal background and services offered
- **Skills** - Technical and professional skills with progress bars
- **Projects** - Portfolio projects with descriptions
- **Testimonials** - Client testimonials and reviews
- **Contact** - Contact form with WhatsApp integration

## 🎨 Customization

### Change Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary: #3b82f6;      /* Primary color (blue) */
    --secondary: #10b981;    /* Secondary color (green) */
    --dark: #1e293b;         /* Dark text color */
    --light: #f8fafc;        /* Light background */
}
```

### Update Personal Information

1. Change name and title in HTML
2. Update social media links
3. Replace images in `/image` folder
4. Update projects section

### Modify WhatsApp Contact

In `index.html`, find the contact form script and update:

```javascript
const whatsappNumber = '6285256614628'; // Replace with your number
```

## 🌙 Dark Mode

- Automatically respects system preference
- Can be toggled manually with button
- Preferences saved to localStorage
- All components optimized for both modes

## 📱 Responsive Breakpoints

- Mobile: 0px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliant
- Focus states for interactive elements

## 🔒 Security

- No sensitive data stored in client-side code
- Contact form uses WhatsApp API (no backend needed)
- All external libraries from trusted CDNs
- No tracking cookies (only localStorage for theme preference)

## 🚀 Deployment

### Netlify
1. Connect GitHub repository
2. Auto-deploy on push
3. Free SSL certificate

### Vercel
1. Import project
2. Auto-deploy configuration
3. Simple and fast

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in settings
3. Choose branch to deploy from

### Traditional Hosting
1. Upload files via FTP
2. Set index.html as default page
3. Configure domain pointing

## 📊 Performance Metrics

- Lazy loading images
- Minified CSS and JavaScript
- Optimized animations
- Efficient event listeners
- Progressive enhancement

## 🐛 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| IE 11 | ⚠️ Limited |

## 📦 Dependencies

- **gsap** (^3.13.0) - Animation library
- **ogl** (^1.0.11) - WebGL library
- **Tailwind CSS** - CDN version
- **Font Awesome** - CDN version

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Contact

For inquiries or collaboration:
- Email: owenkalumata46@gmail.com
- Phone: +62 852-566-146-28
- Location: Manado, Indonesia
- GitHub: https://github.com/Latabuzz
- Instagram: https://www.instagram.com/_owenklmt

## 🙏 Credits

- Tailwind CSS team
- GSAP library
- Font Awesome
- Google Fonts
- All open source contributors

---

**Last Updated:** October 16, 2025  
**Version:** 1.0.0  
**Author:** Owen Kalumata
