// https://exercism.org/tracks/typescript/exercises/bob

export function hey(message: string) {
  message = String(message.trim()).replace("\t", "");

  if (message.trim().length === 0) {
    return "Fine. Be that way!";
  }

  if (
    message.slice(-1) === "?" &&
    // typeof +message.slice(0, -1) !== "number" &&
    message === message.toUpperCase() &&
    /[a-zA-Z]/g.test(message)
  ) {
    return "Calm down, I know what I'm doing!";
  }
  if (message.slice(-1) === "?") {
    return "Sure.";
  }

  if (!/[a-zA-Z]/g.test(message)) {
    return "Whatever.";
  }

  if (message === message.toUpperCase()) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
}
