/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AttributeDescription */
/**
 * @summary AttributeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeDescription  ::=  UTF8String(SIZE (1..MAX))
 * ```
 */
export type AttributeDescription = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeDescription */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeDescription */
export const _decode_AttributeDescription = $._decodeUTF8String;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeDescription */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeDescription */
export const _encode_AttributeDescription = $._encodeUTF8String;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeDescription */

/* eslint-enable */
