import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements OnInit {
  constructor() {}
  checkboxes = [
    {
      name: "AD",
      checked: true
    },
    {
      name: "Kobe",
      checked: false
    },
    {
      name: "Jule",
      checked: false
    }
  ];
  ngOnInit() {}
  selectAll() {
    this.checkboxes.forEach(val => {
      val.checked = true;
    });
  }
  clearAll() {
    this.checkboxes.forEach(val => {
      val.checked = false;
    });
  }
}
