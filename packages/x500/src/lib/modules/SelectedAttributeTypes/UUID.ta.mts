/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION UUID */
/**
 * @summary UUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UUID  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type UUID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION UUID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UUID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UUID */

/* START_OF_SYMBOL_DEFINITION _decode_UUID */
export const _decode_UUID = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_UUID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UUID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UUID */

/* START_OF_SYMBOL_DEFINITION _encode_UUID */
export const _encode_UUID = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_UUID */

/* eslint-enable */
