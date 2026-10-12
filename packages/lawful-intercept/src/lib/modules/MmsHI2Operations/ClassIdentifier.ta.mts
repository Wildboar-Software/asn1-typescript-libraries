/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ClassIdentifier {
    personal = 0,
    advertisement = 1,
    informational = 2,
    auto = 3,
}

/**
 * @summary ClassIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClassIdentifier  ::=  ENUMERATED
 * {
 *     personal             (0),
 *     advertisement         (1),
 *     informational        (2),
 *     auto                (3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ClassIdentifier = _enum_for_ClassIdentifier | ENUMERATED;

/**
 * @summary ClassIdentifier_personal
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_personal: ClassIdentifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary personal
 * @constant
 * @type {number}
 */
export
const personal: ClassIdentifier = ClassIdentifier_personal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_advertisement
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_advertisement: ClassIdentifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary advertisement
 * @constant
 * @type {number}
 */
export
const advertisement: ClassIdentifier = ClassIdentifier_advertisement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_informational
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_informational: ClassIdentifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary informational
 * @constant
 * @type {number}
 */
export
const informational: ClassIdentifier = ClassIdentifier_informational; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ClassIdentifier_auto
 * @constant
 * @type {number}
 */
export
const ClassIdentifier_auto: ClassIdentifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auto
 * @constant
 * @type {number}
 */
export
const auto: ClassIdentifier = ClassIdentifier_auto; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ClassIdentifier: $.ASN1Decoder<ClassIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClassIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClassIdentifier (el: _Element): ClassIdentifier {
    if (!_cached_decoder_for_ClassIdentifier) { _cached_decoder_for_ClassIdentifier = $._decodeEnumerated; }
    return _cached_decoder_for_ClassIdentifier(el);
}

let _cached_encoder_for_ClassIdentifier: $.ASN1Encoder<ClassIdentifier> | null = null;

/**
 * @summary Encodes a(n) ClassIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ClassIdentifier (value: ClassIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClassIdentifier) { _cached_encoder_for_ClassIdentifier = $._encodeEnumerated; }
    return _cached_encoder_for_ClassIdentifier(value, elGetter);
}


/* eslint-enable */
