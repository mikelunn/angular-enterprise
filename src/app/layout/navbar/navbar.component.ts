import {Component, Input} from '@angular/core';
import {Layout} from "../../core/store/layout/layout.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() navButtonActive: boolean;
  @Input() navMenuTitle: string;
}
