/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGProSeAuthorizationIndicator {
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;

/**
 * @summary FiveGProSeAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGProSeAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGProSeAuthorizationIndicator = _enum_for_FiveGProSeAuthorizationIndicator;

/**
 * @summary FiveGProSeAuthorizationIndicator_authorized
 * @constant
 * @type {number}
 */
export
const FiveGProSeAuthorizationIndicator_authorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGProSeAuthorizationIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const FiveGProSeAuthorizationIndicator_notAuthorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: FiveGProSeAuthorizationIndicator = FiveGProSeAuthorizationIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGProSeAuthorizationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGProSeAuthorizationIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) FiveGProSeAuthorizationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGProSeAuthorizationIndicator, encoded as an ASN.1 Element.
 */
export const _encode_FiveGProSeAuthorizationIndicator = $._encodeEnumerated;


/* eslint-enable */
