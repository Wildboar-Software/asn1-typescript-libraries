/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_WordMatchTypes */
export enum _enum_for_WordMatchTypes {
    wordExact = 0,
    wordTruncated = 1,
    wordPhonetic = 2,
    wordProviderDefined = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes */
/**
 * @summary WordMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WordMatchTypes  ::=  ENUMERATED {
 *   wordExact           (0),
 *   wordTruncated       (1),
 *   wordPhonetic        (2),
 *   wordProviderDefined (3),
 *   ... }
 * ```@enum {number}
 */
export type WordMatchTypes = _enum_for_WordMatchTypes | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes_wordExact */
/**
 * @summary WordMatchTypes_wordExact
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordExact: WordMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchTypes_wordExact */

/* START_OF_SYMBOL_DEFINITION wordExact */
/**
 * @summary wordExact
 * @constant
 * @type {number}
 */
export const wordExact: WordMatchTypes = WordMatchTypes_wordExact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wordExact */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes_wordTruncated */
/**
 * @summary WordMatchTypes_wordTruncated
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordTruncated: WordMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchTypes_wordTruncated */

/* START_OF_SYMBOL_DEFINITION wordTruncated */
/**
 * @summary wordTruncated
 * @constant
 * @type {number}
 */
export const wordTruncated: WordMatchTypes = WordMatchTypes_wordTruncated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wordTruncated */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes_wordPhonetic */
/**
 * @summary WordMatchTypes_wordPhonetic
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordPhonetic: WordMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchTypes_wordPhonetic */

/* START_OF_SYMBOL_DEFINITION wordPhonetic */
/**
 * @summary wordPhonetic
 * @constant
 * @type {number}
 */
export const wordPhonetic: WordMatchTypes = WordMatchTypes_wordPhonetic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wordPhonetic */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes_wordProviderDefined */
/**
 * @summary WordMatchTypes_wordProviderDefined
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordProviderDefined: WordMatchTypes = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchTypes_wordProviderDefined */

/* START_OF_SYMBOL_DEFINITION wordProviderDefined */
/**
 * @summary wordProviderDefined
 * @constant
 * @type {number}
 */
export const wordProviderDefined: WordMatchTypes = WordMatchTypes_wordProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wordProviderDefined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WordMatchTypes */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _decode_WordMatchTypes */
export const _decode_WordMatchTypes = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WordMatchTypes */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _encode_WordMatchTypes */
export const _encode_WordMatchTypes = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_WordMatchTypes */

/* eslint-enable */
