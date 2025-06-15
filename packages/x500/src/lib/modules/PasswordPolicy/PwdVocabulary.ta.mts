/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION PwdVocabulary */
/**
 * @summary PwdVocabulary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdVocabulary  ::=   BIT STRING {
 *     noDictionaryWords   (0),
 *     noPersonNames       (1),
 *     noGeographicalNames (2) }
 * ```
 */
export type PwdVocabulary = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PwdVocabulary */

/* START_OF_SYMBOL_DEFINITION PwdVocabulary_noDictionaryWords */
/**
 * @summary PwdVocabulary_noDictionaryWords
 * @constant
 */
export const PwdVocabulary_noDictionaryWords: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PwdVocabulary_noDictionaryWords */

/* START_OF_SYMBOL_DEFINITION noDictionaryWords */
/**
 * @summary noDictionaryWords
 * @constant
 */
export const noDictionaryWords: number = PwdVocabulary_noDictionaryWords; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noDictionaryWords */

/* START_OF_SYMBOL_DEFINITION PwdVocabulary_noPersonNames */
/**
 * @summary PwdVocabulary_noPersonNames
 * @constant
 */
export const PwdVocabulary_noPersonNames: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PwdVocabulary_noPersonNames */

/* START_OF_SYMBOL_DEFINITION noPersonNames */
/**
 * @summary noPersonNames
 * @constant
 */
export const noPersonNames: number = PwdVocabulary_noPersonNames; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noPersonNames */

/* START_OF_SYMBOL_DEFINITION PwdVocabulary_noGeographicalNames */
/**
 * @summary PwdVocabulary_noGeographicalNames
 * @constant
 */
export const PwdVocabulary_noGeographicalNames: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PwdVocabulary_noGeographicalNames */

/* START_OF_SYMBOL_DEFINITION noGeographicalNames */
/**
 * @summary noGeographicalNames
 * @constant
 */
export const noGeographicalNames: number = PwdVocabulary_noGeographicalNames; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION noGeographicalNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdVocabulary */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdVocabulary */

/* START_OF_SYMBOL_DEFINITION _decode_PwdVocabulary */
export const _decode_PwdVocabulary = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_PwdVocabulary */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdVocabulary */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdVocabulary */

/* START_OF_SYMBOL_DEFINITION _encode_PwdVocabulary */
export const _encode_PwdVocabulary = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_PwdVocabulary */

/* eslint-enable */
