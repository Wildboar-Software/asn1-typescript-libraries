/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary GPS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPS   ::=  OCTET STRING
 * ```
 */
export type GPS = OCTET_STRING; // OctetStringType




export const _decode_GPS = $._decodeOctetString;




export const _encode_GPS = $._encodeOctetString;


/* eslint-enable */
