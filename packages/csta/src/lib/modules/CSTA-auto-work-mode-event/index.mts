/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.8 / ECMA-285 §20.2.8): Auto-work
 * mode changed (telephone or Set Auto Work Mode). Busy→WorkingAfterCall after a
 * call, then optionally onward after a timer. Not generated when a Set request
 * leaves the feature unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./AutoWorkModeEvent.ta.mjs";
