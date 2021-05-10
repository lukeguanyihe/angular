import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  // we don't need it anymore because we have routerlink
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature) //emit the event when click the button
  // }
}
