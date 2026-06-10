import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  loading = false;

  socials = [
    { name: 'GitHub', icon: 'gh', url: 'https://github.com/aryannn03', color: 'purple' },
    { name: 'LinkedIn', icon: 'li', url: 'https://linkedin.com/in/aryannn03', color: 'blue' },
    { name: 'LeetCode', icon: 'lc', url: 'https://leetcode.com/u/aryan_code03', color: 'cyan' },
    { name: 'Email', icon: 'em', url: 'mailto:aryan2017malik@gmail.com', color: 'purple' },
  ];

  onSubmit() {
    if (
  !this.form.name.trim() ||
  !this.form.email.trim() ||
  !this.form.subject.trim() ||
  !this.form.message.trim()
) {
  alert('Please fill all fields');
  return;
}

  this.loading = true;

  const templateParams = {
    from_name: this.form.name,
    from_email: this.form.email,
    subject: this.form.subject,
    message: this.form.message
  };

  emailjs.send(
    'service_bb19kof',
    'template_5b70l4o',
    templateParams,
    'qSj0guNQM_pGyBfKh'
  )
  .then(() => {

    this.loading = false;
    this.submitted = true;

    this.form = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    setTimeout(() => {
      this.submitted = false;
    }, 3000);

  })
  .catch((error) => {

    console.error(error);
    this.loading = false;

    alert('Failed to send message');
  });
}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    setTimeout(() => {
      document.querySelectorAll('#contact .fade-in').forEach(el => observer.observe(el));
    }, 100);
  }
}
