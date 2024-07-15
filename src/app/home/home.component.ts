import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  projects = [
    { title: 'Project 1', description: 'Description 1', thumbnail: 'path/to/thumbnail1.jpg' },
    { title: 'Project 2', description: 'Description 2', thumbnail: 'path/to/thumbnail2.jpg' },
    // Ajouter projets ici
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
