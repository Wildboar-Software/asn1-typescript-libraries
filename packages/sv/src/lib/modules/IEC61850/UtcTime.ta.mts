/* eslint-disable */
import { type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UtcTime
 * @description
 *
 * UTC timestamp carried as an ASDU refresh time (`refrTm`).
 * The 9-2LE guide does not specify the octet layout.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtcTime  ::=  OCTET STRING
 * ```
 */
export
type UtcTime = OCTET_STRING; // OctetStringType
export const _decode_UtcTime: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;
export const _encode_UtcTime: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
