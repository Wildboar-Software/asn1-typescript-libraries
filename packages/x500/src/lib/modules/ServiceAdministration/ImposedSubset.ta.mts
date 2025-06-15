/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_ImposedSubset */
export enum _enum_for_ImposedSubset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ImposedSubset */

/* START_OF_SYMBOL_DEFINITION ImposedSubset */
/**
 * @summary ImposedSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImposedSubset  ::=  ENUMERATED {baseObject(0), oneLevel(1), wholeSubtree(2),...}
 * ```@enum {number}
 */
export type ImposedSubset = _enum_for_ImposedSubset | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ImposedSubset */

/* START_OF_SYMBOL_DEFINITION ImposedSubset_baseObject */
/**
 * @summary ImposedSubset_baseObject
 * @constant
 * @type {number}
 */
export const ImposedSubset_baseObject: ImposedSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ImposedSubset_baseObject */

/* START_OF_SYMBOL_DEFINITION baseObject */
/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export const baseObject: ImposedSubset = ImposedSubset_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION baseObject */

/* START_OF_SYMBOL_DEFINITION ImposedSubset_oneLevel */
/**
 * @summary ImposedSubset_oneLevel
 * @constant
 * @type {number}
 */
export const ImposedSubset_oneLevel: ImposedSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ImposedSubset_oneLevel */

/* START_OF_SYMBOL_DEFINITION oneLevel */
/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: ImposedSubset = ImposedSubset_oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION oneLevel */

/* START_OF_SYMBOL_DEFINITION ImposedSubset_wholeSubtree */
/**
 * @summary ImposedSubset_wholeSubtree
 * @constant
 * @type {number}
 */
export const ImposedSubset_wholeSubtree: ImposedSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ImposedSubset_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION wholeSubtree */
/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: ImposedSubset = ImposedSubset_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ImposedSubset */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ImposedSubset */

/* START_OF_SYMBOL_DEFINITION _decode_ImposedSubset */
export const _decode_ImposedSubset = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ImposedSubset */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ImposedSubset */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ImposedSubset */

/* START_OF_SYMBOL_DEFINITION _encode_ImposedSubset */
export const _encode_ImposedSubset = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ImposedSubset */

/* eslint-enable */
