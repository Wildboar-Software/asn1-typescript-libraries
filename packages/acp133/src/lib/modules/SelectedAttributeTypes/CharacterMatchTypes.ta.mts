/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CharacterMatchTypes {
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
const CharacterMatchTypes_characterExact: CharacterMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterExact
 * @constant
 * @type {number}
 */
export
const characterExact: CharacterMatchTypes = CharacterMatchTypes_characterExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterMatchTypes_characterCaseIgnore
 * @constant
 * @type {number}
 */
export
const CharacterMatchTypes_characterCaseIgnore: CharacterMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCaseIgnore
 * @constant
 * @type {number}
 */
export
const characterCaseIgnore: CharacterMatchTypes = CharacterMatchTypes_characterCaseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CharacterMatchTypes_characterMapped
 * @constant
 * @type {number}
 */
export
const CharacterMatchTypes_characterMapped: CharacterMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterMapped
 * @constant
 * @type {number}
 */
export
const characterMapped: CharacterMatchTypes = CharacterMatchTypes_characterMapped; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CharacterMatchTypes: $.ASN1Decoder<CharacterMatchTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CharacterMatchTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CharacterMatchTypes (el: _Element): CharacterMatchTypes {
    if (!_cached_decoder_for_CharacterMatchTypes) { _cached_decoder_for_CharacterMatchTypes = $._decodeEnumerated; }
    return _cached_decoder_for_CharacterMatchTypes(el);
}

let _cached_encoder_for_CharacterMatchTypes: $.ASN1Encoder<CharacterMatchTypes> | null = null;

/**
 * @summary Encodes a(n) CharacterMatchTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterMatchTypes, encoded as an ASN.1 Element.
 */
export
function _encode_CharacterMatchTypes (value: CharacterMatchTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CharacterMatchTypes) { _cached_encoder_for_CharacterMatchTypes = $._encodeEnumerated; }
    return _cached_encoder_for_CharacterMatchTypes(value, elGetter);
}


/* eslint-enable */
