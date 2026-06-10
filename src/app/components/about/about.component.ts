import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  facts = [
    { icon: '🎓', label: 'Education', value: 'B.Tech CSE · GLA University · CGPA 7.97' },
    { icon: '📍', label: 'Location', value: 'Hathras, Uttar Pradesh, India' },
    { icon: '💼', label: 'Experience', value: 'Software Engineer Trainee · Capgemini' },
    { icon: '⚡', label: 'Passion', value: 'Building AI-powered full stack systems' },
  ];

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    setTimeout(() => {
      document.querySelectorAll('#about .fade-in').forEach(el => observer.observe(el));
    }, 100);
  }
}
