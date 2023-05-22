declare module 'styled-jsx/webpack' {
  const loader: unknown;
  export { loader };
}

// Shim for SCSS files
declare module '*.scss' {
  const scss: string;
  export default scss;
}
