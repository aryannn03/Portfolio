import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  stats = [
    { value: 800, suffix: '+', label: 'DSA Problems Solved', sublabel: 'LeetCode · Codeforces · CodeChef', color: 'blue', icon: '💡' },
    {value: 3908, suffix: '', label: 'TCS CodeVita Rank', sublabel: 'Season 12 · Global Ranking', color: 'purple', icon: '🏆'},
    {value: 1627, suffix: '', label: 'LeetCode Rating', sublabel: 'Top 20% · 27 Contests', color: 'cyan', icon: '🔥'
    }
  ];

  displayed: number[] = [];
  animated = false;

  ngOnInit() {
    this.displayed = this.stats.map(() => 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !this.animated) {
          this.animated = true;
          this.animateCounters();
          e.target.classList.add('visible');
        }
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.2 });
    setTimeout(() => {
      document.querySelectorAll('#achievements .fade-in').forEach(el => observer.observe(el));
    }, 100);
  }

  animateCounters() {
    this.stats.forEach((stat, idx) => {
      const duration = 2000;
      const start = performance.now();
      const isFloat = stat.value % 1 !== 0;
      const update = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        this.displayed[idx] = isFloat
          ? parseFloat((eased * stat.value).toFixed(2))
          : Math.floor(eased * stat.value);
        if (progress < 1) requestAnimationFrame(update);
        else this.displayed[idx] = stat.value;
      };
      requestAnimationFrame(update);
    });
  }
}
