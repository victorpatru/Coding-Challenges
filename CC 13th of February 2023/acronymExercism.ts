// https://exercism.org/tracks/typescript/exercises/acronym

export function parse(phrase: string) {
  // Check if it has alternative punctuatiom

  return phrase
    .match(/[A-Z]+[a-z]*|[a-z]+/g)
    ?.map((word) => word.charAt(0).toUpperCase())
    .join("");
}
