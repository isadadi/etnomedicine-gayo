import { PLANTS } from "@/constants/data/plants";
import { Plant } from "@/interfaces/plant";
import { ApiResponse } from "@/interfaces/response-api";

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const getPlants = async (
  limit?: number
): Promise<ApiResponse<Plant[]>> => {
  await sleep();
  if (typeof limit === "number") {
    return { error: false, data: PLANTS.slice(0, limit) };
  }
  return { error: false, data: PLANTS };
};

export const getPlantById = async (
  id: string
): Promise<ApiResponse<Plant | undefined>> => {
  await sleep();

  const findPlant = PLANTS.find((dis) => dis.id === id);
  return { error: false, data: findPlant };
};

interface SearchParams {
  name?: string;
  latin?: string;
  gayo?: string;
  limit?: number;
}

export const getHerbsBySearchParams = async ({
  name,
  latin,
  gayo,
  limit,
}: SearchParams): Promise<ApiResponse<Plant[]>> => {
  await sleep(300);

  let filtered = PLANTS;

  // Filter berdasarkan nama indo
  if (name) {
    filtered = filtered.filter((h) =>
      h.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
  }

  // Filter berdasarkan nama latin
  if (latin) {
    filtered = filtered.filter((h) =>
      h.latin.toLocaleLowerCase().includes(latin.toLocaleLowerCase())
    );
  }

  // Filter berdasarkan nama gayo
  if (gayo) {
    filtered = filtered.filter((h) =>
      h.gayo?.toLocaleLowerCase().includes(gayo.toLocaleLowerCase())
    );
  }

  if (typeof limit === "number") {
    return { error: false, data: filtered.slice(0, limit) };
  }

  return { error: false, data: filtered };
};
