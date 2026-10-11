/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NonLocalID {
    local = 1,
    nonLocal = 2,
}

/**
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NonLocalID = _enum_for_NonLocalID;

/**
 * @summary NonLocalID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NonLocalID  ::=  ENUMERATED
 * {
 *     local(1),
 *     nonLocal(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NonLocalID = _enum_for_NonLocalID;

/**
 * @summary NonLocalID_local
 * @constant
 * @type {number}
 */
export
const NonLocalID_local: NonLocalID = NonLocalID.local; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary local
 * @constant
 * @type {number}
 */
export
const local: NonLocalID = NonLocalID.local; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NonLocalID_nonLocal
 * @constant
 * @type {number}
 */
export
const NonLocalID_nonLocal: NonLocalID = NonLocalID.nonLocal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonLocal
 * @constant
 * @type {number}
 */
export
const nonLocal: NonLocalID = NonLocalID.nonLocal; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NonLocalID: $.ASN1Decoder<NonLocalID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonLocalID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NonLocalID (el: _Element): NonLocalID {
    if (!_cached_decoder_for_NonLocalID) { _cached_decoder_for_NonLocalID = $._decodeEnumerated; }
    return _cached_decoder_for_NonLocalID(el);
}

let _cached_encoder_for_NonLocalID: $.ASN1Encoder<NonLocalID> | null = null;

/**
 * @summary Encodes a(n) NonLocalID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonLocalID, encoded as an ASN.1 Element.
 */
export
function _encode_NonLocalID (value: NonLocalID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NonLocalID) { _cached_encoder_for_NonLocalID = $._encodeEnumerated; }
    return _cached_encoder_for_NonLocalID(value, elGetter);
}


/* eslint-enable */
