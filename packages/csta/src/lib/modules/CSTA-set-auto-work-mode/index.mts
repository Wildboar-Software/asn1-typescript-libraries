/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.17 / ECMA-285 §20.1.17): how
 * the switch auto-transitions to/from WorkingAfterCall after a call. Distinct
 * from Set Agent State, which requests a specific state. Disabling while
 * already in WorkingAfterCall leaves that state until changed. Generates Auto
 * Work Mode. If already at the requested value: positive ack and no event
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setAutoWorkMode.oa.mjs";
export * from "./SetAutoWorkModeArgument.ta.mjs";
export * from "./SetAutoWorkModeResult.ta.mjs";
