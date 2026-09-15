/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.9 / ECMA-285 §20.1.9): whether
 * this device's Caller ID is provided on calls it originates. Does not generate
 * events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getCallerIDStatus.oa.mjs";
export * from "./GetCallerIDStatusArgument.ta.mjs";
export * from "./GetCallerIDStatusResult.ta.mjs";
