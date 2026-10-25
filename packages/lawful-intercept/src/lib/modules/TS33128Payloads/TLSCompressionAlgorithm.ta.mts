/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLSCompressionAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCompressionAlgorithm  ::=  ENUMERATED
 * {
 *     null(1),
 *     deflate(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLSCompressionAlgorithm {
    null_ = 1,
    deflate = 2,
}

/**
 * @summary TLSCompressionAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCompressionAlgorithm  ::=  ENUMERATED
 * {
 *     null(1),
 *     deflate(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLSCompressionAlgorithm = _enum_for_TLSCompressionAlgorithm;

/**
 * @summary TLSCompressionAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSCompressionAlgorithm  ::=  ENUMERATED
 * {
 *     null(1),
 *     deflate(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLSCompressionAlgorithm: typeof _enum_for_TLSCompressionAlgorithm = _enum_for_TLSCompressionAlgorithm;

/**
 * @summary TLSCompressionAlgorithm_null_
 * @constant
 * @type {number}
 */
export
const TLSCompressionAlgorithm_null_: _enum_for_TLSCompressionAlgorithm.null_ = TLSCompressionAlgorithm.null_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary null_
 * @constant
 * @type {number}
 */
export
const null_: _enum_for_TLSCompressionAlgorithm.null_ = TLSCompressionAlgorithm.null_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSCompressionAlgorithm_deflate
 * @constant
 * @type {number}
 */
export
const TLSCompressionAlgorithm_deflate: _enum_for_TLSCompressionAlgorithm.deflate = TLSCompressionAlgorithm.deflate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deflate
 * @constant
 * @type {number}
 */
export
const deflate: _enum_for_TLSCompressionAlgorithm.deflate = TLSCompressionAlgorithm.deflate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TLSCompressionAlgorithm: $.ASN1Decoder<TLSCompressionAlgorithm> = $._decodeEnumerated;
export const _encode_TLSCompressionAlgorithm: $.ASN1Encoder<TLSCompressionAlgorithm> = $._encodeEnumerated;


/* eslint-enable */
