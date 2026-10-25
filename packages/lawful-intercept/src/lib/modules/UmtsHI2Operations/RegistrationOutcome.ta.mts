/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_RegistrationOutcome {
    success = 0,
    failure = 1,
}

/**
 * @summary RegistrationOutcome
 * @description
 * 
 * Success or failure of a PTC registration, re-registration, or deregistration.
 * Mandatory on the PTC registration report. The clause 17.1.5 mapping also says
 * the outcome identifies the failure reason; this enumeration only
 * distinguishes success from failure.
 * 
 * 3GPP TS 33.108, clause 17.2.1, table 17.1.5, and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistrationOutcome         ::=  ENUMERATED
 * {
 *     success        (0),
 *     failure        (1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RegistrationOutcome = _enum_for_RegistrationOutcome | ENUMERATED;

/**
 * @summary RegistrationOutcome_success
 * @description
 * 
 * The PTC registration, re-registration, or deregistration succeeded. Mandatory
 * outcome on the registration report. 3GPP TS 33.108, clause 17.2.1.
 * 
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_success = _enum_for_RegistrationOutcome.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @description
 * 
 * PTC registration succeeded (3GPP TS 33.108, clause 17.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const success = RegistrationOutcome_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationOutcome_failure
 * @description
 * 
 * The PTC registration, re-registration, or deregistration failed. Mandatory
 * outcome on the registration report. The mapping mentions a failure reason;
 * this value only says the attempt failed. 3GPP TS 33.108, clause 17.2.1 and
 * table 17.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_failure = _enum_for_RegistrationOutcome.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @description
 * 
 * PTC registration failed (3GPP TS 33.108, clause 17.2.1).
 * 
 * @constant
 * @type {number}
 */
export
const failure = RegistrationOutcome_failure; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RegistrationOutcome: $.ASN1Decoder<RegistrationOutcome> = $._decodeEnumerated;
export const _encode_RegistrationOutcome: $.ASN1Encoder<RegistrationOutcome> = $._encodeEnumerated;


/* eslint-enable */
