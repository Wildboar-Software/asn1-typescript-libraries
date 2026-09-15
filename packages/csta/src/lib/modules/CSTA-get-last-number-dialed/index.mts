/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.12 Get Last Number Dialled /
 * ECMA-285 §20.1.12): last number dialled (manual or originally called device
 * from Consultation/Make/Make Predictive Call, whichever is most recent).
 * British spelling in ECMA-269; this module uses `dialed`. Does not generate
 * events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getLastNumberDialed.oa.mjs";
export * from "./GetLastNumberDialedArgument.ta.mjs";
export * from "./GetLastNumberDialedResult.ta.mjs";
