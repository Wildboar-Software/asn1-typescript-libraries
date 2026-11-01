/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
const _enum_for_CharacterMatchTypes: {
    readonly characterExact: 0;
    readonly characterCaseIgnore: 1;
    readonly characterMapped: 2;
} = {
    characterExact: 0,
    characterCaseIgnore: 1,
    characterMapped: 2,
};

export
type _enum_for_CharacterMatchTypes = ENUMERATED;

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
 * ```
 * 
 * @enum {number}
 */
export
type CharacterMatchTypes = _enum_for_CharacterMatchTypes | ENUMERATED;

/**
 * @summary CharacterMatchTypes_characterExact
 * @constant
 * @type {number}
 */
export
const CharacterMatchTypes_characterExact: number = 0 satisfies CharacterMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterExact
 * @constant
 * @type {number}
 */
export
const characterExact: number = CharacterMatchTypes_characterExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterMatchTypes_characterCaseIgnore
 * @constant
 * @type {number}
 */
export
const CharacterMatchTypes_characterCaseIgnore: number = 1 satisfies CharacterMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCaseIgnore
 * @constant
 * @type {number}
 */
export
const characterCaseIgnore: number = CharacterMatchTypes_characterCaseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterMatchTypes_characterMapped
 * @constant
 * @type {number}
 */
export
const CharacterMatchTypes_characterMapped: number = 2 satisfies CharacterMatchTypes; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterMapped
 * @constant
 * @type {number}
 */
export
const characterMapped: number = CharacterMatchTypes_characterMapped; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CharacterMatchTypes: $.ASN1Decoder<CharacterMatchTypes> = $._decodeEnumerated;

export
const _encode_CharacterMatchTypes: $.ASN1Encoder<CharacterMatchTypes> = $._encodeEnumerated;

/* eslint-enable */
