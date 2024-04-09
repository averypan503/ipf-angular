import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private env;
  constructor() {
    const suffix = '.ts';
    this.env = require('../../environments/environment' + suffix);
  }

  get config() {
    return this.env.environment;
  }
}
