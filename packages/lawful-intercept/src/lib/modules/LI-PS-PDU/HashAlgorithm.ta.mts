/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_HashAlgorithm {
    sHA_1 = 1,
    sHA_256 = 2,
    sHA_384 = 3,
    sHA_512 = 4,
}

/**
 * @summary HashAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HashAlgorithm  ::=  ENUMERATED
 * {
 *     sHA-1(1),
 *         -- Included for legacy/migration purposes only, not to be used for new implementations
 *     sHA-256(2),
 *     sHA-384(3),
 *     sHA-512(4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type HashAlgorithm = _enum_for_HashAlgorithm | ENUMERATED;

/**
 * @summary HashAlgorithm_sHA_1
 * @constant
 * @type {number}
 */
export
const HashAlgorithm_sHA_1: HashAlgorithm = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sHA_1
 * @constant
 * @type {number}
 */
export
const sHA_1: HashAlgorithm = HashAlgorithm_sHA_1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HashAlgorithm_sHA_256
 * @constant
 * @type {number}
 */
export
const HashAlgorithm_sHA_256: HashAlgorithm = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sHA_256
 * @constant
 * @type {number}
 */
export
const sHA_256: HashAlgorithm = HashAlgorithm_sHA_256; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HashAlgorithm_sHA_384
 * @constant
 * @type {number}
 */
export
const HashAlgorithm_sHA_384: HashAlgorithm = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sHA_384
 * @constant
 * @type {number}
 */
export
const sHA_384: HashAlgorithm = HashAlgorithm_sHA_384; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary HashAlgorithm_sHA_512
 * @constant
 * @type {number}
 */
export
const HashAlgorithm_sHA_512: HashAlgorithm = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sHA_512
 * @constant
 * @type {number}
 */
export
const sHA_512: HashAlgorithm = HashAlgorithm_sHA_512; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_HashAlgorithm: $.ASN1Decoder<HashAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HashAlgorithm (el: _Element): HashAlgorithm {
    if (!_cached_decoder_for_HashAlgorithm) { _cached_decoder_for_HashAlgorithm = $._decodeEnumerated; }
    return _cached_decoder_for_HashAlgorithm(el);
}

let _cached_encoder_for_HashAlgorithm: $.ASN1Encoder<HashAlgorithm> | null = null;

/**
 * @summary Encodes a(n) HashAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashAlgorithm, encoded as an ASN.1 Element.
 */
export
function _encode_HashAlgorithm (value: HashAlgorithm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HashAlgorithm) { _cached_encoder_for_HashAlgorithm = $._encodeEnumerated; }
    return _cached_encoder_for_HashAlgorithm(value, elGetter);
}


/* eslint-enable */
