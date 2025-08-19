export interface HouseProperty {
  id: string;
  name: string;
  description: string;
  price: number;
  lngLat: lngLat;
  tags: string[];
}

export interface lngLat {
  lng: number;
  lat: number;
}