import { HERBS } from "@/constants/data/herbs";
import { Herb } from "@/interfaces/herbs";
import { ApiResponse } from "@/interfaces/response-api";

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const getHerbs = async (limit?: number) => {
  await sleep();
  if (typeof limit === "number") {
    return { error: false, data: HERBS.slice(0, limit) } as ApiResponse<Herb[]>;
  }
  return { error: false, data: HERBS } as ApiResponse<Herb[]>;
};

export const getHerbById = async (id: string) => {
  await sleep();

  const findHerb = HERBS.find((herb) => herb.id === id);
  return { error: false, data: findHerb } as ApiResponse<Herb | null>;
};

interface SearchParams {
  plant?: string;
  disease?: string;
  diseaseType?: string;
  age?: number; // umur dalam tahun
  limit?: number;
  gender?: string;
}

export const getHerbsBySearchParams = async ({
  plant,
  disease,
  diseaseType,
  age,
  gender,
  limit,
}: SearchParams): Promise<ApiResponse<Herb[]>> => {
  await sleep(300);

  let filtered = HERBS;

  // Filter berdasarkan tanaman
  if (plant) {
    filtered = filtered.filter((h) =>
      h.plants.some(
        (p) =>
          p.name.toLowerCase().includes(plant.toLowerCase()) ||
          p.latin.toLowerCase().includes(plant.toLowerCase()) ||
          p.gayo?.toLowerCase().includes(plant.toLowerCase())
      )
    );
  }

  // Filter berdasarkan penyakit
  if (disease) {
    filtered = filtered.filter((h) =>
      h.diseases.some((d) =>
        d.name.toLowerCase().includes(disease.toLowerCase())
      )
    );
  }

  if (diseaseType) {
    filtered = filtered.filter((h) =>
      h.diseases.some((d) =>
        d.type.toLowerCase().includes(diseaseType.toLowerCase())
      )
    );
  }

  // Filter berdasarkan usia & gender
  if (typeof age === "number" || gender) {
    filtered = filtered.filter((h) =>
      h.dosage.some((d) => {
        // Filter gender (jika diberikan)
        if (
          gender &&
          d.gender !== "all" &&
          d.gender !== gender.toLocaleLowerCase()
        ) {
          return false;
        }

        // Filter range usia
        if (typeof age === "number") {
          const [min, max] = d.ageRange;
          const minAge = parseInt(min, 10);
          const maxAge = max === null ? Infinity : parseInt(max, 10);

          if (!(age >= minAge && age <= maxAge)) {
            return false;
          }
        }

        return true;
      })
    );
  }

  if (typeof limit === "number") {
    return { error: false, data: filtered.slice(0, limit) };
  }

  return { error: false, data: filtered };
};
