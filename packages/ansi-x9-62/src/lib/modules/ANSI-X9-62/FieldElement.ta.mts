/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION FieldElement */
/**
 * @summary FieldElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldElement  ::=  OCTET STRING
 * ```
 */
export type FieldElement = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION FieldElement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FieldElement */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FieldElement */

/* START_OF_SYMBOL_DEFINITION _decode_FieldElement */
export const _decode_FieldElement = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_FieldElement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FieldElement */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FieldElement */

/* START_OF_SYMBOL_DEFINITION _encode_FieldElement */
export const _encode_FieldElement = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_FieldElement */

/* eslint-enable */
