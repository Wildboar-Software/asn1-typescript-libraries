/**
 * @description
 *
 * Per-message security attributes (ECMA-285 §9.7; ECMA-269 §12.2.12).
 * `CSTASecurityData` carries sequence number, timestamp, and opaque
 * `SecurityInfo` for loss detection, replay resistance, and access
 * control. Association-level authentication may use ACSE (ECMA-285
 * §7–§8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./CSTASecurityData.ta.mjs";
export * from "./SecurityInfo.ta.mjs";
export * from "./TimeInfo.ta.mjs";
