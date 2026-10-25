/* eslint-disable */
import { type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GmidData
 * @description
 *
 * Optional ASDU payload. The IEC 61850-9-2LE guide does not
 * define this field.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GmidData  ::=  OCTET STRING
 * ```
 */
export
type GmidData = OCTET_STRING; // OctetStringType
export const _decode_GmidData: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;
export const _encode_GmidData: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
