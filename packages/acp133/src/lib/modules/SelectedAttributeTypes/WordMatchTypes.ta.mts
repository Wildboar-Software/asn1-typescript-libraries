/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_WordMatchTypes {
    wordExact = 0,
    wordTruncated = 1,
    wordPhonetic = 2,
    wordProviderDefined = 3,
}

/**
 * @summary WordMatchTypes
 * @description
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
export
type WordMatchTypes = _enum_for_WordMatchTypes | ENUMERATED;

/**
 * @summary WordMatchTypes_wordExact
 * @constant
 * @type {number}
 */
export
const WordMatchTypes_wordExact: WordMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordExact
 * @constant
 * @type {number}
 */
export
const wordExact: WordMatchTypes = WordMatchTypes_wordExact; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordTruncated
 * @constant
 * @type {number}
 */
export
const WordMatchTypes_wordTruncated: WordMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordTruncated
 * @constant
 * @type {number}
 */
export
const wordTruncated: WordMatchTypes = WordMatchTypes_wordTruncated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordPhonetic
 * @constant
 * @type {number}
 */
export
const WordMatchTypes_wordPhonetic: WordMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordPhonetic
 * @constant
 * @type {number}
 */
export
const wordPhonetic: WordMatchTypes = WordMatchTypes_wordPhonetic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WordMatchTypes_wordProviderDefined
 * @constant
 * @type {number}
 */
export
const WordMatchTypes_wordProviderDefined: WordMatchTypes = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wordProviderDefined
 * @constant
 * @type {number}
 */
export
const wordProviderDefined: WordMatchTypes = WordMatchTypes_wordProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_WordMatchTypes: $.ASN1Decoder<WordMatchTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WordMatchTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WordMatchTypes (el: _Element): WordMatchTypes {
    if (!_cached_decoder_for_WordMatchTypes) { _cached_decoder_for_WordMatchTypes = $._decodeEnumerated; }
    return _cached_decoder_for_WordMatchTypes(el);
}

let _cached_encoder_for_WordMatchTypes: $.ASN1Encoder<WordMatchTypes> | null = null;

/**
 * @summary Encodes a(n) WordMatchTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WordMatchTypes, encoded as an ASN.1 Element.
 */
export
function _encode_WordMatchTypes (value: WordMatchTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WordMatchTypes) { _cached_encoder_for_WordMatchTypes = $._encodeEnumerated; }
    return _cached_encoder_for_WordMatchTypes(value, elGetter);
}


/* eslint-enable */
