/**
 * @description
 *
 * Switching Function Capabilities Changed (ECMA-269 §14.2.3 /
 * ECMA-285 §12.2.3). SF notifies that Get Switching Function
 * Capabilities data has changed. CF should re-issue that service.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./swFunctionCapsChanged.oa.mjs";
export * from "./SwFunctionCapsChangedArg.ta.mjs";
export * from "./SwFunctionCapsChangedRes.ta.mjs";
