import { WebPlugin } from '@capacitor/core';
import { CapBrowserPlugin } from './definitions';

export class CapBrowserWeb extends WebPlugin implements CapBrowserPlugin {
  constructor() {
    super({
      name: 'CapBrowser',
      platforms: ['web']
    });
  }

  async open(options: { value: string }): Promise<{value: string}> {
    console.log('OPEN', options);
    return options;
  }
}

const CapBrowser = new CapBrowserWeb();

export { CapBrowser };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapBrowser);
