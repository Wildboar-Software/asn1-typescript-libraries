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

/**
 * @summary Decodes an ASN.1 element into a(n) PTCRegistrationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PTCRegistrationRequest = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PTCRegistrationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCRegistrationRequest, encoded as an ASN.1 Element.
 */
export const _encode_PTCRegistrationRequest = $._encodeEnumerated;


/* eslint-enable */
