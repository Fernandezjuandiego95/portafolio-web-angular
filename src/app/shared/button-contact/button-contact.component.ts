import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-contact',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button-contact.component.html',
  styleUrl: './button-contact.component.css'
})
export class ButtonContactComponent {

  @Input() buttonText: string = '';
  @Input() buttonUrl: string = '';
  @Input() buttonIcon: string = '';
  @Input() isDownload: boolean = false;

}
