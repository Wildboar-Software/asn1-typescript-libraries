/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.20 / ECMA-285 §20.1.20): one
 * user-specified forwarding type/destination per invocation. Omit
 * `forwardingType` to activate/deactivate SF default settings (§6.7.1).
 * Generates Forwarding. If already at the requested value: positive ack and no
 * event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setForwarding.oa.mjs";
export * from "./SetForwardingArgument.ta.mjs";
export * from "./SetForwardingResult.ta.mjs";
