import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects: Project[] = [
    {
      title: 'Project One',
      description: 'A short description of what this project does and the problem it solves.',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/',
    },
    {
      title: 'Project Two',
      description: 'A short description of what this project does and the problem it solves.',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/',
    },
    {
      title: 'Project Three',
      description: 'A short description of what this project does and the problem it solves.',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/',
    },
  ];
}
