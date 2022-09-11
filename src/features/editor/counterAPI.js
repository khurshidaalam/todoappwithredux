// A mock function to mimic making an async request for data
export function fetchCount(item = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: item }), 500)
  );
}
