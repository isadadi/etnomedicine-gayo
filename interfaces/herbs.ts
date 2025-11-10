import { Disease } from "./disease";
import { Plant } from "./plant";

export interface Dosage {
  gender: "pria" | "wanita" | string;
  /**
   * Rentang usia dalam tahun
   * Contoh:
   * ["0","5"]      => 0–5 tahun
   * ["60", null]   => 60+ tahun (tanpa batas atas)
   */
  ageRange: [string, string | null];
  amount: string; // Contoh: "½ gelas"
  frequency: string; // Contoh: "2× sehari setelah makan"
}

export interface Herb {
  id: string;
  name: string;
  image: any;
  description: string;
  plants: Plant[];
  diseases: Disease[];
  benefits: string[];
  ingredients: string[];
  dosage: Dosage[]; // <--- sudah disesuaikan
  method: string[];
}
