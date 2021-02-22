import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  constructor() {}

  getCssClass(region: string): string {
    return region === this.activeRegion ? 'btn-active' : 'btn-nonactive';
  }

  activateRegion(region: string) {
    this.activeRegion = region;
  }
}
