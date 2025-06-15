/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_CharacterMatchTypes {
    characterExact = 0,
    characterCaseIgnore = 1,
    characterMapped = 2,
}

/**
 * @summary CharacterMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterMatchTypes  ::=  ENUMERATED {
 *   characterExact      (0),
 *   characterCaseIgnore (1),
 *   characterMapped     (2),
 *   ... }
 * ```@enum {number}
 */
export type CharacterMatchTypes = _enum_for_CharacterMatchTypes | ENUMERATED;

/**
 * @summary CharacterMatchTypes_characterExact
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterExact: CharacterMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterExact
 * @constant
 * @type {number}
 */
export const characterExact: CharacterMatchTypes = CharacterMatchTypes_characterExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterMatchTypes_characterCaseIgnore
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterCaseIgnore: CharacterMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCaseIgnore
 * @constant
 * @type {number}
 */
export const characterCaseIgnore: CharacterMatchTypes = CharacterMatchTypes_characterCaseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterMatchTypes_characterMapped
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterMapped: CharacterMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterMapped
 * @constant
 * @type {number}
 */
export const characterMapped: CharacterMatchTypes = CharacterMatchTypes_characterMapped; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_CharacterMatchTypes = $._decodeEnumerated;


export const _encode_CharacterMatchTypes = $._encodeEnumerated;


/* eslint-enable */
