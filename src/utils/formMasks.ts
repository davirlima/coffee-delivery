export const normalizeCEP = (value: string | undefined) => {
  if (!value) {
    return "";
  } else {
    return value.replace(/[\D]/g, "").replace(/(\d{5})(\d)/g, "$1-$2");
  }
};
