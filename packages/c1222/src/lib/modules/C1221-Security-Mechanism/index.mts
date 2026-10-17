/**
 * @module
 * @description
 *
 * ASN.1 module `C1221-Security-Mechanism`
 * `{iso(1) member-body(2) us(840) c1219-standard(10066) mechanism(12) c1221(0) version(1)}`
 * from the 2026 edition of ANSI C12.22.
 *
 * `Calling-authentication-value-c1221` is an extensible choice of
 * identification, request, and response octet strings. Identification
 * is 3 octets or 5 to 259 octets. A request is 1 to 255 octets. A
 * response is 0 to 255 octets.
 *
 * The assignment is written `[0] IMPLICIT CHOICE`. X.680 does not
 * allow implicit tagging of an untagged choice, so the compiler emits
 * an explicit context `[0]` wrapper around the selected alternative.
 */
export * from "./Calling-authentication-value-c1221.ta.mjs";
