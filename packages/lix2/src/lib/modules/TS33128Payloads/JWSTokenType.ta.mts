/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary JWSTokenType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JWSTokenType  ::=  ENUMERATED
 * {
 *     passport(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_JWSTokenType {
    passport = 1,
}

/**
 * @summary JWSTokenType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JWSTokenType  ::=  ENUMERATED
 * {
 *     passport(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type JWSTokenType = _enum_for_JWSTokenType;

/**
 * @summary JWSTokenType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * JWSTokenType  ::=  ENUMERATED
 * {
 *     passport(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const JWSTokenType = _enum_for_JWSTokenType;

/**
 * @summary JWSTokenType_passport
 * @constant
 * @type {number}
 */
export
const JWSTokenType_passport: JWSTokenType = JWSTokenType.passport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary passport
 * @constant
 * @type {number}
 */
export
const passport: JWSTokenType = JWSTokenType.passport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) JWSTokenType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_JWSTokenType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) JWSTokenType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JWSTokenType, encoded as an ASN.1 Element.
 */
export const _encode_JWSTokenType = $._encodeEnumerated;


/* eslint-enable */
