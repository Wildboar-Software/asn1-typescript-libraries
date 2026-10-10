/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IABAuthorizedIndicator {
    authorized = 1,
    notAuthorized = 2,
}

/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;

/**
 * @summary IABAuthorizedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IABAuthorizedIndicator  ::=  ENUMERATED
 * {
 *     authorized(1),
 *     notAuthorized(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IABAuthorizedIndicator = _enum_for_IABAuthorizedIndicator;

/**
 * @summary IABAuthorizedIndicator_authorized
 * @constant
 * @type {number}
 */
export
const IABAuthorizedIndicator_authorized: IABAuthorizedIndicator = IABAuthorizedIndicator.authorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorized
 * @constant
 * @type {number}
 */
export
const authorized: IABAuthorizedIndicator = IABAuthorizedIndicator.authorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IABAuthorizedIndicator_notAuthorized
 * @constant
 * @type {number}
 */
export
const IABAuthorizedIndicator_notAuthorized: IABAuthorizedIndicator = IABAuthorizedIndicator.notAuthorized; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAuthorized
 * @constant
 * @type {number}
 */
export
const notAuthorized: IABAuthorizedIndicator = IABAuthorizedIndicator.notAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) IABAuthorizedIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IABAuthorizedIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) IABAuthorizedIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IABAuthorizedIndicator, encoded as an ASN.1 Element.
 */
export const _encode_IABAuthorizedIndicator = $._encodeEnumerated;


/* eslint-enable */
