/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PTCAccessPolicyFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCAccessPolicyFailure {
    requestUnsuccessful = 1,
    requestUnknown = 2,
}

/**
 * @summary PTCAccessPolicyFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCAccessPolicyFailure = _enum_for_PTCAccessPolicyFailure;

/**
 * @summary PTCAccessPolicyFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyFailure   ::=  ENUMERATED
 * {
 *     requestUnsuccessful(1),
 *     requestUnknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCAccessPolicyFailure = _enum_for_PTCAccessPolicyFailure;

/**
 * @summary PTCAccessPolicyFailure_requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyFailure_requestUnsuccessful: PTCAccessPolicyFailure = PTCAccessPolicyFailure.requestUnsuccessful; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const requestUnsuccessful: PTCAccessPolicyFailure = PTCAccessPolicyFailure.requestUnsuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyFailure_requestUnknown
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyFailure_requestUnknown: PTCAccessPolicyFailure = PTCAccessPolicyFailure.requestUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnknown
 * @constant
 * @type {number}
 */
export
const requestUnknown: PTCAccessPolicyFailure = PTCAccessPolicyFailure.requestUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_PTCAccessPolicyFailure: $.ASN1Decoder<PTCAccessPolicyFailure> = $._decodeEnumerated;

export const _encode_PTCAccessPolicyFailure: $.ASN1Encoder<PTCAccessPolicyFailure> = $._encodeEnumerated;

/* eslint-enable */
