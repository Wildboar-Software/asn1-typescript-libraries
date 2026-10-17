/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCRegistrationRequest
 * @description
 * 
 * Identifies the type of registration request (register, re-register, or
 * de-register).
 *
 * 3GPP TS 33.128, clause 7.5.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies the type of registration request (register, re-register, or
 * de-register).
 *
 * 3GPP TS 33.128, clause 7.5.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies the type of registration request (register, re-register, or
 * de-register).
 *
 * 3GPP TS 33.128, clause 7.5.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
export const _decode_PTCRegistrationRequest: $.ASN1Decoder<PTCRegistrationRequest> = $._decodeEnumerated;
export const _encode_PTCRegistrationRequest: $.ASN1Encoder<PTCRegistrationRequest> = $._encodeEnumerated;


/* eslint-enable */
