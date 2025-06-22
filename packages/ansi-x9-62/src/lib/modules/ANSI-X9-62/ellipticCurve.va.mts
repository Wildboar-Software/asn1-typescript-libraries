/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ansi_X9_62 } from "../ANSI-X9-62/ansi-X9-62.va.mjs";
/**
 * @summary ellipticCurve
 * @description
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
