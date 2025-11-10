/**
 * Mengubah angka menjadi format singkatan (K, M, B)
 * @param num Angka yang akan diformat
 * @returns String format singkatan
 */
const formatNumberToK = (num: number): string => {
  if (num >= 1000000000) {
    // Jika miliaran (B)
    // Pembagian 1,000,000,000, lalu bulatkan menjadi 1 angka desimal jika perlu
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1000000) {
    // Jika jutaan (M)
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    // Jika ribuan (K)
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }

  // Jika kurang dari 1000, kembalikan angka aslinya dalam bentuk string
  return num.toString();
};

export default formatNumberToK;
