/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TelephoneNumber */
/**
 * @summary TelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelephoneNumber  ::=  PrintableString(SIZE (1..ub-telephone-number))
 * ```
 */
export type TelephoneNumber = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION TelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephoneNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _decode_TelephoneNumber */
export const _decode_TelephoneNumber = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_TelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephoneNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _encode_TelephoneNumber */
export const _encode_TelephoneNumber = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_TelephoneNumber */

/* eslint-enable */
