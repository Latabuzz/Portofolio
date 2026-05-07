# 🎯 Quick Commands Reference

## 🚀 Running Your Website

### Local Development
```powershell
# Python 3 (Recommended)
python -m http.server 8000

# Then open browser to:
# http://localhost:8000
```

### Stop Server
```powershell
# Ctrl + C
```

---

## 📁 Project Structure

```
d:\portoweb\
├── index.html              # Main website
├── css\
│   └── styles.css         # Styling
├── js\
│   └── script.js          # Functionality
├── image\
│   ├── logo.JPG           # Your profile image
│   └── webDesa.jpg        # Project image
├── package.json           # Dependencies
│
├── 📚 Documentation:
├── README.md              # Main documentation
├── IMPROVEMENTS.md        # Improvement guide
├── PERFORMANCE.md         # Performance checklist
├── CLEANUP_SUMMARY.md     # What was fixed
├── DEPLOYMENT_GUIDE.md    # How to deploy
└── QUICK_COMMANDS.md      # This file
```

---

## 🔧 Common Tasks

### Update Content

**Change Your Name:**
1. Open `index.html`
2. Find: `Owen Kalumata`
3. Replace with your name

**Update Profile Image:**
1. Replace `image/logo.JPG` with your image
2. Keep the same filename or update in HTML

**Update Projects:**
1. Find `<!-- Projects Section -->`
2. Update project titles, descriptions, images

**Change Colors:**
1. Open `css/styles.css`
2. Update `:root` variables:
   ```css
   --primary: #3b82f6;      /* Primary color */
   --secondary: #10b981;    /* Secondary color */
   ```

### Add Social Links
1. Find social links section in HTML
2. Update URL in `href="..."` attribute

### Update Contact Info
1. Find Contact section
2. Update email, phone, location
3. Update WhatsApp number in script

---

## 🚀 Deployment Steps

### Deploy to Netlify
```powershell
# 1. Create account: https://netlify.com
# 2. Connect GitHub repository
# 3. Auto-deploy on push
# 4. Custom domain setup in settings
```

### Deploy to Vercel
```powershell
# 1. Create account: https://vercel.com
# 2. Import project
# 3. Auto-deploy configured
# 4. Visit project URL
```

### Deploy to GitHub Pages
```powershell
# 1. Create GitHub repository
# 2. Enable Pages in Settings
# 3. Choose branch to deploy
# 4. Site available at: username.github.io/repo-name
```

### Deploy to Traditional Hosting
```powershell
# 1. Get FTP credentials from host
# 2. Upload all files via FTP
# 3. Set index.html as default page
# 4. Configure domain pointing
# 5. Enable HTTPS/SSL
```

---

## 📊 Monitoring Tools

### Check Performance
```
Google PageSpeed: https://pagespeed.web.dev/
GTmetrix: https://gtmetrix.com/
WebPageTest: https://www.webpagetest.org/
```

### Analytics
```
Google Analytics: https://analytics.google.com/
Google Search Console: https://search.google.com/search-console
```

### Testing
```
Chrome DevTools: F12 in Chrome
Mobile Testing: Ctrl+Shift+M
Lighthouse: Chrome DevTools > Lighthouse
```

---

## 💻 Developer Tools

### Code Editors
- VS Code (Recommended)
- Sublime Text
- Atom
- WebStorm

### Browser Extensions (Chrome)
- Lighthouse (Performance audits)
- Web Developer (Inspector tool)
- ColorZilla (Color picker)
- Wappalyzer (Tech stack detector)

### Online Tools
- Can I Use: https://caniuse.com/
- CSS Validators: https://jigsaw.w3.org/css-validator/
- HTML Validator: https://validator.w3.org/
- JSON Formatter: https://jsonformatter.org/

---

## 🔍 File Modifications

### Most Frequently Edited Files

**1. index.html** - Content updates
- Update personal info
- Add/remove sections
- Update social links
- Modify contact details

**2. css/styles.css** - Design changes
- Color scheme
- Animations
- Responsive breakpoints
- Spacing & layout

**3. js/script.js** - Functionality
- Event handlers
- Animation triggers
- Form validation
- Utility functions

### Never Edit
- package.json (unless adding dependencies)
- node_modules/ (auto-generated)

---

## 🚨 Common Issues & Fixes

### Website Not Loading
```
Issue: Blank page or 404 error
Fix: 
  1. Verify server is running
  2. Check URL is correct
  3. Refresh page (Ctrl+F5)
  4. Check console (F12) for errors
```

### Styles Not Showing
```
Issue: Website looks plain
Fix:
  1. Hard refresh (Ctrl+Shift+R)
  2. Check CSS file loaded (F12 > Network)
  3. Verify CSS path is correct
  4. Check dark mode toggle
```

