/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCRegistrationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationRequest   ::=  ENUMERATED
 * {
 *     register(1),
 *     reRegister(2),
 *     deRegister(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCRegistrationRequest {
    register = 1,
    reRegister = 2,
    deRegister = 3,
}

/**
 * @summary PTCRegistrationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationRequest   ::=  ENUMERATED
 * {
 *     register(1),
 *     reRegister(2),
 *     deRegister(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCRegistrationRequest = _enum_for_PTCRegistrationRequest;

/**
 * @summary PTCRegistrationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationRequest   ::=  ENUMERATED
 * {
 *     register(1),
 *     reRegister(2),
 *     deRegister(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCRegistrationRequest = _enum_for_PTCRegistrationRequest;

/**
 * @summary PTCRegistrationRequest_register
 * @constant
 * @type {number}
 */
export
const PTCRegistrationRequest_register: PTCRegistrationRequest = PTCRegistrationRequest.register; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register
 * @constant
 * @type {number}
 */
export
const register: PTCRegistrationRequest = PTCRegistrationRequest.register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCRegistrationRequest_reRegister
 * @constant
 * @type {number}
 */
export
const PTCRegistrationRequest_reRegister: PTCRegistrationRequest = PTCRegistrationRequest.reRegister; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reRegister
 * @constant
 * @type {number}
 */
export
const reRegister: PTCRegistrationRequest = PTCRegistrationRequest.reRegister; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCRegistrationRequest_deRegister
 * @constant
 * @type {number}
 */
export
const PTCRegistrationRequest_deRegister: PTCRegistrationRequest = PTCRegistrationRequest.deRegister; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deRegister
 * @constant
 * @type {number}
 */
export
const deRegister: PTCRegistrationRequest = PTCRegistrationRequest.deRegister; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCRegistrationRequest: $.ASN1Decoder<PTCRegistrationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCRegistrationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCRegistrationRequest (el: _Element): PTCRegistrationRequest {
    if (!_cached_decoder_for_PTCRegistrationRequest) { _cached_decoder_for_PTCRegistrationRequest = $._decodeEnumerated; }
    return _cached_decoder_for_PTCRegistrationRequest(el);
}

let _cached_encoder_for_PTCRegistrationRequest: $.ASN1Encoder<PTCRegistrationRequest> | null = null;

/**
 * @summary Encodes a(n) PTCRegistrationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCRegistrationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PTCRegistrationRequest (value: PTCRegistrationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCRegistrationRequest) { _cached_encoder_for_PTCRegistrationRequest = $._encodeEnumerated; }
    return _cached_encoder_for_PTCRegistrationRequest(value, elGetter);
}


/* eslint-enable */
