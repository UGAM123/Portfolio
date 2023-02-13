import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navTabs = document.getElementsByClassName('navbar-tabs')[0]

    toggleButton.addEventListener('click', () =>{
      navTabs.classList.toggle('active')
    })

    navTabs.addEventListener('click', () =>{
      navTabs.classList.toggle('active')
    })
  }

}
