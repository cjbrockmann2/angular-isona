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
    { id: '', title: 'Home' },
    { id: 'geraete', title: 'Geräte' },
    { id: 'wizards', title: 'Wizards' },
    { id: 'fernzugriff', title: 'Fernzugriff' },
    { id: 'zaehler', title: 'Zählertabellen' },
  ];
}
