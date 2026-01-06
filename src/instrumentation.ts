export function register() {
  if (typeof window !== 'undefined') {
    return;
  }

  const globalAny = globalThis as typeof globalThis & {
    localStorage?: {
      getItem?: (key: string) => string | null;
      setItem?: (key: string, value: string) => void;
      removeItem?: (key: string) => void;
      clear?: () => void;
    };
  };

  const storage = globalAny.localStorage;
  if (storage && typeof storage.getItem !== 'function') {
    globalAny.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
    };
  }
}
