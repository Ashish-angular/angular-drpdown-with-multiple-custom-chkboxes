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
      name: "Location 1",
      checked: true
    },
    {
      name: "Location 2",
      checked: false
    },
    {
      name: "Location 3",
      checked: false
    },
    {
      name: "Location 4",
      checked: false
    },
    {
      name: "Location 5",
      checked: false
    },
    {
      name: "Location 6",
      checked: false
    },
    {
      name: "Location 7",
      checked: false
    },
    {
      name: "Location 8",
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
