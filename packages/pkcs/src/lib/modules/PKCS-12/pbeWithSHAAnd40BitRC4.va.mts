/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va.mjs";

/**
 * @summary pbeWithSHAAnd40BitRC4
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHAAnd40BitRC4           OBJECT IDENTIFIER ::= {pkcs-12PbeIds 2}
 * ```
 *
 * @constant
 */
export const pbeWithSHAAnd40BitRC4: OBJECT_IDENTIFIER = new _OID(
    [2],
    pkcs_12PbeIds
);

/* eslint-enable */
