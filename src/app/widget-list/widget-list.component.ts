import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor() { }

  cardTitleMaps = "Maps"
  cardTextMaps = "Du bist hier"
  cardButtonMaps = "Standort ändern"
  cardImageMaps = "maps"
  cardTitleWetter = "Wetter"
  cardTextWetter = "Es ist sonnig und warm"
  cardButtonWetter = "Standort aktualisieren"
  cardImageWetter = "wetter"
  cardTitleOEV = "ÖV Abfahrten"
  cardTextOEV = "Linie 11 fährt um 15:00"
  cardButtonOEV = "Neuladen"
  cardImageOEV = "oev"
  cardTitleNews = "News"
  cardTextNews = "Will Smith slapped Chris Rock"
  cardButtonNews = "Liken"
  cardImageNews = "news"
  cardTitleSport = "Sport"
  cardTextSport = "FCB gewinnt alles"
  cardButtonSport = "Unterstützen"
  cardImageSport = "sport"

  ngOnInit(): void {
  }

}
