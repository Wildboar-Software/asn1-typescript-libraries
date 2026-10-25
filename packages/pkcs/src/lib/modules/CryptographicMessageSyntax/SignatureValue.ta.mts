/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureValue  ::=  OCTET STRING
 * ```
 */
export type SignatureValue = OCTET_STRING; // OctetStringType




export const _decode_SignatureValue: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;




export const _encode_SignatureValue: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
