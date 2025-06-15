/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ecSigType } from "../ANSI-X9-62/id-ecSigType.va.mjs";
/**
 * @summary ecdsa_with_Sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-Sha1 OBJECT IDENTIFIER ::= {id-ecSigType sha1(1)}
 * ```
 *
 * @constant
 */
export const ecdsa_with_Sha1: OBJECT_IDENTIFIER = new _OID(
    [/* sha1 */ 1],
    id_ecSigType
);

/* eslint-enable */
