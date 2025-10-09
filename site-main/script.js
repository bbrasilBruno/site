/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Brand Colors (Maintained) */
  --primary-navy: #192A56;
  --primary-blue: #3498DB;
  --pure-white: #FFFFFF;
  
  /* Extended Palette */
  --slate-gray: #64748B;
  --light-gray: #F8FAFC;
  --success-green: #10B981;
  --warning-orange: #F59E0B;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-navy) 100%);
  --gradient-secondary: linear-gradient(135deg, var(--primary-navy) 0%, #2C3E50 100%);
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: var(--primary-navy);
  background-color: var(--pure-white);
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--pure-white);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-navy);
  border: 2px solid var(--primary-navy);
}

.btn-secondary:hover {
  background: var(--primary-navy);
  color: var(--pure-white);
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(25, 42, 86, 0.1);
  transition: all var(--transition-normal);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--primary-navy);
}

.logo-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pure-white);
  font-weight: 700;
  font-size: 1.2rem;
}

.logo-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--primary-navy);
  font-weight: 500;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--primary-blue);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-blue);
  transition: width var(--transition-normal);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  background: var(--gradient-primary);
  color: var(--pure-white);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  transition: all var(--transition-normal);
}

.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.bar {
  width: 25px;
  height: 3px;
  background: var(--primary-navy);
  transition: all var(--transition-normal);
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--light-gray) 0%, var(--pure-white) 100%);
  position: relative;
  overflow: hidden;
  padding-top: 4rem;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: -50%;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0.05;
  transform: skewX(-15deg);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(52, 152, 219, 0.1);
  color: var(--primary-blue);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--primary-navy);
}

.hero-description {
  font-size: 1.125rem;
  color: var(--slate-gray);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-blue);
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--slate-gray);
  font-weight: 500;
}

.hero-visual {
  position: relative;
  height: 500px;
  animation: fadeInRight 1s ease-out 0.3s both;
}

.hero-graphic {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  background: var(--pure-white);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-navy);
  animation: float 3s ease-in-out infinite;
}

.floating-card i {
  color: var(--primary-blue);
  font-size: 1.25rem;
}

.card-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 50%;
  right: 10%;
  animation-delay: 1s;
}

.card-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 2s;
}

.hero-shape {
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.1;
  animation: pulse 4s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 20%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  bottom: 30%;
  right: 40%;
  animation-delay: 1.5s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 60%;
  left: 30%;
  animation-delay: 3s;
}

/* Section Styles */
section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-badge {
  display: inline-block;
  background: rgba(52, 152, 219, 0.1);
  color: var(--primary-blue);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-navy);
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.125rem;
  color: var(--slate-gray);
  max-width: 600px;
  margin: 0 auto;
}

/* Services Section */
.services {
  background: var(--light-gray);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--pure-white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.service-icon {
  width: 4rem;
  height: 4rem;
  background: var(--gradient-primary);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pure-white);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-navy);
  margin-bottom: 1rem;
}

.service-description {
  color: var(--slate-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--slate-gray);
  font-size: 0.875rem;
}

.service-features i {
  color: var(--success-green);
  font-size: 0.75rem;
}

.service-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--gradient-primary);
  opacity: 0.05;
  transition: left var(--transition-slow);
}

.service-card:hover .service-hover-effect {
  left: 0;
}

/* Process Section */
.process {
  background: var(--primary-navy);
  color: var(--pure-white);
}

.process .section-badge {
  background: rgba(255, 255, 255, 0.1);
  color: var(--pure-white);
}

.process .section-title,
.process .section-description {
  color: var(--pure-white);
}

.process-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.process-step:nth-child(even) {
  flex-direction: row-reverse;
}

.process-step::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 4rem;
  width: 2px;
  height: calc(100% + 1rem);
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-50%);
}

.process-step:last-child::after {
  display: none;
}

.step-number {
  width: 4rem;
  height: 4rem;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--pure-white);
  flex-shrink: 0;
}

.step-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.step-description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.step-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature-tag {
  background: rgba(52, 152, 219, 0.2);
  color: var(--primary-blue);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Benefits Section */
.benefits {
  background: var(--light-gray);
}

.benefits-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.benefits-content .section-header {
  text-align: left;
  margin-bottom: 2rem;
}

.benefits-list {
  display: grid;
  gap: 1.5rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--pure-white);
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.benefit-item:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.benefit-icon {
  width: 3rem;
  height: 3rem;
  background: var(--gradient-primary);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pure-white);
  font-size: 1.25rem;
  flex-shrink: 0;
}

