/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va.mjs";
/**
 * @summary ellipticCurve
 * @description
 *
 * Arc for named example curves of this Standard.
 * ANSI X9.62-1998 §6.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ellipticCurve OBJECT IDENTIFIER ::= { ansi-X9-62 curves(3) }
 * ```
 *
 * @constant
 */
export const ellipticCurve: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* curves */ 3],
    ansi_X9_62
);

/* eslint-enable */
