/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PrivacyMark */
/**
 * @summary PrivacyMark
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivacyMark  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export type PrivacyMark = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION PrivacyMark */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivacyMark */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivacyMark */

/* START_OF_SYMBOL_DEFINITION _decode_PrivacyMark */
export const _decode_PrivacyMark = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_PrivacyMark */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivacyMark */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivacyMark */

/* START_OF_SYMBOL_DEFINITION _encode_PrivacyMark */
export const _encode_PrivacyMark = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_PrivacyMark */

/* eslint-enable */
