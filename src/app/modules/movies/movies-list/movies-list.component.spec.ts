import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MoviesListComponent } from "./movies-list.component";
import { MovieService } from "src/app/core/services/movie.service";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { Movie } from "src/app/shared/models/movie";
import { of } from "rxjs";

describe("MoviesListComponent", () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let mockMovieService: jasmine.SpyObj<MovieService>;
  let fakeMovie: Movie;

  beforeEach(async(() => {
    mockMovieService = jasmine.createSpyObj<MovieService>("MovieService", [
      "getMovies",
    ]);

    TestBed.configureTestingModule({
      declarations: [MoviesListComponent, MovieCardComponent],
      providers: [{ provide: MovieService, useValue: mockMovieService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    //Arrange / Given
    fakeMovie = {
      id: 123,
      title: "Fake Movie",
      poster_path: "/zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
    };

    mockMovieService.getMovies.and.returnValue(of([fakeMovie]));

    //Act / When
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get movies from service", () => {
    //Assert / Then
    expect(component.movies).toEqual([fakeMovie]);
  });

  it("should render a card for each movie", () => {
    //Assert / Then
    const template: HTMLElement = fixture.nativeElement;
    expect(template.querySelectorAll('[data-test="card"]').length).toBe(1);
  });
});
