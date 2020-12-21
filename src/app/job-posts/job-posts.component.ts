import { Component, OnInit } from '@angular/core';
import { JobPost } from './job-post.model';
import { JobPostsService } from './job-posts.service';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.css']
})
export class JobPostsComponent implements OnInit {
  jobPosts: JobPost[] = [];

  constructor(
    private jobPostsService: JobPostsService
  ) { }

  ngOnInit(): void {
    this.jobPosts = this.jobPostsService.getJobPosts();
  }

}
