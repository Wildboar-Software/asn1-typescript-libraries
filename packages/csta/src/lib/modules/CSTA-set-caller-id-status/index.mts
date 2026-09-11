/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.18 / ECMA-285 §20.1.18):
 * whether this device's Caller ID is provided on calls it originates. Generates
 * Caller ID Status. If already at the requested value: positive ack and no
 * event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setCallerIDStatus.oa.mjs";
export * from "./SetCallerIDStatusArgument.ta.mjs";
export * from "./SetCallerIDStatusResult.ta.mjs";