### Images Not Appearing
```
Issue: Broken image icons
Fix:
  1. Check image file exists
  2. Verify image path in HTML
  3. Check file permissions
  4. Try different image format
```

### Form Not Working
```
Issue: Contact form doesn't submit
Fix:
  1. Check WhatsApp number format
  2. Open browser console (F12)
  3. Look for error messages
  4. Test on different browser
```

### Dark Mode Not Working
```
Issue: Dark toggle button doesn't work
Fix:
  1. Check localStorage enabled
  2. Hard refresh browser
  3. Check JavaScript loaded
  4. Test in different browser
```

---

## 📦 Dependencies

### Installed Libraries
```json
{
  "gsap": "^3.13.0",      // Animation library
  "ogl": "^1.0.11"        // WebGL library
}
```

### CDN Libraries (in HTML)
```
Tailwind CSS          // Styling framework
Font Awesome 6.4.0    // Icons
Google Fonts          // Poppins font
```

---

## 🔐 Security Tips

### Protect Your Site
- Use HTTPS/SSL (always)
- Keep software updated
- Regular backups
- Monitor for attacks
- Use strong passwords
- Enable 2FA

### Contact Form Security
- Validate all inputs
- Use WhatsApp instead of email
- Never store sensitive data
- Use HTTPS for forms
- Implement CAPTCHA (optional)

---

## 📚 Learning Resources

### HTML/CSS/JavaScript
- MDN Web Docs: https://developer.mozilla.org/
- Web.dev: https://web.dev/
- CSS-Tricks: https://css-tricks.com/
- JavaScript.info: https://javascript.info/

### Design
- Tailwind CSS: https://tailwindcss.com/
- Adobe Color: https://color.adobe.com/
- Figma: https://figma.com/

### Animation
- GSAP Docs: https://greensock.com/gsap/
- Animate On Scroll: https://michalsnik.github.io/aos/

---

## 🎯 Monthly Checklist

### Week 1
- [ ] Check analytics
- [ ] Review contact submissions
- [ ] Check for broken links

### Week 2
- [ ] Update content if needed
- [ ] Monitor performance
- [ ] Backup website

### Week 3
- [ ] Review user feedback
- [ ] Update projects section
- [ ] Check browser compatibility

### Week 4
- [ ] Monthly report review
- [ ] Plan improvements
- [ ] Update documentation

---

## 🌟 Pro Tips

1. **Use version control (Git)**
   - Track all changes
   - Easy rollback
   - Collaboration

2. **Test on real devices**
   - Don't just use browser dev tools
   - Test on actual phones/tablets

3. **Monitor performance regularly**
   - Use PageSpeed Insights
   - Track metrics over time
   - Optimize based on data

4. **Keep backups**
   - Backup before major changes
   - Use cloud storage
   - Multiple backup locations

5. **Update regularly**
   - Add new projects
   - Update testimonials
   - Keep content fresh

6. **Mobile first**
   - Test mobile first
   - Optimize for mobile
   - Desktop scales up

7. **Accessibility matters**
   - Use semantic HTML
   - Add alt text to images
   - Test keyboard navigation

8. **Performance is key**
   - Optimize images
   - Minimize CSS/JS
   - Use lazy loading

---

## 📞 Quick Help

### If you get stuck:
1. Check documentation files (README.md, etc.)
2. Search Google for the error message
3. Check Stack Overflow
4. Test in different browser
5. Use browser console (F12) for debugging

### Browser Console Errors?
1. Open F12
2. Go to Console tab
3. Look for red error messages
4. Search for error message online
5. Fix based on solution

### Performance Issues?
1. Run PageSpeed Insights
2. Check which resources are slow
3. Optimize accordingly
4. Test again
5. Repeat until satisfied

---

## 🎓 Next Steps

### Today
- [ ] Read README.md
- [ ] Run website locally
- [ ] Test all features
- [ ] Check responsive design

### This Week
- [ ] Customize personal info
- [ ] Update images
- [ ] Update projects
- [ ] Test contact form

### This Month
- [ ] Deploy to production
- [ ] Setup analytics
- [ ] Setup monitoring
- [ ] Share with network

### Next Quarter
- [ ] Add new projects
- [ ] Update testimonials
- [ ] Optimize performance
- [ ] Gather feedback

---

## 📝 Notes

- Keep this file handy for quick reference
- Bookmark important links
- Bookmark deployment platform
- Save backup of credentials

---

## 🎉 Final Tips

✅ Your website is ready to go!
✅ All files are optimized
✅ Documentation is complete
✅ Just customize and deploy!

**Good luck with your portfolio! 🚀**

---

**Document Version:** 1.0  
**Last Updated:** October 16, 2025

---

**Remember:** If something doesn't work, check the error message in console first!
