/* eslint-disable */
import {
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_success: RegistrationOutcome = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: RegistrationOutcome = RegistrationOutcome_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RegistrationOutcome_failure
 * @constant
 * @type {number}
 */
export
const RegistrationOutcome_failure: RegistrationOutcome = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: RegistrationOutcome = RegistrationOutcome_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_RegistrationOutcome: $.ASN1Decoder<RegistrationOutcome> = $._decodeEnumerated;

export const _encode_RegistrationOutcome: $.ASN1Encoder<RegistrationOutcome> = $._encodeEnumerated;

/* eslint-enable */
