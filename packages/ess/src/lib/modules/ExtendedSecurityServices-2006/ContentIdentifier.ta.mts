/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ContentIdentifier */
/**
 * @summary ContentIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentIdentifier  ::=  OCTET STRING
 * ```
 */
export type ContentIdentifier = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ContentIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ContentIdentifier */
export const _decode_ContentIdentifier = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_ContentIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ContentIdentifier */
export const _encode_ContentIdentifier = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_ContentIdentifier */

/* eslint-enable */
