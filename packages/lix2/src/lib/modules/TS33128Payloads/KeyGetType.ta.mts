/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_KeyGetType {
    internal = 1,
    external = 2,
}

/**
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type KeyGetType = _enum_for_KeyGetType;

/**
 * @summary KeyGetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyGetType  ::=  ENUMERATED
 * {
 *     internal(1),
 *     external(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const KeyGetType = _enum_for_KeyGetType;

/**
 * @summary KeyGetType_internal
 * @constant
 * @type {number}
 */
export
const KeyGetType_internal: KeyGetType = KeyGetType.internal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @constant
 * @type {number}
 */
export
const internal: KeyGetType = KeyGetType.internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary KeyGetType_external
 * @constant
 * @type {number}
 */
export
const KeyGetType_external: KeyGetType = KeyGetType.external; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary external
 * @constant
 * @type {number}
 */
export
const external: KeyGetType = KeyGetType.external; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) KeyGetType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_KeyGetType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) KeyGetType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyGetType, encoded as an ASN.1 Element.
 */
export const _encode_KeyGetType = $._encodeEnumerated;


/* eslint-enable */
