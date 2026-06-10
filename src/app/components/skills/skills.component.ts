import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  categories = [
    {
      name: 'Languages',
      icon: '{ }',
      color: 'purple',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 82 },
        { name: 'Python', level: 78 },
      ]
    },
    {
      name: 'Frontend',
      icon: '◈',
      color: 'blue',
      skills: [
        { name: 'Angular', level: 88 },
        { name: 'React', level: 82 },
        { name: 'HTML/CSS', level: 92 },
      ]
    },
    {
      name: 'Backend',
      icon: '⚙',
      color: 'cyan',
      skills: [
        { name: 'Spring Boot', level: 87 },
        { name: 'Node.js', level: 83 },
        { name: 'Express.js', level: 83 },
        { name: 'REST APIs', level: 92 },
      ]
    },
    {
      name: 'Databases & Cache',
      icon: '◉',
      color: 'purple',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 75 },
      ]
    },
    {
      name: 'Security & Auth',
      icon: '🔐',
      color: 'blue',
      skills: [
        { name: 'JWT', level: 88 },
        { name: 'OAuth2', level: 80 },
        { name: 'Spring Security', level: 82 },
      ]
    },
    {
      name: 'Tools & Infra',
      icon: '⬡',
      color: 'cyan',
      skills: [
        { name: 'RabbitMQ', level: 76 },
        { name: 'Microservices', level: 83 },
        { name: 'Git', level: 90 },
        { name: 'Postman', level: 88 },
      ]
    }
  ];

  animateSkills = false;

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          if (e.target.closest('#skills')) this.animateSkills = true;
        }
      });
    }, { threshold: 0.1 });
    setTimeout(() => {
      document.querySelectorAll('#skills .fade-in').forEach(el => observer.observe(el));
    }, 100);
  }
}
