/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AccessType {
    ePS_Unicast = 1,
    ePS_Multicast = 2,
}

/**
 * @summary AccessType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessType  ::=  ENUMERATED
 * {
 *         ePS-Unicast   (1),
 *         ePS-Multicast (2),     
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessType = _enum_for_AccessType | ENUMERATED;

/**
 * @summary AccessType_ePS_Unicast
 * @constant
 * @type {number}
 */
export
const AccessType_ePS_Unicast: AccessType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePS_Unicast
 * @constant
 * @type {number}
 */
export
const ePS_Unicast: AccessType = AccessType_ePS_Unicast; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessType_ePS_Multicast
 * @constant
 * @type {number}
 */
export
const AccessType_ePS_Multicast: AccessType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ePS_Multicast
 * @constant
 * @type {number}
 */
export
const ePS_Multicast: AccessType = AccessType_ePS_Multicast; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AccessType: $.ASN1Decoder<AccessType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessType (el: _Element): AccessType {
    if (!_cached_decoder_for_AccessType) { _cached_decoder_for_AccessType = $._decodeEnumerated; }
    return _cached_decoder_for_AccessType(el);
}

let _cached_encoder_for_AccessType: $.ASN1Encoder<AccessType> | null = null;

/**
 * @summary Encodes a(n) AccessType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessType, encoded as an ASN.1 Element.
 */
export
function _encode_AccessType (value: AccessType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessType) { _cached_encoder_for_AccessType = $._encodeEnumerated; }
    return _cached_encoder_for_AccessType(value, elGetter);
}


/* eslint-enable */
