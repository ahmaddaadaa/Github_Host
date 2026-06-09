export function truncate2LSB(value) {
  return (value >> 2) << 2;
}

export function toBinary8(value) {
  return Number(value)
    .toString(2)
    .padStart(8, "0");
}
