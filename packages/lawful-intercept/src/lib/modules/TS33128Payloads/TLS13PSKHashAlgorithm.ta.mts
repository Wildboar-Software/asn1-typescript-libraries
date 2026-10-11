/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TLS13PSKHashAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKHashAlgorithm  ::=  ENUMERATED
 * {
 *     sha256(1),
 *     sha384(2),
 *     sha512(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13PSKHashAlgorithm {
    sha256 = 1,
    sha384 = 2,
    sha512 = 3,
}

/**
 * @summary TLS13PSKHashAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKHashAlgorithm  ::=  ENUMERATED
 * {
 *     sha256(1),
 *     sha384(2),
 *     sha512(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13PSKHashAlgorithm = _enum_for_TLS13PSKHashAlgorithm;

/**
 * @summary TLS13PSKHashAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKHashAlgorithm  ::=  ENUMERATED
 * {
 *     sha256(1),
 *     sha384(2),
 *     sha512(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13PSKHashAlgorithm = _enum_for_TLS13PSKHashAlgorithm;

/**
 * @summary TLS13PSKHashAlgorithm_sha256
 * @constant
 * @type {number}
 */
export
const TLS13PSKHashAlgorithm_sha256: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha256; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sha256
 * @constant
 * @type {number}
 */
export
const sha256: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha256; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13PSKHashAlgorithm_sha384
 * @constant
 * @type {number}
 */
export
const TLS13PSKHashAlgorithm_sha384: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha384; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sha384
 * @constant
 * @type {number}
 */
export
const sha384: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha384; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLS13PSKHashAlgorithm_sha512
 * @constant
 * @type {number}
 */
export
const TLS13PSKHashAlgorithm_sha512: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha512; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sha512
 * @constant
 * @type {number}
 */
export
const sha512: TLS13PSKHashAlgorithm = TLS13PSKHashAlgorithm.sha512; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_TLS13PSKHashAlgorithm: $.ASN1Decoder<TLS13PSKHashAlgorithm> = $._decodeEnumerated;

export const _encode_TLS13PSKHashAlgorithm: $.ASN1Encoder<TLS13PSKHashAlgorithm> = $._encodeEnumerated;

/* eslint-enable */
