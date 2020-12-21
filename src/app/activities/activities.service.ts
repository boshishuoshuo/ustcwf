import { Injectable } from "@angular/core";
import { Activity } from "./activity.model";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activities: Activity[] =[
    new Activity('Optogeneric approaches for vision restoration',
    'ZOOM 833 4285 2199',
    '12/19/2020 2-4 pm',
    'Dr. Zhuohua Pan'
    ),

    new Activity(
      'Real estate investment',
      'ZOOM 886 0301 1558',
      '12/5/2020 1:30-3:30 pm',
      'Dr. Xinguo Chen'
    )
  ]

  getActivities() {
    return this.activities.slice();
  }
}
