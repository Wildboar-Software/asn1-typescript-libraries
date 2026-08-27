/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SigncryptedKey
 * @description
 *
 * OCTET STRING carrying a signcrypted symmetric key for envelope mode
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.4).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptedKey  ::=  OCTET STRING
 * ```
 */
export type SigncryptedKey = OCTET_STRING; // OctetStringType




export const _decode_SigncryptedKey = $._decodeOctetString;




export const _encode_SigncryptedKey = $._encodeOctetString;


/* eslint-enable */
