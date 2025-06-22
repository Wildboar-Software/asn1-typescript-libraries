/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va.mjs";

/**
 * @summary pbeWithSHAAnd2_KeyTripleDES_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHAAnd2-KeyTripleDES-CBC OBJECT IDENTIFIER ::= {pkcs-12PbeIds 4}
 * ```
 *
 * @constant
 */
export const pbeWithSHAAnd2_KeyTripleDES_CBC: OBJECT_IDENTIFIER = _OID.fromParts(
    [4],
    pkcs_12PbeIds
);

/* eslint-enable */
