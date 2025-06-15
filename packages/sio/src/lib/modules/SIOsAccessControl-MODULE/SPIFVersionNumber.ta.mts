/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION SPIFVersionNumber */
/**
 * @summary SPIFVersionNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPIFVersionNumber  ::=  INTEGER(0..MAX)
 * ```
 */
export type SPIFVersionNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION SPIFVersionNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SPIFVersionNumber */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SPIFVersionNumber */

/* START_OF_SYMBOL_DEFINITION _decode_SPIFVersionNumber */
export const _decode_SPIFVersionNumber = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_SPIFVersionNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SPIFVersionNumber */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SPIFVersionNumber */

/* START_OF_SYMBOL_DEFINITION _encode_SPIFVersionNumber */
export const _encode_SPIFVersionNumber = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_SPIFVersionNumber */

/* eslint-enable */
