/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UtcTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtcTime ::= OCTET STRING -- format and size defined in 8.1.3.6.
 * ```
 */
export
type UtcTime = OCTET_STRING; // OctetStringType
export const _decode_UtcTime: $.ASN1Decoder<UtcTime> = $._decodeOctetString;
export const _encode_UtcTime: $.ASN1Encoder<UtcTime> = $._encodeOctetString;


/* eslint-enable */
