import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _title: Title, private _meta: Meta) {}

  ngOnInit(): void {
    this._title.setTitle('Meta Test - Titre modifié dans la route Home');
    this._meta.updateTag({
      name: 'description',
      content:
        'Description modifiée dans la route Home par le King Martinien hahahaha ça marche',
    });
    this._meta.updateTag({
      name: 'title',
      content: 'Le King a modifié le titre de la meta dans la route home',
    });
    this._meta.updateTag({
      property: 'og:image',
      content: `assets/images/nike-chaussure.jpg`,
    });
    this._meta.updateTag({
      property: 'twitter:image',
      content: `assets/images/nike-chaussure.jpg`,
    });
  }
}
