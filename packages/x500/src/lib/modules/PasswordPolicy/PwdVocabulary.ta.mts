/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PwdVocabulary
 * @description
 *
 * A **set** bit forbids that class as the **whole** password. Unset bits
 * impose no restriction. All-zero / empty ⇒ no vocabulary constraint.
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
 * @description
 *
 * SET ⇒ this class is forbidden as the **whole** password (not as a
 * substring). Unset ⇒ no restriction.
 *
 * @constant
 */
export const PwdVocabulary_noDictionaryWords: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary noDictionaryWords
 * @description
 *
 * SET ⇒ this class is forbidden as the **whole** password (not as a
 * substring). Unset ⇒ no restriction.
 *
 * @constant
 */
export const noDictionaryWords: number = PwdVocabulary_noDictionaryWords; /* SHORT_NAMED_BIT */

/**
 * @summary PwdVocabulary_noPersonNames
 * @description
 *
 * SET ⇒ this class is forbidden as the **whole** password (not as a
 * substring). Unset ⇒ no restriction.
 *
 * @constant
 */
export const PwdVocabulary_noPersonNames: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary noPersonNames
 * @description
 *
 * SET ⇒ this class is forbidden as the **whole** password (not as a
 * substring). Unset ⇒ no restriction.
 *
 * @constant
 */
export const noPersonNames: number = PwdVocabulary_noPersonNames; /* SHORT_NAMED_BIT */

/**
 * @summary PwdVocabulary_noGeographicalNames
 * @description
 *
 * SET ⇒ this class is forbidden as the **whole** password (not as a
 * substring). Unset ⇒ no restriction.
 *
 * @constant
 */
export const PwdVocabulary_noGeographicalNames: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary noGeographicalNames
 * @description
 *
 * SET ⇒ this class is forbidden as the **whole** password (not as a
 * substring). Unset ⇒ no restriction.
 *
 * @constant
 */
export const noGeographicalNames: number = PwdVocabulary_noGeographicalNames; /* SHORT_NAMED_BIT */


export const _decode_PwdVocabulary = $._decodeBitString;


export const _encode_PwdVocabulary = $._encodeBitString;


/* eslint-enable */
