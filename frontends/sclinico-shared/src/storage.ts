export class Storage<T> {

  get<T>(key) {
    var data = sessionStorage.getItem(key);
    return JSON.parse(data) as T;
  }

  set(key, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  
}
