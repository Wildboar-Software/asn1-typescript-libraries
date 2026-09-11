/**
 * @description
 *
 * System Status (ECMA-269 §14.2.2 / ECMA-285 §12.2.2).
 * Bi-directional report of the issuer's status to its peer, also
 * used as a heartbeat (`systemStatusTimer` from Get Switching
 * Function Capabilities).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./systemStatus.oa.mjs";
export * from "./SystemStatusArg.ta.mjs";
export * from "./SystemStatusRes.ta.mjs";
