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
 * Success or failure of a PTC registration. Mandatory on the registration
 * report (table 17.2.1), together with the failure reason when registration
 * fails. Clause 17.1.5.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * PTC registration succeeded. Mandatory outcome on the registration report
 * (table 17.2.1).
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_success = _enum_for_RegistrationOutcome.success satisfies RegistrationOutcome; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @description
 * 
 * PTC registration succeeded (table 17.2.1).
 * @constant
 * @type {number}
 */
export
const success = RegistrationOutcome_success satisfies RegistrationOutcome; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationOutcome_failure
 * @description
 * 
 * PTC registration failed. Table 17.2.1 also requires the failure reason with
 * this outcome. The module does not carry that reason in this enumeration.
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_failure = _enum_for_RegistrationOutcome.failure satisfies RegistrationOutcome; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @description
 * 
 * PTC registration failed (table 17.2.1).
 * @constant
 * @type {number}
 */
export
const failure = RegistrationOutcome_failure satisfies RegistrationOutcome; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RegistrationOutcome: $.ASN1Decoder<RegistrationOutcome> = $._decodeEnumerated;
export const _encode_RegistrationOutcome: $.ASN1Encoder<RegistrationOutcome> = $._encodeEnumerated;


/* eslint-enable */
