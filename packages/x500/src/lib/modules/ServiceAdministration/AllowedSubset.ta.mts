/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AllowedSubset */
/**
 * @summary AllowedSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllowedSubset  ::=  BIT STRING {baseObject(0), oneLevel(1), wholeSubtree(2)}
 * ```
 */
export type AllowedSubset = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AllowedSubset */

/* START_OF_SYMBOL_DEFINITION AllowedSubset_baseObject */
/**
 * @summary AllowedSubset_baseObject
 * @constant
 */
export const AllowedSubset_baseObject: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AllowedSubset_baseObject */

/* START_OF_SYMBOL_DEFINITION baseObject */
/**
 * @summary baseObject
 * @constant
 */
export const baseObject: number = AllowedSubset_baseObject; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION baseObject */

/* START_OF_SYMBOL_DEFINITION AllowedSubset_oneLevel */
/**
 * @summary AllowedSubset_oneLevel
 * @constant
 */
export const AllowedSubset_oneLevel: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AllowedSubset_oneLevel */

/* START_OF_SYMBOL_DEFINITION oneLevel */
/**
 * @summary oneLevel
 * @constant
 */
export const oneLevel: number = AllowedSubset_oneLevel; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION oneLevel */

/* START_OF_SYMBOL_DEFINITION AllowedSubset_wholeSubtree */
/**
 * @summary AllowedSubset_wholeSubtree
 * @constant
 */
export const AllowedSubset_wholeSubtree: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AllowedSubset_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION wholeSubtree */
/**
 * @summary wholeSubtree
 * @constant
 */
export const wholeSubtree: number = AllowedSubset_wholeSubtree; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AllowedSubset */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AllowedSubset */

/* START_OF_SYMBOL_DEFINITION _decode_AllowedSubset */
export const _decode_AllowedSubset = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_AllowedSubset */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AllowedSubset */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AllowedSubset */

/* START_OF_SYMBOL_DEFINITION _encode_AllowedSubset */
export const _encode_AllowedSubset = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_AllowedSubset */

/* eslint-enable */
