/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va.mjs";

/**
 * @summary pbewithSHAAnd40BitRC2_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbewithSHAAnd40BitRC2-CBC       OBJECT IDENTIFIER ::= {pkcs-12PbeIds 6}
 * ```
 *
 * @constant
 */
export const pbewithSHAAnd40BitRC2_CBC: OBJECT_IDENTIFIER = new _OID(
    [6],
    pkcs_12PbeIds
);

/* eslint-enable */
