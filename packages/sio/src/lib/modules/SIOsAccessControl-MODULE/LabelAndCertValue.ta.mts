/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION LabelAndCertValue */
/**
 * @summary LabelAndCertValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LabelAndCertValue  ::=  INTEGER(0..MAX)
 * ```
 */
export type LabelAndCertValue = INTEGER;
/* END_OF_SYMBOL_DEFINITION LabelAndCertValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LabelAndCertValue */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LabelAndCertValue */

/* START_OF_SYMBOL_DEFINITION _decode_LabelAndCertValue */
export const _decode_LabelAndCertValue = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_LabelAndCertValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LabelAndCertValue */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LabelAndCertValue */

/* START_OF_SYMBOL_DEFINITION _encode_LabelAndCertValue */
export const _encode_LabelAndCertValue = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_LabelAndCertValue */

/* eslint-enable */
