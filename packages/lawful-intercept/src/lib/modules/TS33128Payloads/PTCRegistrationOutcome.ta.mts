/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCRegistrationOutcome
 * @description
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
const PTCRegistrationOutcome = _enum_for_PTCRegistrationOutcome;

/**
 * @summary PTCRegistrationOutcome_success
 * @constant
 * @type {number}
 */
export
const PTCRegistrationOutcome_success: PTCRegistrationOutcome = PTCRegistrationOutcome.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export
const success: PTCRegistrationOutcome = PTCRegistrationOutcome.success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCRegistrationOutcome_failure
 * @constant
 * @type {number}
 */
export
const PTCRegistrationOutcome_failure: PTCRegistrationOutcome = PTCRegistrationOutcome.failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary failure
 * @constant
 * @type {number}
 */
export
const failure: PTCRegistrationOutcome = PTCRegistrationOutcome.failure; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_PTCRegistrationOutcome: $.ASN1Decoder<PTCRegistrationOutcome> = $._decodeEnumerated;

export const _encode_PTCRegistrationOutcome: $.ASN1Encoder<PTCRegistrationOutcome> = $._encodeEnumerated;


/* eslint-enable */
