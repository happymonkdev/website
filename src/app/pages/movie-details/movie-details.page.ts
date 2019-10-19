import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.page.html",
  styleUrls: ["./movie-details.page.scss"]
})
export class MovieDetailsPage implements OnInit {
  information = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieSevice: MovieService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.movieSevice.getDetails(id).subscribe(result => {
      console.log("details", result);
      this.information = result;
    });
  }
  openWebsite() {
    window.open(this.information.Website, "_blank");
  }
}
