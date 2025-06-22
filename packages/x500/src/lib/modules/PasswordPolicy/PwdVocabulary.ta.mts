/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

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

/**
 * @summary PwdVocabulary_noDictionaryWords
 * @constant
 */
export const PwdVocabulary_noDictionaryWords: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary noDictionaryWords
 * @constant
 */
export const noDictionaryWords: number = PwdVocabulary_noDictionaryWords; /* SHORT_NAMED_BIT */

/**
 * @summary PwdVocabulary_noPersonNames
 * @constant
 */
export const PwdVocabulary_noPersonNames: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary noPersonNames
 * @constant
 */
export const noPersonNames: number = PwdVocabulary_noPersonNames; /* SHORT_NAMED_BIT */

/**
 * @summary PwdVocabulary_noGeographicalNames
 * @constant
 */
export const PwdVocabulary_noGeographicalNames: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary noGeographicalNames
 * @constant
 */
export const noGeographicalNames: number = PwdVocabulary_noGeographicalNames; /* SHORT_NAMED_BIT */


export const _decode_PwdVocabulary = $._decodeBitString;


export const _encode_PwdVocabulary = $._encodeBitString;


/* eslint-enable */
