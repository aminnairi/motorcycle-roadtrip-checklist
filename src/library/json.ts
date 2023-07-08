export const safeParseJson = (input: string): any => {
  try {
    return JSON.parse(input);
  }
  catch {
    return undefined;
  }
};
