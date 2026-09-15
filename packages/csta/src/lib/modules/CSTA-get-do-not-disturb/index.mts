/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.10 / ECMA-285 §20.1.10):
 * do-not-disturb (prevent incoming calls). Optional origination bitmap and
 * calling-device list. Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getDoNotDisturb.oa.mjs";
export * from "./GetDoNotDisturbArgument.ta.mjs";
export * from "./GetDoNotDisturbResult.ta.mjs";
