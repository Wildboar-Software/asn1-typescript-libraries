/**
 * @description
 *
 * Request System Status (ECMA-269 §14.2.1 / ECMA-285 §12.2.1).
 * Bi-directional query of the peer's system status. SF-initiated
 * requests include `sysStatRegisterID` when registration is
 * supported.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./requestSysStat.oa.mjs";
export * from "./RequestSysStatArg.ta.mjs";
export * from "./RequestSysStatRes.ta.mjs";
