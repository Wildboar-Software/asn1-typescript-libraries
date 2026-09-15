/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary RequestTypes
 * @description
 *
 * System services to register for (Table 14-4). Registration
 * services themselves are CF→SF only; the registered services
 * may be bi-directional (ECMA-269 §6.6.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestTypes  ::=  BIT STRING
 * {     systemStatus                 ( 0),
 *     requestSystemStatus             ( 1),
 *     switchingFunctionCapsChanged         ( 2),
 *     switchingFunctionDevicesChanged     ( 3) }
 * ```
 */
export
type RequestTypes = BIT_STRING;

/**
 * @summary RequestTypes_systemStatus
 * @constant
 */
export
const RequestTypes_systemStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary systemStatus
 * @constant
 */
export
const systemStatus: number = RequestTypes_systemStatus; /* SHORT_NAMED_BIT */

/**
 * @summary RequestTypes_requestSystemStatus
 * @constant
 */
export
const RequestTypes_requestSystemStatus: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary requestSystemStatus
 * @constant
 */
export
const requestSystemStatus: number = RequestTypes_requestSystemStatus; /* SHORT_NAMED_BIT */

/**
 * @summary RequestTypes_switchingFunctionCapsChanged
 * @constant
 */
export
const RequestTypes_switchingFunctionCapsChanged: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionCapsChanged
 * @constant
 */
export
const switchingFunctionCapsChanged: number = RequestTypes_switchingFunctionCapsChanged; /* SHORT_NAMED_BIT */

/**
 * @summary RequestTypes_switchingFunctionDevicesChanged
 * @constant
 */
export
const RequestTypes_switchingFunctionDevicesChanged: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionDevicesChanged
 * @constant
 */
export
const switchingFunctionDevicesChanged: number = RequestTypes_switchingFunctionDevicesChanged; /* SHORT_NAMED_BIT */

let _cached_decoder_for_RequestTypes: $.ASN1Decoder<RequestTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestTypes (el: _Element): RequestTypes {
    if (!_cached_decoder_for_RequestTypes) { _cached_decoder_for_RequestTypes = $._decodeBitString; }
    return _cached_decoder_for_RequestTypes(el);
}

let _cached_encoder_for_RequestTypes: $.ASN1Encoder<RequestTypes> | null = null;

/**
 * @summary Encodes a(n) RequestTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestTypes, encoded as an ASN.1 Element.
 */
export
function _encode_RequestTypes (value: RequestTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestTypes) { _cached_encoder_for_RequestTypes = $._encodeBitString; }
    return _cached_encoder_for_RequestTypes(value, elGetter);
}


/* eslint-enable */
