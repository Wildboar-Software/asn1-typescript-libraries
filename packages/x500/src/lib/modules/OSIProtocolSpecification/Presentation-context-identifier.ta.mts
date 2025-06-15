/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Presentation_context_identifier */
/**
 * @summary Presentation_context_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier  ::=  INTEGER(1..127, ..., 128..MAX)
 * ```
 */
export type Presentation_context_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_identifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_context_identifier */
export const _decode_Presentation_context_identifier = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_identifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_context_identifier */
export const _encode_Presentation_context_identifier = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_context_identifier */

/* eslint-enable */
