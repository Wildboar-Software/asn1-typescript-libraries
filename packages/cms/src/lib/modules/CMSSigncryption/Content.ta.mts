/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Content */
/**
 * @summary Content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Content  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type Content = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Content */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Content */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Content */

/* START_OF_SYMBOL_DEFINITION _decode_Content */
export const _decode_Content = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_Content */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Content */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Content */

/* START_OF_SYMBOL_DEFINITION _encode_Content */
export const _encode_Content = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_Content */

/* eslint-enable */