.benefit-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--primary-navy);
  margin-bottom: 0.5rem;
}

.benefit-description {
  color: var(--slate-gray);
  font-size: 0.875rem;
}

.benefits-visual {
  position: relative;
  height: 400px;
}

.benefits-graphic {
  position: relative;
  width: 100%;
  height: 100%;
}

.metric-card {
  position: absolute;
  background: var(--pure-white);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
  text-align: center;
  animation: float 3s ease-in-out infinite;
}

.metric-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-blue);
  display: block;
}

.metric-label {
  font-size: 0.875rem;
  color: var(--slate-gray);
  font-weight: 500;
}

.metric-card.card-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.metric-card.card-2 {
  top: 40%;
  right: 20%;
  animation-delay: 1s;
}

.metric-card.card-3 {
  bottom: 20%;
  left: 30%;
  animation-delay: 2s;
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--pure-white);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border-top: 4px solid var(--primary-blue);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.project-icon {
  width: 4rem;
  height: 4rem;
  background: var(--gradient-primary);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pure-white);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-navy);
  margin-bottom: 1rem;
}

.project-description {
  color: var(--slate-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-metrics {
  display: flex;
  gap: 1.5rem;
}

.metric {
  text-align: center;
}

.metric-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-blue);
  display: block;
}

.metric-label {
  font-size: 0.75rem;
  color: var(--slate-gray);
  font-weight: 500;
}

/* Tools Section */
.tools {
  background: var(--light-gray);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tool-card {
  background: var(--pure-white);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
}

.tool-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.tool-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

.tool-icon.python {
  background: linear-gradient(135deg, #3776ab 0%, #ffd43b 100%);
  color: var(--pure-white);
}

.tool-icon.power-automate {
  background: linear-gradient(135deg, #0078d4 0%, #00bcf2 100%);
  color: var(--pure-white);
}

.tool-icon.excel {
  background: linear-gradient(135deg, #217346 0%, #4caf50 100%);
  color: var(--pure-white);
}

.tool-icon.power-bi {
  background: linear-gradient(135deg, #f2c811 0%, #ffeb3b 100%);
  color: var(--primary-navy);
}

.tool-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary-navy);
  margin-bottom: 0.5rem;
}

.tool-description {
  color: var(--slate-gray);
  font-size: 0.875rem;
}

/* About Section */
.about-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  position: relative;
}

.image-placeholder {
  width: 250px;
  height: 300px;
  background: var(--gradient-primary);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pure-white);
  font-size: 4rem;
}

.about-content .section-header {
  text-align: left;
  margin-bottom: 2rem;
}

.about-text p {
  color: var(--slate-gray);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.credentials {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.credential-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--light-gray);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-navy);
}

.credential-item i {
  color: var(--primary-blue);
}

/* Contact Section */
.contact {
  background: var(--primary-navy);
  color: var(--pure-white);
}

.contact .section-badge {
  background: rgba(255, 255, 255, 0.1);
  color: var(--pure-white);
}

.contact .section-title,
.contact .section-description {
  color: var(--pure-white);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

.contact-icon {
  width: 3rem;
  height: 3rem;
  background: var(--gradient-primary);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.contact-details h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.contact-details a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.contact-details a:hover {
  color: var(--primary-blue);
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--pure-white);
}

.form-group input,
.form-group textarea {
  padding: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--pure-white);
  font-family: inherit;
  transition: all var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-blue);
  background: rgba(255, 255, 255, 0.15);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* Footer */
.footer {
  background: var(--primary-navy);
  color: var(--pure-white);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-section h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-section a:hover {
  color: var(--primary-blue);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .benefits-grid,
  .contact-grid,
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .process-step {
    flex-direction: column !important;
    text-align: center;
  }
  
  .process-step::after {
    left: 2rem;
    top: 4rem;
    height: calc(100% - 2rem);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 4rem;
    left: -100%;
    width: 100%;
    height: calc(100vh - 4rem);
    background: var(--pure-white);
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    transition: left var(--transition-normal);
    box-shadow: var(--shadow-lg);
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-toggle.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .services-grid,
  .projects-grid,
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.75rem;
  }
  
  .hero-title {
    font-size: 1.75rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
