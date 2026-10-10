/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLSCipherType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCipherType  ::=  ENUMERATED
 * {
 *     stream(1),
 *     block(2),
 *     aead(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLSCipherType {
    stream = 1,
    block = 2,
    aead = 3,
}

/**
 * @summary TLSCipherType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCipherType  ::=  ENUMERATED
 * {
 *     stream(1),
 *     block(2),
 *     aead(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLSCipherType = _enum_for_TLSCipherType;

/**
 * @summary TLSCipherType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCipherType  ::=  ENUMERATED
 * {
 *     stream(1),
 *     block(2),
 *     aead(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLSCipherType = _enum_for_TLSCipherType;

/**
 * @summary TLSCipherType_stream
 * @constant
 * @type {number}
 */
export
const TLSCipherType_stream: TLSCipherType = TLSCipherType.stream; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stream
 * @constant
 * @type {number}
 */
export
const stream: TLSCipherType = TLSCipherType.stream; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSCipherType_block
 * @constant
 * @type {number}
 */
export
const TLSCipherType_block: TLSCipherType = TLSCipherType.block; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary block
 * @constant
 * @type {number}
 */
export
const block: TLSCipherType = TLSCipherType.block; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSCipherType_aead
 * @constant
 * @type {number}
 */
export
const TLSCipherType_aead: TLSCipherType = TLSCipherType.aead; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aead
 * @constant
 * @type {number}
 */
export
const aead: TLSCipherType = TLSCipherType.aead; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TLSCipherType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TLSCipherType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TLSCipherType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLSCipherType, encoded as an ASN.1 Element.
 */
export const _encode_TLSCipherType = $._encodeEnumerated;


/* eslint-enable */
