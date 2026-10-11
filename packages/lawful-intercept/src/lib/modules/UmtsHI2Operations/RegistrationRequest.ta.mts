/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_RegistrationRequest {
    register = 1,
    re_register = 2,
    de_register = 3,
}

/**
 * @summary RegistrationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationRequest         ::=  ENUMERATED
 * {
 *     register        (1),
 *     re-register        (2),
 *     de-register        (3),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RegistrationRequest = _enum_for_RegistrationRequest | ENUMERATED;

/**
 * @summary RegistrationRequest_register
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_register: RegistrationRequest = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register
 * @constant
 * @type {number}
 */
export
const register: RegistrationRequest = RegistrationRequest_register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationRequest_re_register
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_re_register: RegistrationRequest = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary re_register
 * @constant
 * @type {number}
 */
export
const re_register: RegistrationRequest = RegistrationRequest_re_register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationRequest_de_register
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_de_register: RegistrationRequest = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary de_register
 * @constant
 * @type {number}
 */
export
const de_register: RegistrationRequest = RegistrationRequest_de_register; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_RegistrationRequest: $.ASN1Decoder<RegistrationRequest> = $._decodeEnumerated;

export const _encode_RegistrationRequest: $.ASN1Encoder<RegistrationRequest> = $._encodeEnumerated;


/* eslint-enable */
