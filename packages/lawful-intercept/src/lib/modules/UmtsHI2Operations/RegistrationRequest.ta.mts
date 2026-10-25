/* eslint-disable */
import {
    type ENUMERATED
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
 * Whether the target registered, re-registered, or deregistered for PTC.
 * Mandatory on the PTC registration report, successful or unsuccessful.
 * 
 * 3GPP TS 33.108, clause 17.2.1 and annex B.3.
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
 * The target requested initial PTC registration. The registration report is
 * sent whether the attempt succeeds or fails. 3GPP TS 33.108, clause 17.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_register = _enum_for_RegistrationRequest.register; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register
 * @description
 * 
 * Initial PTC registration request (3GPP TS 33.108, clause 17.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const register = RegistrationRequest_register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationRequest_re_register
 * @description
 * 
 * The target requested PTC re-registration. The registration report is sent
 * whether the attempt succeeds or fails. 3GPP TS 33.108, clause 17.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_re_register = _enum_for_RegistrationRequest.re_register; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary re_register
 * @description
 * 
 * PTC re-registration request (3GPP TS 33.108, clause 17.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const re_register = RegistrationRequest_re_register; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationRequest_de_register
 * @description
 * 
 * The target requested PTC deregistration. The registration report is sent
 * whether the attempt succeeds or fails. 3GPP TS 33.108, clause 17.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const RegistrationRequest_de_register = _enum_for_RegistrationRequest.de_register; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary de_register
 * @description
 * 
 * PTC deregistration request (3GPP TS 33.108, clause 17.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const de_register = RegistrationRequest_de_register; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RegistrationRequest: $.ASN1Decoder<RegistrationRequest> = $._decodeEnumerated;
export const _encode_RegistrationRequest: $.ASN1Encoder<RegistrationRequest> = $._encodeEnumerated;


/* eslint-enable */
