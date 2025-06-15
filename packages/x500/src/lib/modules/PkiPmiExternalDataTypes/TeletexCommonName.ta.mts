/* eslint-disable */
import { ASN1Element as _Element, TeletexString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TeletexCommonName */
/**
 * @summary TeletexCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexCommonName  ::=  TeletexString(SIZE (1..ub-common-name-length))
 * ```
 */
export type TeletexCommonName = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION TeletexCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexCommonName */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexCommonName */

/* START_OF_SYMBOL_DEFINITION _decode_TeletexCommonName */
export const _decode_TeletexCommonName = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_TeletexCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexCommonName */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexCommonName */

/* START_OF_SYMBOL_DEFINITION _encode_TeletexCommonName */
export const _encode_TeletexCommonName = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_TeletexCommonName */

/* eslint-enable */
