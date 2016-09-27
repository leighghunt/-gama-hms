import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Individual }        from './individual';
import { IndividualService } from './individual.service';
import { Organisation }        from './organisation';
import { OrganisationService } from './organisation.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  individuals: Individual[] = [];
  organisations: Organisation[] = [];

  constructor(
    private router: Router,
    private individualService: IndividualService,
    private organisationService: OrganisationService) {
  }

  ngOnInit(): void {
    this.individualService.getIndividuals()
      .then(individuals => this.individuals = individuals);
      this.organisationService.getOrganisations()
        .then(organisations => this.organisations = organisations);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
