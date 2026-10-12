/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCListManagementFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCListManagementFailure {
    requestUnsuccessful = 1,
    requestUnknown = 2,
}

/**
 * @summary PTCListManagementFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCListManagementFailure = _enum_for_PTCListManagementFailure;

/**
 * @summary PTCListManagementFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCListManagementFailure = _enum_for_PTCListManagementFailure;

/**
 * @summary PTCListManagementFailure_requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const PTCListManagementFailure_requestUnsuccessful: PTCListManagementFailure = PTCListManagementFailure.requestUnsuccessful; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const requestUnsuccessful: PTCListManagementFailure = PTCListManagementFailure.requestUnsuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementFailure_requestUnknown
 * @constant
 * @type {number}
 */
export
const PTCListManagementFailure_requestUnknown: PTCListManagementFailure = PTCListManagementFailure.requestUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnknown
 * @constant
 * @type {number}
 */
export
const requestUnknown: PTCListManagementFailure = PTCListManagementFailure.requestUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCListManagementFailure: $.ASN1Decoder<PTCListManagementFailure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCListManagementFailure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCListManagementFailure (el: _Element): PTCListManagementFailure {
    if (!_cached_decoder_for_PTCListManagementFailure) { _cached_decoder_for_PTCListManagementFailure = $._decodeEnumerated; }
    return _cached_decoder_for_PTCListManagementFailure(el);
}

let _cached_encoder_for_PTCListManagementFailure: $.ASN1Encoder<PTCListManagementFailure> | null = null;

/**
 * @summary Encodes a(n) PTCListManagementFailure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCListManagementFailure, encoded as an ASN.1 Element.
 */
export
function _encode_PTCListManagementFailure (value: PTCListManagementFailure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCListManagementFailure) { _cached_encoder_for_PTCListManagementFailure = $._encodeEnumerated; }
    return _cached_encoder_for_PTCListManagementFailure(value, elGetter);
}


/* eslint-enable */
