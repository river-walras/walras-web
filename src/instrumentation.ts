export function register() {
  if (typeof window !== 'undefined') {
    return;
  }

  const globalAny = globalThis as typeof globalThis & {
    localStorage?: Storage;
  };

  const storage = globalAny.localStorage;
  if (storage && typeof storage.getItem !== 'function') {
    globalAny.localStorage = {
      length: 0,
      key: () => null,
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
    };
  }
}
