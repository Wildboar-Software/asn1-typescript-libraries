/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EASEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASEventType  ::=  ENUMERATED
 * {
 *     eASAvailabilityChange(1),
 *     eASDynamicInfoChange(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EASEventType {
    eASAvailabilityChange = 1,
    eASDynamicInfoChange = 2,
}

/**
 * @summary EASEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASEventType  ::=  ENUMERATED
 * {
 *     eASAvailabilityChange(1),
 *     eASDynamicInfoChange(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EASEventType = _enum_for_EASEventType;

/**
 * @summary EASEventType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASEventType  ::=  ENUMERATED
 * {
 *     eASAvailabilityChange(1),
 *     eASDynamicInfoChange(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EASEventType = _enum_for_EASEventType;

/**
 * @summary EASEventType_eASAvailabilityChange
 * @constant
 * @type {number}
 */
export
const EASEventType_eASAvailabilityChange: EASEventType = EASEventType.eASAvailabilityChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASAvailabilityChange
 * @constant
 * @type {number}
 */
export
const eASAvailabilityChange: EASEventType = EASEventType.eASAvailabilityChange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EASEventType_eASDynamicInfoChange
 * @constant
 * @type {number}
 */
export
const EASEventType_eASDynamicInfoChange: EASEventType = EASEventType.eASDynamicInfoChange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eASDynamicInfoChange
 * @constant
 * @type {number}
 */
export
const eASDynamicInfoChange: EASEventType = EASEventType.eASDynamicInfoChange; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EASEventType: $.ASN1Decoder<EASEventType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASEventType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASEventType (el: _Element): EASEventType {
    if (!_cached_decoder_for_EASEventType) { _cached_decoder_for_EASEventType = $._decodeEnumerated; }
    return _cached_decoder_for_EASEventType(el);
}

let _cached_encoder_for_EASEventType: $.ASN1Encoder<EASEventType> | null = null;

/**
 * @summary Encodes a(n) EASEventType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASEventType, encoded as an ASN.1 Element.
 */
export
function _encode_EASEventType (value: EASEventType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASEventType) { _cached_encoder_for_EASEventType = $._encodeEnumerated; }
    return _cached_encoder_for_EASEventType(value, elGetter);
}


/* eslint-enable */
