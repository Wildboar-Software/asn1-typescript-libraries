/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_12PbeIds } from "../PKCS-12/pkcs-12PbeIds.va.mjs";

/**
 * @summary pbeWithSHAAnd3_KeyTripleDES_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHAAnd3-KeyTripleDES-CBC OBJECT IDENTIFIER ::= {pkcs-12PbeIds 3}
 * ```
 *
 * @constant
 */
export const pbeWithSHAAnd3_KeyTripleDES_CBC: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    pkcs_12PbeIds
);

/* eslint-enable */
