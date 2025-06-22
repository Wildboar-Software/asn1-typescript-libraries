/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkcs } from "../PKCS7/id-pkcs.va.mjs";

/**
 * @summary id_signed_and_enveloped_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signed-and-enveloped-data OBJECT IDENTIFIER ::= {id-pkcs 7 4}
 * ```
 *
 * @constant
 */
export const id_signed_and_enveloped_data: OBJECT_IDENTIFIER = _OID.fromParts(
    [7, 4],
    id_pkcs
);

/* eslint-enable */
