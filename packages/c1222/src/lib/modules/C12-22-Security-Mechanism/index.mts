/**
 * @module
 * @description
 *
 * ASN.1 module `C12-22-Security-Mechanism`
 * `{iso(1) member-body(2) us(840) c1219-standard(10066) mechanism(12) c1222(1) version(1)}`
 * from ANSI C12.22 (2026).
 *
 * `Calling-authentication-value-c1222` is the context-specific `[1]`
 * authentication value for the C12.22 security mechanism. `key-id-element`
 * is one octet and `iv-element` is four octets. Either may be absent.
 */
export * from "./Calling-authentication-value-c1222.ta.mjs";
