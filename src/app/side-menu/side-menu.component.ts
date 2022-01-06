import { Component } from '@angular/core';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-main',
  templateUrl: 'side-menu.component.html',
  styleUrls: ['side-menu.component.css'],
})
export class SidenavAutosizeExample {
  showFiller = false;

  items = ['Geräte', 'Wizards', 'Fernzugriff', 'Zählertabellen'];

  menuItems = [
    { id: 'geraete', title: 'Geräte', targetModule: '' },
    { id: 'wizards', title: 'Wizards', targetModule: '' },
    { id: 'fernzugriff', title: 'Fernzugriff', targetModule: '' },
    { id: 'zaehler', title: 'Zählertabellen', targetModule: '' },
  ];
}
