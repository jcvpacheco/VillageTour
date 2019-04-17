export type FilterTypes = 'all' | 'unselected' | 'selected';

export interface IBrandItem {
  name: string;
  gender: string;
  rate: string;
  locationX: number;
  locationY: number;
  selected: boolean;
}

export interface IBrands {
  [id: string]: IBrandItem;
}
