/// <reference types="@logseq/libs" />

declare module '@logseq/libs' {
  export = LogseqApi;
}

interface Window {
  logseq: typeof LogseqApi
}

declare const logseq: typeof LogseqApi;

declare global {
  const logseq: {
    App: {
      registerUIItem: (type: string, opts: any) => void;
    };
    Editor: {
      registerSlashCommand: (command: string, callback: () => Promise<void>) => void;
      getCurrentPage: () => Promise<any>;
      getPageBlocksTree: (pageName: string) => Promise<any[]>;
    };
    UI: {
      showMsg: (message: string, status?: 'success' | 'warning' | 'error') => void;
    };
    ready: (callback: () => Promise<void>) => Promise<void>;
  };
}

export {}; 