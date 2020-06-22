import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "src/app/shared/models/movie";
import { movieDbConfig } from "src/app/moviedb-config";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  imageUrl: string;

  ngOnInit(): void {
    this.imageUrl = movieDbConfig.base_image_url + this.movie.poster_path;
  }
}
