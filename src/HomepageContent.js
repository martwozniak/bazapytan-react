import React, { Component } from 'react';
import CardButton from './components/CardButton';
import './HomepageContent.css';
export default class HomepageContent extends Component {
    render() {
        return (
            <div>
        <h1>
        Testy i arkusze maturalne oraz egzaminy zawodowe
        </h1>
        <h2>Baza pytań do egzaminów z ostatnich lat</h2>
        <div className="container">

          <div className="cardButtonsGrid">
            <CardButton colorStyles='cardButton cardButtonBlue' examName="Matura" />
            <CardButton colorStyles="cardButton cardButtonAqua" examName="Egzamin zawodowy"/>
            <CardButton colorStyles="cardButton cardButtonRed" examName="Egzamin ósmoklasisty"/>
            <CardButton colorStyles="cardButton cardButtonGreen" examName="Arkusze"/>
          </div>
        </div>
        <div className="infoSection">
            <h3>Sprawdź swoje umiejętności i zdaj każdy egzamin!</h3>
          <div className="container">
            <div class="osmoklasisty">
               <span>Ósmoklasisty</span>
            </div>
            <div class="matura">
                <span>Maturalny</span>
            </div>
            <div class="zawodowy">
                <span>Zawodowy</span>
            </div>
          </div>
        </div>
        </div>
        )
    }
}
