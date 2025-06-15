/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_CharacterMatchTypes */
export enum _enum_for_CharacterMatchTypes {
    characterExact = 0,
    characterCaseIgnore = 1,
    characterMapped = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes */
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
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterExact */
/**
 * @summary CharacterMatchTypes_characterExact
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterExact: CharacterMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterExact */

/* START_OF_SYMBOL_DEFINITION characterExact */
/**
 * @summary characterExact
 * @constant
 * @type {number}
 */
export const characterExact: CharacterMatchTypes = CharacterMatchTypes_characterExact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION characterExact */

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterCaseIgnore */
/**
 * @summary CharacterMatchTypes_characterCaseIgnore
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterCaseIgnore: CharacterMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterCaseIgnore */

/* START_OF_SYMBOL_DEFINITION characterCaseIgnore */
/**
 * @summary characterCaseIgnore
 * @constant
 * @type {number}
 */
export const characterCaseIgnore: CharacterMatchTypes = CharacterMatchTypes_characterCaseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION characterCaseIgnore */

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterMapped */
/**
 * @summary CharacterMatchTypes_characterMapped
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterMapped: CharacterMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterMapped */

/* START_OF_SYMBOL_DEFINITION characterMapped */
/**
 * @summary characterMapped
 * @constant
 * @type {number}
 */
export const characterMapped: CharacterMatchTypes = CharacterMatchTypes_characterMapped; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION characterMapped */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterMatchTypes */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _decode_CharacterMatchTypes */
export const _decode_CharacterMatchTypes = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterMatchTypes */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _encode_CharacterMatchTypes */
export const _encode_CharacterMatchTypes = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_CharacterMatchTypes */

/* eslint-enable */
