/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_WordMatchTypes {
    wordExact = 0,
    wordTruncated = 1,
    wordPhonetic = 2,
    wordProviderDefined = 3,
}

/**
 * @summary WordMatchTypes
 * @description
 *
 * Control-attribute syntax for generalWordMatch. SINGLE VALUE; applies
 * to following components. Default wordExact. Extra words use the last
 * rule.
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
 * ```
 *
 * @enum {number}
 */
export type WordMatchTypes = _enum_for_WordMatchTypes | ENUMERATED;

/**
 * @summary WordMatchTypes_wordExact
 * @description
 *
 * Unchanged word. Default before first wordMatchType control.
 *
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordExact = _enum_for_WordMatchTypes.wordExact satisfies WordMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordExact
 * @description
 *
 * Unchanged word. Default before first wordMatchType control.
 *
 * @constant
 * @type {number}
 */
export const wordExact = WordMatchTypes_wordExact satisfies WordMatchTypes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordTruncated
 * @description
 *
 * Strip suffix down to implementation min length.
 *
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordTruncated = _enum_for_WordMatchTypes.wordTruncated satisfies WordMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordTruncated
 * @description
 *
 * Strip suffix down to implementation min length.
 *
 * @constant
 * @type {number}
 */
export const wordTruncated = WordMatchTypes_wordTruncated satisfies WordMatchTypes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordPhonetic
 * @description
 *
 * Implementation phonetic match.
 *
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordPhonetic = _enum_for_WordMatchTypes.wordPhonetic satisfies WordMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordPhonetic
 * @description
 *
 * Implementation phonetic match.
 *
 * @constant
 * @type {number}
 */
export const wordPhonetic = WordMatchTypes_wordPhonetic satisfies WordMatchTypes; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordProviderDefined
 * @description
 *
 * Implementation-defined.
 *
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordProviderDefined = _enum_for_WordMatchTypes.wordProviderDefined satisfies WordMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordProviderDefined
 * @description
 *
 * Implementation-defined.
 *
 * @constant
 * @type {number}
 */
export const wordProviderDefined = WordMatchTypes_wordProviderDefined satisfies WordMatchTypes; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_WordMatchTypes = $._decodeEnumerated;


export const _encode_WordMatchTypes = $._encodeEnumerated;


/* eslint-enable */
