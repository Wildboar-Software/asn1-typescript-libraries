/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PDSName */
/**
 * @summary PDSName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDSName  ::=  PrintableString(SIZE (1..ub-pds-name-length))
 * ```
 */
export type PDSName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION PDSName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDSName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDSName */

/* START_OF_SYMBOL_DEFINITION _decode_PDSName */
export const _decode_PDSName = $._decodePrintableString;
/* END_OF_SYMBOL_DEFINITION _decode_PDSName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDSName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDSName */

/* START_OF_SYMBOL_DEFINITION _encode_PDSName */
export const _encode_PDSName = $._encodePrintableString;

/* END_OF_SYMBOL_DEFINITION _encode_PDSName */

/* eslint-enable */
