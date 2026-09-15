/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.11 / ECMA-285 §20.1.11):
 * forwarding status. Types in §6.7.1 (Immediate, Busy, No Answer, DND, plus
 * origination class). Two levels: SF default set vs user-specified
 * combinations. Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getForwarding.oa.mjs";
export * from "./GetForwardingArgument.ta.mjs";
export * from "./GetForwardingResult.ta.mjs";
