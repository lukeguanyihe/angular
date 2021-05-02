import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false; //open is css class
  @HostListener('click') toggleOpen() {//listen to click function, then execute toggle open
    this.isOpen = !this.isOpen;

  }
}
