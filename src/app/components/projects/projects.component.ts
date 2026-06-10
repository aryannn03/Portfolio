import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  activeScreenshot: { [key: number]: number } = { 0: 0, 1: 0, 2: 0 };
  private intervals: any[] = [];

  projects = [
    {
      title: 'CodeReview',
      subtitle: 'AI-Powered Code Review Platform',
      period: 'June 2026',
      description: 'Full-stack AI code review platform with React, Node.js/Express, and MongoDB. Supports 20+ languages across 4 review modes — Full, Security, Performance, and Quick.',
      highlights: ['JWT & Google OAuth auth', 'Gemini 2.5 Flash API integration', 'Rate limiting & bcrypt security', 'MongoDB review history'],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT'],
      color: 'purple',
      icon: '⚡',
      github: 'https://github.com/aryannn03/Ai-Powered-Code-Reviewer',
      featured: true,
      screenshots: [
        { src: 'assets/projects/codereview-hero.png', label: 'Landing' },
        { src: 'assets/projects/codereview-editor.png', label: 'Editor' },
        { src: 'assets/projects/codereview-chat.png', label: 'AI Chat' },
      ]
    },
    {
      title: 'BookNest',
      subtitle: 'Full Stack E-Commerce Platform',
      period: 'April 2026',
      description: 'Scalable bookstore platform using Spring Boot microservices and Angular. Features role-based access control, Redis caching, and asynchronous RabbitMQ messaging.',
      highlights: ['Microservices architecture', 'JWT + RBAC security', 'Redis caching layer', 'RabbitMQ async messaging'],
      tech: ['Spring Boot', 'Angular', 'Redis', 'RabbitMQ', 'MySQL', 'Docker'],
      color: 'blue',
      icon: '📚',
      github: 'https://github.com/aryannn03/BookNest-Backend',
      featured: true,
      screenshots: [
        { src: 'assets/projects/booknest-home.png', label: 'Home' },
        { src: 'assets/projects/booknest-browse.png', label: 'Browse' },
        { src: 'assets/projects/booknest-admin.png', label: 'Admin' },
      ]
    },
    {
      title: 'Fake News Detector',
      subtitle: 'Ensemble-Based NLP System',
      period: 'March 2026',
      description: 'AI-powered fake news detection using a hybrid NLP pipeline on ~1,00,000 articles. Combines TF-IDF + DistilBERT with SHAP/LIME explainability.',
      highlights: ['DistilBERT transformer model', 'Stacking ensemble classifier', 'SHAP + LIME interpretability', '99.68% confidence prediction'],
      tech: ['Python', 'MERN', 'Flask', 'DistilBERT', 'TF-IDF', 'NLP'],
      color: 'cyan',
      icon: '🔍',
      github: 'https://github.com/aryannn03/Ensemble-Based-Fake-News-Detection',
      featured: false,
      screenshots: [
        { src: 'assets/projects/fakenews-input.png', label: 'Input' },
        { src: 'assets/projects/fakenews-result.png', label: 'Result' },
        { src: 'assets/projects/fakenews-analysis.png', label: 'Analysis' },
      ]
    }
  ];

  ngOnInit() {
    // Auto-cycle screenshots every 2.5s per project
    this.projects.forEach((_, idx) => {
      const interval = setInterval(() => {
        this.activeScreenshot[idx] = (this.activeScreenshot[idx] + 1) % this.projects[idx].screenshots.length;
      }, 2500 + idx * 400);
      this.intervals.push(interval);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    setTimeout(() => {
      document.querySelectorAll('#projects .fade-in').forEach(el => observer.observe(el));
    }, 100);
  }

  ngOnDestroy() { this.intervals.forEach(i => clearInterval(i)); }

  setScreenshot(projIdx: number, ssIdx: number) {
    this.activeScreenshot[projIdx] = ssIdx;
  }
}