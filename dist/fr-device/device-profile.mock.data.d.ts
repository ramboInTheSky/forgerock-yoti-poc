declare const expectedJsdom: {
  identifier: string;
  metadata: {
    hardware: {
      display: {
        width: number;
        height: number;
        pixelDepth: number;
        angle: string;
      };
      cpuClass: null;
      deviceMemory: null;
      hardwareConcurrency: number;
      maxTouchPoints: null;
      oscpu: null;
    };
    browser: {
      appName: string;
      userAgent: string;
      appCodeName: string;
      appVersion: string;
      appMinorVersion: null;
      buildID: null;
      product: string;
      productSub: string;
      vendor: string;
      vendorSub: string;
      browserLanguage: null;
      plugins: string;
    };
    platform: {
      deviceName: string;
      fonts: string;
      language: string;
      platform: string;
      userLanguage: null;
      systemLanguage: null;
      timezone: number;
    };
  };
};
declare const expectedJsdomWithoutDisplay: {
  identifier: string;
  metadata: {
    hardware: {
      display: {};
      cpuClass: null;
      deviceMemory: null;
      hardwareConcurrency: number;
      maxTouchPoints: null;
      oscpu: null;
    };
    browser: {
      appName: string;
      userAgent: string;
      appCodeName: string;
      appVersion: string;
      appMinorVersion: null;
      buildID: null;
      product: string;
      productSub: string;
      vendor: string;
      vendorSub: string;
      browserLanguage: null;
      plugins: string;
    };
    platform: {
      deviceName: string;
      fonts: string;
      language: string;
      platform: string;
      userLanguage: null;
      systemLanguage: null;
      timezone: number;
    };
  };
};
declare const expectedJsdomWithNarrowedBrowserProps: {
  identifier: string;
  metadata: {
    hardware: {
      display: {
        width: number;
        height: number;
        pixelDepth: number;
        angle: string;
      };
      cpuClass: null;
      deviceMemory: null;
      hardwareConcurrency: number;
      maxTouchPoints: null;
      oscpu: null;
    };
    browser: {
      userAgent: string;
      plugins: string;
    };
    platform: {
      deviceName: string;
      fonts: string;
      language: string;
      platform: string;
      userLanguage: null;
      systemLanguage: null;
      timezone: number;
    };
  };
};
export { expectedJsdom, expectedJsdomWithoutDisplay, expectedJsdomWithNarrowedBrowserProps };
