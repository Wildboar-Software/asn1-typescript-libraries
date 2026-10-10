/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AnyIPAddress {
    any_ = 1,
}

/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AnyIPAddress = _enum_for_AnyIPAddress;

/**
 * @summary AnyIPAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyIPAddress  ::=  ENUMERATED
 * {
 *     any(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AnyIPAddress = _enum_for_AnyIPAddress;

/**
 * @summary AnyIPAddress_any_
 * @constant
 * @type {number}
 */
export
const AnyIPAddress_any_: AnyIPAddress = AnyIPAddress.any_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary any_
 * @constant
 * @type {number}
 */
export
const any_: AnyIPAddress = AnyIPAddress.any_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AnyIPAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AnyIPAddress = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AnyIPAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyIPAddress, encoded as an ASN.1 Element.
 */
export const _encode_AnyIPAddress = $._encodeEnumerated;


/* eslint-enable */
