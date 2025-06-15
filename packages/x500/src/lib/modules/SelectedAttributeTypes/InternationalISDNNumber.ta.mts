/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION InternationalISDNNumber */
/**
 * @summary InternationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternationalISDNNumber  ::=
 *   NumericString(SIZE (1..ub-international-isdn-number))
 * ```
 */
export type InternationalISDNNumber = NumericString; // NumericString
/* END_OF_SYMBOL_DEFINITION InternationalISDNNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InternationalISDNNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InternationalISDNNumber */

/* START_OF_SYMBOL_DEFINITION _decode_InternationalISDNNumber */
export const _decode_InternationalISDNNumber = $._decodeNumericString;
/* END_OF_SYMBOL_DEFINITION _decode_InternationalISDNNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InternationalISDNNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InternationalISDNNumber */

/* START_OF_SYMBOL_DEFINITION _encode_InternationalISDNNumber */
export const _encode_InternationalISDNNumber = $._encodeNumericString;

/* END_OF_SYMBOL_DEFINITION _encode_InternationalISDNNumber */

/* eslint-enable */
