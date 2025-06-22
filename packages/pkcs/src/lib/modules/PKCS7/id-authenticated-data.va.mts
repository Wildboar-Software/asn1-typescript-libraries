/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkcs } from "../PKCS7/id-pkcs.va.mjs";

/**
 * @summary id_authenticated_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-authenticated-data OBJECT IDENTIFIER ::= {id-pkcs 9 16 1 2}
 * ```
 *
 * @constant
 */
export const id_authenticated_data: OBJECT_IDENTIFIER = _OID.fromParts(
    [9, 16, 1, 2],
    id_pkcs
);

/* eslint-enable */
