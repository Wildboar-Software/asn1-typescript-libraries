/**
 * @module
 * @description
 *
 * ASN.1 module `C12-22-Security-Mechanism`
 * `{iso(1) member-body(2) us(840) c1219-standard(10066) mechanism(12) c1222(1) version(1)}`
 * from the 2026 edition of ANSI C12.22.
 *
 * `Calling-authentication-value-c1222` is a context-specific `[1]`
 * sequence. `key-id-element` is one octet and `iv-element` is four
 * octets. Either component may be absent.
 */
export * from "./Calling-authentication-value-c1222.ta.mjs";
