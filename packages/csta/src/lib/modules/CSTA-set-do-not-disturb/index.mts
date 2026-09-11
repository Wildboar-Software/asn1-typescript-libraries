/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.19 / ECMA-285 §20.1.19):
 * do-not-disturb (typically prevent alerting). Interaction with forwarding: a
 * DND device may still forward per the forwarding type. Generates Do Not
 * Disturb. If already at the requested value: positive ack and no event
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setDoNotDisturb.oa.mjs";
export * from "./SetDoNotDisturbArgument.ta.mjs";
export * from "./SetDoNotDisturbResult.ta.mjs";
