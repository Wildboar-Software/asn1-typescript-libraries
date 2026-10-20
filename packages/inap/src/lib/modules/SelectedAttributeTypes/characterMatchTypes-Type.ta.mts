/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary characterMatchTypes_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * characterMatchTypes-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_characterMatchTypes_Type {
    characterExact = 0,
    characterCaseIgnore = 1,
    characterMapped = 2,
}

/**
 * @summary characterMatchTypes_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * characterMatchTypes-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type characterMatchTypes_Type = _enum_for_characterMatchTypes_Type;

/**
 * @summary characterMatchTypes_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * characterMatchTypes-Type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const characterMatchTypes_Type = _enum_for_characterMatchTypes_Type;

/**
 * @summary characterMatchTypes_Type_characterExact
 * @constant
 * @type {number}
 */
export
const characterMatchTypes_Type_characterExact: characterMatchTypes_Type = characterMatchTypes_Type.characterExact; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterExact
 * @constant
 * @type {number}
 */
export
const characterExact: characterMatchTypes_Type = characterMatchTypes_Type.characterExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterMatchTypes_Type_characterCaseIgnore
 * @constant
 * @type {number}
 */
export
const characterMatchTypes_Type_characterCaseIgnore: characterMatchTypes_Type = characterMatchTypes_Type.characterCaseIgnore; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCaseIgnore
 * @constant
 * @type {number}
 */
export
const characterCaseIgnore: characterMatchTypes_Type = characterMatchTypes_Type.characterCaseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterMatchTypes_Type_characterMapped
 * @constant
 * @type {number}
 */
export
const characterMatchTypes_Type_characterMapped: characterMatchTypes_Type = characterMatchTypes_Type.characterMapped; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterMapped
 * @constant
 * @type {number}
 */
export
const characterMapped: characterMatchTypes_Type = characterMatchTypes_Type.characterMapped; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_characterMatchTypes_Type: $.ASN1Decoder<characterMatchTypes_Type> = $._decodeEnumerated;

export
const _encode_characterMatchTypes_Type: $.ASN1Encoder<characterMatchTypes_Type> = $._encodeEnumerated;

/* eslint-enable */
