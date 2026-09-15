/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.1 / ECMA-285 §20.1.1): request
 * a call-back call between two devices (e.g. when a device is busy). Only one
 * Call Back (call-related or not) may be outstanding per originator/target
 * pair. Generates a Call Back event.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./callBackNonCallRelated.oa.mjs";
export * from "./CallBackNonCallRelatedArgument.ta.mjs";
export * from "./CallBackNonCallRelatedResult.ta.mjs";
