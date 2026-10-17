/* eslint-disable */
import {
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
 * Whether a PTC registration report is a register, a re-register, or a
 * deregister. Mandatory on table 17.2.1. The report is sent for each of those
 * requests, successful or unsuccessful (clause 17.2.1).
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * @description
 * 
 * Initial PTC registration. The registration report is sent whether or not it
 * succeeds (clause 17.2.1).
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_register: RegistrationRequest = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register
 * @description
 * 
 * PTC register request (clause 17.2.1).
 * @constant
 * @type {number}
 */
export
const register: RegistrationRequest = RegistrationRequest_register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationRequest_re_register
 * @description
 * 
 * PTC re-registration. Reported whether or not it succeeds (clause 17.2.1).
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_re_register: RegistrationRequest = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary re_register
 * @description
 * 
 * PTC re-register request (clause 17.2.1).
 * @constant
 * @type {number}
 */
export
const re_register: RegistrationRequest = RegistrationRequest_re_register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationRequest_de_register
 * @description
 * 
 * PTC deregistration. Reported whether or not it succeeds (clause 17.2.1).
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_de_register: RegistrationRequest = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary de_register
 * @description
 * 
 * PTC deregister request (clause 17.2.1).
 * @constant
 * @type {number}
 */
export
const de_register: RegistrationRequest = RegistrationRequest_de_register; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RegistrationRequest: $.ASN1Decoder<RegistrationRequest> = $._decodeEnumerated;
export const _encode_RegistrationRequest: $.ASN1Encoder<RegistrationRequest> = $._encodeEnumerated;


/* eslint-enable */
