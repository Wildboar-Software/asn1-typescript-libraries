/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMServingSystemMethod {
    amf3GPPAccessRegistration = 0,
    amfNon3GPPAccessRegistration = 1,
    unknown = 2,
}

/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMServingSystemMethod = _enum_for_UDMServingSystemMethod;

/**
 * @summary UDMServingSystemMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMServingSystemMethod  ::=  ENUMERATED
 * {
 *     amf3GPPAccessRegistration(0),
 *     amfNon3GPPAccessRegistration(1),
 *     unknown(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMServingSystemMethod = _enum_for_UDMServingSystemMethod;

/**
 * @summary UDMServingSystemMethod_amf3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_amf3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amf3GPPAccessRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary amf3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const amf3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amf3GPPAccessRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMServingSystemMethod_amfNon3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_amfNon3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amfNon3GPPAccessRegistration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary amfNon3GPPAccessRegistration
 * @constant
 * @type {number}
 */
export
const amfNon3GPPAccessRegistration: UDMServingSystemMethod = UDMServingSystemMethod.amfNon3GPPAccessRegistration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMServingSystemMethod_unknown
 * @constant
 * @type {number}
 */
export
const UDMServingSystemMethod_unknown: UDMServingSystemMethod = UDMServingSystemMethod.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: UDMServingSystemMethod = UDMServingSystemMethod.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) UDMServingSystemMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UDMServingSystemMethod = $._decodeEnumerated;

/**
 * @summary Encodes a(n) UDMServingSystemMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMServingSystemMethod, encoded as an ASN.1 Element.
 */
export const _encode_UDMServingSystemMethod = $._encodeEnumerated;


/* eslint-enable */
