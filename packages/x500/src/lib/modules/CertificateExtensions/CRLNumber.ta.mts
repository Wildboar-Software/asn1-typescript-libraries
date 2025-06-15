/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CRLNumber */
/**
 * @summary CRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLNumber  ::=  INTEGER(0..MAX)
 * ```
 */
export type CRLNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION CRLNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLNumber */

/* START_OF_SYMBOL_DEFINITION _decode_CRLNumber */
export const _decode_CRLNumber = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_CRLNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLNumber */

/* START_OF_SYMBOL_DEFINITION _encode_CRLNumber */
export const _encode_CRLNumber = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_CRLNumber */

/* eslint-enable */
