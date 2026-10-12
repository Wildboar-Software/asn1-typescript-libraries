/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CheckType {
    hash = 1,
    signature = 2,
}

/**
 * @summary CheckType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CheckType  ::=  ENUMERATED
 * {
 *     hash(1),
 *         -- hash value
 *     signature(2),
 *         -- DSS/DSA signature
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CheckType = _enum_for_CheckType | ENUMERATED;

/**
 * @summary CheckType_hash
 * @constant
 * @type {number}
 */
export
const CheckType_hash: CheckType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hash
 * @constant
 * @type {number}
 */
export
const hash: CheckType = CheckType_hash; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CheckType_signature
 * @constant
 * @type {number}
 */
export
const CheckType_signature: CheckType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary signature
 * @constant
 * @type {number}
 */
export
const signature: CheckType = CheckType_signature; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CheckType: $.ASN1Decoder<CheckType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CheckType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CheckType (el: _Element): CheckType {
    if (!_cached_decoder_for_CheckType) { _cached_decoder_for_CheckType = $._decodeEnumerated; }
    return _cached_decoder_for_CheckType(el);
}

let _cached_encoder_for_CheckType: $.ASN1Encoder<CheckType> | null = null;

/**
 * @summary Encodes a(n) CheckType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CheckType, encoded as an ASN.1 Element.
 */
export
function _encode_CheckType (value: CheckType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CheckType) { _cached_encoder_for_CheckType = $._encodeEnumerated; }
    return _cached_encoder_for_CheckType(value, elGetter);
}


/* eslint-enable */
