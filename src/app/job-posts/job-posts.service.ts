import { Injectable } from "@angular/core";
import { JobPost } from "./job-post.model";

@Injectable({
  providedIn: 'root'
})
export class JobPostsService {
  private jobposts: JobPost[] = [
    new JobPost(
      'Biomedical engineering',
      'FDA',
      'Dexiu Shi'
    ),
    new JobPost(
      'Algorithm and sensor development',
      'Rockville',
      'Chao Wu'
    )
  ];

  getJobPosts() {
    return this.jobposts.slice();
  }
}
