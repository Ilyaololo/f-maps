import React from 'react';
import ReactDOM from 'react-dom';

import Workbench from 'containers/Workbench';

interface IWidget {
  render(): void;
}

class Widget implements IWidget {
  private readonly ref: HTMLElement | null;

  constructor() {
    this.ref = document.getElementById('app');
  }

  public render(): void {
    if (!this.ref) {
      throw new Error('Can\'t find a DOM element');
    }

    ReactDOM.render(<Workbench />, this.ref);
  }
}

const widget: IWidget = new Widget();

widget.render();
