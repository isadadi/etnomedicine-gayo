import { DISEASES } from "@/constants/data/diseases";
import { Disease } from "@/interfaces/disease";
import { ApiResponse } from "@/interfaces/response-api";

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export const getDiseases = async (
  limit?: number
): Promise<ApiResponse<Disease[]>> => {
  await sleep();
  if (typeof limit === "number") {
    return { error: false, data: DISEASES.slice(0, limit) };
  }
  return { error: false, data: DISEASES };
};

export const getDiseaseById = async (
  id: string
): Promise<ApiResponse<Disease | undefined>> => {
  await sleep();

  const findHerb = DISEASES.find((dis) => dis.id === id);
  return { error: false, data: findHerb };
};

interface SearchParams {
  name?: string;
  type?: string;
  limit?: number;
}

export const getDiseasBySearchParams = async ({
  name,
  type,
  limit,
}: SearchParams): Promise<ApiResponse<Disease[]>> => {
  await sleep(300);

  let filtered = DISEASES;

  // Filter berdasarkan nama penyakit
  if (name) {
    filtered = filtered.filter((h) =>
      h.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
  }

  // Filter berdasarkan jenis penyakit
  if (type) {
    filtered = filtered.filter((h) =>
      h.type.toLocaleLowerCase().includes(type.toLocaleLowerCase())
    );
  }

  if (typeof limit === "number") {
    return { error: false, data: filtered.slice(0, limit) };
  }

  return { error: false, data: filtered };
};
