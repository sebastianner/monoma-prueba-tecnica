export interface List {
  data: Data;
}

export interface Data {
  results: Result[];
  count: number;
  next: string;
  previous: string;
}

export interface Result {
  name: string;
  url: string;
}
