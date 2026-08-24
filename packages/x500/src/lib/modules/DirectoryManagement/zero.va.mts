/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";

/**
 * @summary zero
 * @description
 *
 * DEFAULT VALUE for counter attributes (operations processed, etc.). Not a
 * sentinel for "unlimited" on timeouts or size/time limits.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * zero INTEGER ::= 0
 * ```
 *
 * @constant
 */
export const zero: INTEGER = 0;

/* eslint-enable */
