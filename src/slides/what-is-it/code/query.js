export default `
query GetProjectByName($name: String!) {
  project(name: $name) {
    tagline
  }
}
`;
