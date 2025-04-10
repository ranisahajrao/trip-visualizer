import { Component } from '@angular/core';

interface Trip {
  start: string;
  end: string;
  level: number;
  continued: boolean;
  repeated: boolean;
}

@Component({
  selector: 'app-trip-visualizer',
  templateUrl: './trip-visualizer.component.html',
  styleUrls: ['./trip-visualizer.component.css']
})
export class TripVisualizerComponent {
  start = '';
  end = '';
  trips: Trip[] = [];

  addTrip() {
    const newTrip: Trip = {
      start: this.start.toUpperCase().slice(0, 3),
      end: this.end.toUpperCase().slice(0, 3),
      level: 1,
      continued: false,
      repeated: false
    };

    const lastTrip = this.trips[this.trips.length - 1];

    if (lastTrip) {
      if (lastTrip.end === newTrip.start) {
        newTrip.continued = true;
      } else {
        newTrip.continued = false;
      }

      for (let trip of this.trips) {
        if (trip.start === newTrip.start && trip.end === newTrip.end) {
          newTrip.repeated = true;
          newTrip.level = 2;
          break;
        }
      }
    }

    this.trips.push(newTrip);
    this.start = '';
    this.end = '';
  }
}