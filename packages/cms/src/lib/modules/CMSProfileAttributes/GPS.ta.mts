/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary GPS
 * @description
 *
 * OCTET STRING GPS location pointer (ITU-T X.894 | ISO/IEC 24824-4 Annex A.17).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPS   ::=  OCTET STRING
 * ```
 */
export type GPS = OCTET_STRING; // OctetStringType




export const _decode_GPS: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;




export const _encode_GPS: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
