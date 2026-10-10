/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AuthorizationType {
    registration = 1,
    deregistration = 2,
}

/**
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AuthorizationType = _enum_for_AuthorizationType;

/**
 * @summary AuthorizationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationType  ::=  ENUMERATED
 * {
 *     registration(1),
 *     deregistration(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AuthorizationType = _enum_for_AuthorizationType;

/**
 * @summary AuthorizationType_registration
 * @constant
 * @type {number}
 */
export
const AuthorizationType_registration: AuthorizationType = AuthorizationType.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export
const registration: AuthorizationType = AuthorizationType.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuthorizationType_deregistration
 * @constant
 * @type {number}
 */
export
const AuthorizationType_deregistration: AuthorizationType = AuthorizationType.deregistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistration
 * @constant
 * @type {number}
 */
export
const deregistration: AuthorizationType = AuthorizationType.deregistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AuthorizationType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AuthorizationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationType, encoded as an ASN.1 Element.
 */
export const _encode_AuthorizationType = $._encodeEnumerated;


/* eslint-enable */
