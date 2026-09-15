/**
 * @description
 *
 * Start Data Path: create a data path on a device or connection. Bidirectional.
 * The path is an SF-side logical object, not the CSTA association (ECMA-269
 * §24.2.8 / §6.2.1, ECMA-285 §22.2.8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./DataPathDirection.ta.mjs";
export * from "./startDataPath.oa.mjs";
export * from "./StartDataPathArgument.ta.mjs";
export * from "./StartDataPathResult.ta.mjs";
