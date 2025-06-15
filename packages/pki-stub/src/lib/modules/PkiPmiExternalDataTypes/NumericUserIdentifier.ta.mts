/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION NumericUserIdentifier */
/**
 * @summary NumericUserIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumericUserIdentifier  ::=  NumericString(SIZE (1..ub-numeric-user-id-length))
 * ```
 */
export type NumericUserIdentifier = NumericString; // NumericString
/* END_OF_SYMBOL_DEFINITION NumericUserIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericUserIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericUserIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_NumericUserIdentifier */
export const _decode_NumericUserIdentifier = $._decodeNumericString;
/* END_OF_SYMBOL_DEFINITION _decode_NumericUserIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericUserIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericUserIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_NumericUserIdentifier */
export const _encode_NumericUserIdentifier = $._encodeNumericString;

/* END_OF_SYMBOL_DEFINITION _encode_NumericUserIdentifier */

/* eslint-enable */
