import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
  // we don't need it anymore because we have routerlink
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature) //emit the event when click the button
  // }
}
