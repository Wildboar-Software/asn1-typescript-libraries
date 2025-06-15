/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CommonName */
/**
 * @summary CommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonName  ::=  PrintableString(SIZE (1..ub-common-name-length))
 * ```
 */
export type CommonName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION CommonName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonName */

/* START_OF_SYMBOL_DEFINITION _decode_CommonName */
export const _decode_CommonName = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_CommonName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonName */

/* START_OF_SYMBOL_DEFINITION _encode_CommonName */
export const _encode_CommonName = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_CommonName */

/* eslint-enable */
