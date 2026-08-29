/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary secgCurve
 * @description
 *
 * Certicom/SEC2 curve arc `{iso(1) identified-organization(3)
 * certicom(132) curve(0)}`. Not in ANSI X9.62-1998; used by later
 * `ansix9*` named domains in this package.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secgCurve OBJECT IDENTIFIER ::= { iso(1) identified-organization(3)
 * certicom(132) curve(0) }
 * ```
 *
 * @constant
 */
export const secgCurve: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
]);

/* eslint-enable */
