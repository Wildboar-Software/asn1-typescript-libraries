/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION EncodingParameters */
/**
 * @summary EncodingParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodingParameters  ::=  OCTET STRING(SIZE(0..MAX))
 * ```
 */
export type EncodingParameters = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncodingParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodingParameters */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncodingParameters */

/* START_OF_SYMBOL_DEFINITION _decode_EncodingParameters */
export const _decode_EncodingParameters = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_EncodingParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodingParameters */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncodingParameters */

/* START_OF_SYMBOL_DEFINITION _encode_EncodingParameters */
export const _encode_EncodingParameters = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_EncodingParameters */

/* eslint-enable */
