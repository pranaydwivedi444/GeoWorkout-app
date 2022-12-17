const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

//CLASS APP
class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    //form event listeneer
    form.addEventListener("submit", this._newWorkout.bind(this));

    inputType.addEventListener("change", this._toggleElevationField);
  }
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert("Location Disabled ");
      }
    );
  }
  _loadMap(position) {
    // console.log(position);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    this.#map = L.map("map").setView([lat, long], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);

    //onclickevent
    this.#map.on("click", this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }
  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }
  _newWorkout(e) {
    {
      const validInputs = (...inputs) =>
        inputs.every((inp) => Number.isFinite(inp));
      const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

      e.preventDefault();

      // Get data from form
      const type = inputType.value;
      const distance = +inputDistance.value;
      const duration = +inputDuration.value;
      const { lat, lng } = this.#mapEvent.latlng;
      let workout;

      // If workout running, create running object
      if (type === "running") {
        const cadence = +inputCadence.value;

        // Check if data is valid
        if (
          // !Number.isFinite(distance) ||
          // !Number.isFinite(duration) ||
          // !Number.isFinite(cadence)
          !validInputs(distance, duration, cadence) ||
          !allPositive(distance, duration, cadence)
        )
          return alert("Inputs have to be positive numbers!");

        workout = new Running([lat, lng], distance, duration, cadence);
      }

      // If workout cycling, create cycling object
      if (type === "cycling") {
        const elevation = +inputElevation.value;

        if (
          !validInputs(distance, duration, elevation) ||
          !allPositive(distance, duration)
        )
          return alert("Inputs have to be positive numbers!");

        workout = new Cycling([lat, lng], distance, duration, elevation);
      }

      // Add new object to workout array
      this.#workouts.push(workout);
      /////////////////////////////////////////////////////////////////

      //clearning fields
      inputCadence.value =
        inputDistance.value =
        inputDuration.value =
        inputElevation.value =
          "";

      this.renderWorkoutMarker(workout);
    }
  }

  renderWorkoutMarker(workout) {
    var marker = L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
          // content: "workout",
        })
      )
      .setPopupContent(`${workout.distance}`)
      .openPopup();
  }
}

//Class Workout
class Workout {
  //public
  date = new Date();
  id = (Date.now() + "").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}
class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
  }
  calcSpeed() {
    //min/km
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

const app = new App();
