/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TypeOfBearer {
    defaultBearer = 1,
    dedicatedBearer = 2,
}

/**
 * @summary TypeOfBearer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeOfBearer  ::=  ENUMERATED
 * {
 *  defaultBearer (1),
 *  dedicatedBearer (2),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TypeOfBearer = _enum_for_TypeOfBearer | ENUMERATED;

/**
 * @summary TypeOfBearer_defaultBearer
 * @constant
 * @type {number}
 */
export
const TypeOfBearer_defaultBearer: TypeOfBearer = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary defaultBearer
 * @constant
 * @type {number}
 */
export
const defaultBearer: TypeOfBearer = TypeOfBearer_defaultBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TypeOfBearer_dedicatedBearer
 * @constant
 * @type {number}
 */
export
const TypeOfBearer_dedicatedBearer: TypeOfBearer = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dedicatedBearer
 * @constant
 * @type {number}
 */
export
const dedicatedBearer: TypeOfBearer = TypeOfBearer_dedicatedBearer; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TypeOfBearer: $.ASN1Decoder<TypeOfBearer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfBearer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeOfBearer (el: _Element): TypeOfBearer {
    if (!_cached_decoder_for_TypeOfBearer) { _cached_decoder_for_TypeOfBearer = $._decodeEnumerated; }
    return _cached_decoder_for_TypeOfBearer(el);
}

let _cached_encoder_for_TypeOfBearer: $.ASN1Encoder<TypeOfBearer> | null = null;

/**
 * @summary Encodes a(n) TypeOfBearer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfBearer, encoded as an ASN.1 Element.
 */
export
function _encode_TypeOfBearer (value: TypeOfBearer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeOfBearer) { _cached_encoder_for_TypeOfBearer = $._encodeEnumerated; }
    return _cached_encoder_for_TypeOfBearer(value, elGetter);
}


/* eslint-enable */
