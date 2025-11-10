export interface Plant {
  id: string;
  name: string;
  latin: string;
  gayo?: string; // optional, karena tidak semua punya padanan
  image: any; // sekarang berupa URL
}
