/**
 * @description
 *
 * ROSE information objects used by CSTA (ECMA-285 §5.2). This package
 * re-exports `OPERATION`, `ERROR`, `Code`, and `Priority` from
 * `@wildboar/rose` rather than defining a second copy.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./Code.ta.mjs";
export * from "./ERROR.oca.mjs";
export * from "./OPERATION.oca.mjs";
export * from "./Priority.ta.mjs";
