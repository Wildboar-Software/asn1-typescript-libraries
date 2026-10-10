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

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13PSKHashAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TLS13PSKHashAlgorithm = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TLS13PSKHashAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13PSKHashAlgorithm, encoded as an ASN.1 Element.
 */
export const _encode_TLS13PSKHashAlgorithm = $._encodeEnumerated;


/* eslint-enable */
