/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_CharacterMatchTypes {
    characterExact = 0,
    characterCaseIgnore = 1,
    characterMapped = 2,
}

/**
 * @summary CharacterMatchTypes
 * @description
 *
 * Control-attribute syntax for generalWordMatch. SINGLE VALUE; applies
 * to following initial/any/final. Default characterExact
 * (characterCaseIgnore if the attribute's equality matching rule is
 * caseIgnoreMatch). Extra words use the last rule.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterMatchTypes  ::=  ENUMERATED {
 *   characterExact      (0),
 *   characterCaseIgnore (1),
 *   characterMapped     (2),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type CharacterMatchTypes = _enum_for_CharacterMatchTypes | ENUMERATED;

/**
 * @summary CharacterMatchTypes_characterExact
 * @description
 *
 * Characters identical. Default unless attr equality is caseIgnoreMatch.
 *
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterExact = _enum_for_CharacterMatchTypes.characterExact; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterExact
 * @description
 *
 * Characters identical. Default unless attr equality is caseIgnoreMatch.
 *
 * @constant
 * @type {number}
 */
export const characterExact = CharacterMatchTypes_characterExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterMatchTypes_characterCaseIgnore
 * @description
 *
 * Ignore case. Default if attr equality is caseIgnoreMatch.
 *
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterCaseIgnore = _enum_for_CharacterMatchTypes.characterCaseIgnore; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCaseIgnore
 * @description
 *
 * Ignore case. Default if attr equality is caseIgnoreMatch.
 *
 * @constant
 * @type {number}
 */
export const characterCaseIgnore = CharacterMatchTypes_characterCaseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterMatchTypes_characterMapped
 * @description
 *
 * Implementation table (T.51 national → A–Z0–9; may map sequences,
 * e.g. ue → u-umlaut).
 *
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterMapped = _enum_for_CharacterMatchTypes.characterMapped; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterMapped
 * @description
 *
 * Implementation table (T.51 national → A–Z0–9; may map sequences,
 * e.g. ue → u-umlaut).
 *
 * @constant
 * @type {number}
 */
export const characterMapped = CharacterMatchTypes_characterMapped; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CharacterMatchTypes = $._decodeEnumerated;


export const _encode_CharacterMatchTypes = $._encodeEnumerated;


/* eslint-enable */
