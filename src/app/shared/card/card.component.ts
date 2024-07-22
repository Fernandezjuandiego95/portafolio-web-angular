import { Component, Input } from '@angular/core';
import { ButtonContactComponent } from '../button-contact/button-contact.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonContactComponent, NgStyle, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() textTitulo: string = '';
  @Input() textDescription: string = '';
  @Input() urlImg: string = '';
  

  @Input() button1Text: string = '';
  @Input() button1Url: string = '';
  @Input() button1Icon: string = '';
  @Input() button2Text: string = '';
  @Input() button2Url: string = '';
  @Input() button2Icon: string = '';

  @Input() tecnologias: { name: string, color: string, icon: string }[] = [];

}
