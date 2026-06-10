import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certs = [
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      year: '2025',
      color: 'blue',
      icon: '☁',
      link: 'https://drive.google.com/file/d/1ikMIz-mI_G4mH8g0JKyL0LMKJMYci6bt/view'
    },
    {
      title: 'Databases and SQL for Data Science with Python',
      issuer: 'IBM',
      year: '2024',
      color: 'purple',
      icon: '🗄',
      link: 'https://drive.google.com/file/d/1JXUflSUQ6fA3kL9DKGv8ZtINnezMoyhv/view'
    }
  ];

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    setTimeout(() => {
      document.querySelectorAll('#certifications .fade-in').forEach(el => observer.observe(el));
    }, 100);
  }
}
