function prefersColorSchemeIsDark() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export default prefersColorSchemeIsDark;
