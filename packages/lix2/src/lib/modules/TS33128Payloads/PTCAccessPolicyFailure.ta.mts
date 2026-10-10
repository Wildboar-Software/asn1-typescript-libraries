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

/**
 * @summary Decodes an ASN.1 element into a(n) PTCAccessPolicyFailure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PTCAccessPolicyFailure = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PTCAccessPolicyFailure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCAccessPolicyFailure, encoded as an ASN.1 Element.
 */
export const _encode_PTCAccessPolicyFailure = $._encodeEnumerated;


/* eslint-enable */
