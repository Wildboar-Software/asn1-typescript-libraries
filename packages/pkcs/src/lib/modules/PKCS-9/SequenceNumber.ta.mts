/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SequenceNumber */
/**
 * @summary SequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumber  ::=  INTEGER (1..MAX)
 * ```
 */
export type SequenceNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION SequenceNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceNumber */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceNumber */
export const _decode_SequenceNumber = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SequenceNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceNumber */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceNumber */
export const _encode_SequenceNumber = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SequenceNumber */

/* eslint-enable */
