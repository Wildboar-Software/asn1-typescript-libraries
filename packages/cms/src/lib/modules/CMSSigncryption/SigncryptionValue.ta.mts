/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SigncryptionValue
 * @description
 *
 * OCTET STRING result of signcryption (ITU-T X.894 | ISO/IEC 24824-4 clause 7.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigncryptionValue  ::=  OCTET STRING(SIZE(1..MAX))
 * ```
 */
export type SigncryptionValue = OCTET_STRING; // OctetStringType




export const _decode_SigncryptionValue: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;




export const _encode_SigncryptionValue: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
