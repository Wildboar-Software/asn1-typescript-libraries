/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION DestinationIndicator */
/**
 * @summary DestinationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestinationIndicator  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export type DestinationIndicator = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION DestinationIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DestinationIndicator */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DestinationIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_DestinationIndicator */
export const _decode_DestinationIndicator = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_DestinationIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DestinationIndicator */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DestinationIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_DestinationIndicator */
export const _encode_DestinationIndicator = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_DestinationIndicator */

/* eslint-enable */
