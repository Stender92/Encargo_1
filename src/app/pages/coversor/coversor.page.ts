import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  pageTitle = 'coversor';
  isNotHome = true;
  listaDB : any = [
    {
      id: 1,
      name: 'Son Goku',
      especie: 'Saiyajin',
      wiki: 'https://dragonball.fandom.com/es/wiki/Son_Goku',
      image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/04/Dragon-Ball-alternativo-Goku-cosplay.jpg',
    },
    {
      id: 2,
      name: 'Vegeta',
      especie: 'Saiyajin',
      wiki: 'https://dragonball.fandom.com/es/wiki/Vegeta',
      image: 'https://img1.ak.crunchyroll.com/i/spire4/fb934e68e0bc299c23867265b40282441661465224_large.png',
    },
    {
      id: 3,
      name: 'Son Gohan',
      especie: 'Saiyajin / Terricola',
      wiki: 'https://dragonball.fandom.com/es/wiki/Son_Gohan',
      image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/08/Gohan-dragon-ball-z-ejercito-freezer-fanart.jpg',
    },
    {
      id: 4,
      name: 'Freezer',
      especie: 'Raza de Freezer',
      wiki: 'https://dragonball.fandom.com/es/wiki/Freeza',
      image: 'https://i0.wp.com/gamerstyle.com.mx/wp-content/uploads/2022/08/Freezer-Black-Freezer-Dragon-Ball-Super-Manga.jpg',
    },
    {
      id: 5,
      name: 'Cell',
      especie: 'Bioandroide',
      wiki: 'https://dragonball.fandom.com/es/wiki/Cell',
      image: 'https://www.fayerwayer.com/resizer/Ibu4awnKRQSS6XbS2dS0Jjunup4=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/TV3ZWN3AS5D5VLGM6EZWVFIL6E.jpg',
    },
   {
      id: 6,
      name: 'Piccolo',
      especie: 'Namekiano',
      wiki: 'https://dragonball.fandom.com/es/wiki/Piccolo',
      image: 'https://super-ficcion.com/wp-content/uploads/2022/03/dragon_ball_super_piccolo-1-780x470.webp',
    },
    {
      id: 7,
      name: 'Numero 17',
      especie: 'Androide',
      wiki: 'https://dragonball.fandom.com/es/wiki/Androide_N%C3%BAmero_17',
      image: 'https://depor.com/resizer/HFSJdbC5l494_0y1bAMUMtajEwI=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/32FTVL76WZG6TJ3DMYUSQQYNZI.jpg',
    },
    {
      id: 8,
      name: 'Numero 18',
      especie: 'Androide',
      wiki: 'https://dragonball.fandom.com/es/wiki/Androide_N%C3%BAmero_18',
      image: 'https://www.geekmi.news/__export/1625266877212/sites/debate/img/2021/07/02/no18.jpg_400812013.jpg',
    },
    {
      id: 9,
      name: 'Majin Boo',
      especie: 'Majin',
      wiki: 'https://dragonball.fandom.com/es/wiki/Boo_Gordo?so=search',
      image: 'https://depor.com/resizer/toQVhUcZpH2KJPhV1ru7V3Re9pk=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YDSQRF4I2JDLRES6KLJHVCAD4E.jpg',
    },
    {
      id: 10,
      name: 'Trunks',
      especie: 'Saiyajin / Terricola',
      wiki: 'https://dragonball.fandom.com/es/wiki/Trunks',
      image: 'https://www.fayerwayer.com/resizer/wXBvwtaLsEwTprGvcxCy8x0Alv0=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/F7TLUPCIZNBY3BKWDZRPEL25CY.jpg',
    },
    {
      id: 11,
      name: 'Krilin',
      especie: 'Humano',
      wiki: 'https://dragonball.fandom.com/es/wiki/Krilin?so=search',
      image: 'https://imagenes.t13.cl/images/original/2020/04/1587922305-projectptut.jpg',
    },
    {
      id: 12,
      name: 'Bulma',
      especie: 'Humano',
      wiki: 'https://dragonball.fandom.com/es/wiki/Bulma',
      image: 'https://depor.com/resizer/Bv9fL315WYjxmGBhl29tlQKgebA=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EORNH3X635G4TATLE45TJHH54A.jpg',
    }

  ]

  constructor() { }

  ngOnInit() {
  }


}
