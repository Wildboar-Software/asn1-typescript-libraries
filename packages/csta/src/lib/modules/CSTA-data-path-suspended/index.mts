/**
 * @description
 *
 * Data Path Suspended: switching function reports that a data path cannot
 * transfer but still exists (ECMA-269 §24.2.2 / §6.2.3, ECMA-285 §22.2.2).
 * Resume Data Path may restart flow.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./dataPathSuspended.oa.mjs";
export * from "./DataPathSuspendedArgument.ta.mjs";
export * from "./DataPathSuspendedResult.ta.mjs";
