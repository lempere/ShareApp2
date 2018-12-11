import {Component, OnInit} from '@angular/core';
import {GithubProvider} from "../../../Github/src";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  repos: any;

  constructor(private github: GithubProvider) { }

  ngOnInit(): void {
    this.github.getMostStarredRepos()
      .subscribe(data => this.repos = data['items'] );
  }

}
