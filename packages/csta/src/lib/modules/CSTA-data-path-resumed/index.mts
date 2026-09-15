/**
 * @description
 *
 * Data Path Resumed: switching function reports that a suspended data path is
 * transferring again (ECMA-269 §24.2.1 / §6.2.3, ECMA-285 §22.2.1). The data
 * path is an SF-side logical object, not the CSTA association (ECMA-269
 * §6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./dataPathResumed.oa.mjs";
export * from "./DataPathResumedArgument.ta.mjs";
export * from "./DataPathResumedResult.ta.mjs";
