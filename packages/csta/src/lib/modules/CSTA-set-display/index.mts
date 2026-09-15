/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.15 / ECMA-285 §19.1.15):
 * write a display. Overwrites only overlaid character positions. Empty string
 * clears from offset to end. Generates Display Updated. If already at the
 * requested value: positive ack and no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setDisplay.oa.mjs";
export * from "./SetDisplayArgument.ta.mjs";
export * from "./SetDisplayResult.ta.mjs";
