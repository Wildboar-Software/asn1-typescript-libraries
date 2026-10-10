/* eslint-disable */

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

/**
 * @summary Decodes an ASN.1 element into a(n) PTCRegistrationOutcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PTCRegistrationOutcome = $._decodeEnumerated;

/**
 * @summary Encodes a(n) PTCRegistrationOutcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCRegistrationOutcome, encoded as an ASN.1 Element.
 */
export const _encode_PTCRegistrationOutcome = $._encodeEnumerated;


/* eslint-enable */
