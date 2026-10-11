/* eslint-disable */

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

export const _decode_TLSCipherType: $.ASN1Decoder<TLSCipherType> = $._decodeEnumerated;

export const _encode_TLSCipherType: $.ASN1Encoder<TLSCipherType> = $._encodeEnumerated;

/* eslint-enable */
