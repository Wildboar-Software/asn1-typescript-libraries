/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary V2XUEAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V2XUEAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_V2XUEAuthorizationIndicator {
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary V2XUEAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V2XUEAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type V2XUEAuthorizationIndicator = _enum_for_V2XUEAuthorizationIndicator;

/**
 * @summary V2XUEAuthorizationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V2XUEAuthorizationIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const V2XUEAuthorizationIndicator = _enum_for_V2XUEAuthorizationIndicator;

/**
 * @summary V2XUEAuthorizationIndicator_authorized
 * @constant
 * @type {number}
 */
export
const V2XUEAuthorizationIndicator_authorized: V2XUEAuthorizationIndicator = V2XUEAuthorizationIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: V2XUEAuthorizationIndicator = V2XUEAuthorizationIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary V2XUEAuthorizationIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const V2XUEAuthorizationIndicator_notAuthorized: V2XUEAuthorizationIndicator = V2XUEAuthorizationIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: V2XUEAuthorizationIndicator = V2XUEAuthorizationIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) V2XUEAuthorizationIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_V2XUEAuthorizationIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) V2XUEAuthorizationIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V2XUEAuthorizationIndicator, encoded as an ASN.1 Element.
 */
export const _encode_V2XUEAuthorizationIndicator = $._encodeEnumerated;


/* eslint-enable */
