import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private activitiesService: ActivitiesService ) { }

  ngOnInit(): void {
    this.activities = this.activitiesService.getActivities();
  }

}
