import { Component } from '@angular/core';
 
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text_sentences = [];
 
  constructor(
    private tts: TextToSpeech
  ) {
    this.text_sentences = [
      "There is no such thing as fun for the whole family",
      "Hola como estas mundo ?.",
      "lo has logrado tio"
    ]
  }
 
 
  textToSpeech(text) {
    this.tts.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
 
 
}