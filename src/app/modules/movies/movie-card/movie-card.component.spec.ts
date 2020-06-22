import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MovieCardComponent } from "./movie-card.component";
import { Movie } from "src/app/shared/models/movie";
import { movieDbConfig } from "src/app/moviedb-config";

describe("MovieCardComponent", () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let fakeMovie: Movie;
  let template: HTMLElement;

  beforeEach(async(() => {
    fakeMovie = {
      id: 123,
      title: "Fake Movie",
      poster_path: "/zQFjMmE3K9AX5QrBL1SXIxYQ9jz.jpg",
    };

    TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    template = fixture.nativeElement;
    //Arrange / Given
    component.movie = fakeMovie;

    //Act / When
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct image", () => {
    //Assert / Then
    const imageELement = template.querySelector("img");
    expect(imageELement).toBeTruthy();
    expect(imageELement.src).toBe(
      movieDbConfig.base_image_url + fakeMovie.poster_path
    );
  });

  it("should render the correct title", () => {
    //Assert / Then
    const imageELement = template.querySelector(
      '[data-test="title"]'
    ) as HTMLElement;
    expect(imageELement.innerText).toBe(fakeMovie.title);
  });

  it("should be acessible", () => {
    //Assert / Then
    const imageELement = template.querySelector("img");

    expect(imageELement.alt).toBe("cartaz do filme: " + fakeMovie.title);
  });
});
