import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      role: 'Software Engineer Trainee',
      company: 'Capgemini',
      period: 'Dec 2025 – May 2026',
      type: 'Full-time',
      color: 'blue',
      points: [
        'Developed RESTful APIs using Java and Spring Boot following enterprise backend development practices.',
        'Implemented CRUD operations, authentication mechanisms, and MySQL database integration.',
        'Worked with microservices architecture, service communication, and backend design patterns.',
        'Built responsive frontend modules using Angular and integrated them with backend APIs.',
        'Participated in project-based assignments focused on scalable full-stack application development.',
        'Used Git version control and Agile development workflows in collaborative environments.'
      ],
      tech: [
        'Java',
        'Spring Boot',
        'Microservices',
        'REST API',
        'MySQL',
        'Angular',
        'Git'
      ]
    }
  ];

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    setTimeout(() => {
      document.querySelectorAll('#experience .fade-in').forEach(el => observer.observe(el));
    }, 100);
  }
}
