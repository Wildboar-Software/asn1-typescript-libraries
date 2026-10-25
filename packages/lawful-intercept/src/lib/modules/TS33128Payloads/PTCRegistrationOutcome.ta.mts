/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * Identifies success or failure of the registration.
 *
 * 3GPP TS 33.128, clause 7.5.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCRegistrationOutcome {
    success = 1,
    failure = 2,
}

/**
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * Identifies success or failure of the registration.
 *
 * 3GPP TS 33.128, clause 7.5.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;

/**
 * @summary PTCRegistrationOutcome
 * @description
 * 
 * Identifies success or failure of the registration.
 *
 * 3GPP TS 33.128, clause 7.5.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCRegistrationOutcome   ::=  ENUMERATED
 * {
 *     success(1),
 *     failure(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCRegistrationOutcome: typeof _enum_for_PTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;

/**
 * @summary PTCRegistrationOutcome_success
 * @constant
 * @type {number}
 */
export
const PTCRegistrationOutcome_success: _enum_for_PTCRegistrationOutcome.success = PTCRegistrationOutcome.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: _enum_for_PTCRegistrationOutcome.success = PTCRegistrationOutcome.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCRegistrationOutcome_failure
 * @constant
 * @type {number}
 */
export
const PTCRegistrationOutcome_failure: _enum_for_PTCRegistrationOutcome.failure = PTCRegistrationOutcome.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: _enum_for_PTCRegistrationOutcome.failure = PTCRegistrationOutcome.failure; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCRegistrationOutcome: $.ASN1Decoder<PTCRegistrationOutcome> = $._decodeEnumerated;
export const _encode_PTCRegistrationOutcome: $.ASN1Encoder<PTCRegistrationOutcome> = $._encodeEnumerated;


/* eslint-enable */
