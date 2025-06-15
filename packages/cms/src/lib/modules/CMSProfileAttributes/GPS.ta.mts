/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION GPS */
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
/* END_OF_SYMBOL_DEFINITION GPS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GPS */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GPS */

/* START_OF_SYMBOL_DEFINITION _decode_GPS */
export const _decode_GPS = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_GPS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GPS */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GPS */

/* START_OF_SYMBOL_DEFINITION _encode_GPS */
export const _encode_GPS = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_GPS */

/* eslint-enable */
