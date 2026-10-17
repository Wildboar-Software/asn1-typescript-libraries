/**
 * @module
 * @description
 *
 * ASN.1 module `C1221-Security-Mechanism`
 * `{iso(1) member-body(2) us(840) c1219-standard(10066) mechanism(12) c1221(0) version(1)}`
 * from ANSI C12.22 (2026).
 *
 * `Calling-authentication-value-c1221` is the context-specific `[0]`
 * authentication value for the C12.21 security mechanism. It is a choice of
 * an identification, a request, or a response, each an implicitly tagged
 * octet string with its own size constraint.
 */
export * from "./Calling-authentication-value-c1221.ta.mjs";
