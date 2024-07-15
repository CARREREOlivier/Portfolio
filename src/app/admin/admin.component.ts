import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor() { }

  ngOnInit(): void {
  }

  // Ajouter méthodes pour créer, éditer, effacer, modifier la visibilité des projets
}
