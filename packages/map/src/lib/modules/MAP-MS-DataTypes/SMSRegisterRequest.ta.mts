/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_SMSRegisterRequest {
    sms_registration_required = 0,
    sms_registration_not_preferred = 1,
    no_preference = 2,
}

/**
 * @summary SMSRegisterRequest
 * @description
 *
 * Whether SMS registration at the MME/SGSN is required, not preferred, or
 * unconstrained. Used in Update GPRS Location for MT-SMS registration.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 8.1.7 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSRegisterRequest ::=  ENUMERATED {
 *     sms-registration-required  (0),
 *     sms-registration-not-preferred  (1),
 *     no-preference  (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type SMSRegisterRequest = _enum_for_SMSRegisterRequest | ENUMERATED;

/**
 * @summary SMSRegisterRequest_sms_registration_required
 * @constant
 * @type {number}
 */
export
const SMSRegisterRequest_sms_registration_required: SMSRegisterRequest = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_registration_required
 * @constant
 * @type {number}
 */
export
const sms_registration_required: SMSRegisterRequest = SMSRegisterRequest_sms_registration_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSRegisterRequest_sms_registration_not_preferred
 * @constant
 * @type {number}
 */
export
const SMSRegisterRequest_sms_registration_not_preferred: SMSRegisterRequest = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sms_registration_not_preferred
 * @constant
 * @type {number}
 */
export
const sms_registration_not_preferred: SMSRegisterRequest = SMSRegisterRequest_sms_registration_not_preferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSRegisterRequest_no_preference
 * @constant
 * @type {number}
 */
export
const SMSRegisterRequest_no_preference: SMSRegisterRequest = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_preference
 * @constant
 * @type {number}
 */
export
const no_preference: SMSRegisterRequest = SMSRegisterRequest_no_preference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) SMSRegisterRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMSRegisterRequest = $._decodeEnumerated;

/**
 * @summary Encodes a(n) SMSRegisterRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSRegisterRequest, encoded as an ASN.1 Element.
 */
export const _encode_SMSRegisterRequest = $._encodeEnumerated;


/* eslint-enable */
