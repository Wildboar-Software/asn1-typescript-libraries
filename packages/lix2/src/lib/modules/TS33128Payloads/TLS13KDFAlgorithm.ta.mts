/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLS13KDFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13KDFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5869(1)     -- HKDF
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13KDFAlgorithm {
    rfc5869 = 1,
}

/**
 * @summary TLS13KDFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13KDFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5869(1)     -- HKDF
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13KDFAlgorithm = _enum_for_TLS13KDFAlgorithm;

/**
 * @summary TLS13KDFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13KDFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5869(1)     -- HKDF
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13KDFAlgorithm = _enum_for_TLS13KDFAlgorithm;

/**
 * @summary TLS13KDFAlgorithm_rfc5869
 * @constant
 * @type {number}
 */
export
const TLS13KDFAlgorithm_rfc5869: TLS13KDFAlgorithm = TLS13KDFAlgorithm.rfc5869; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfc5869
 * @constant
 * @type {number}
 */
export
const rfc5869: TLS13KDFAlgorithm = TLS13KDFAlgorithm.rfc5869; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TLS13KDFAlgorithm: $.ASN1Decoder<TLS13KDFAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13KDFAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13KDFAlgorithm (el: _Element): TLS13KDFAlgorithm {
    if (!_cached_decoder_for_TLS13KDFAlgorithm) { _cached_decoder_for_TLS13KDFAlgorithm = $._decodeEnumerated; }
    return _cached_decoder_for_TLS13KDFAlgorithm(el);
}

let _cached_encoder_for_TLS13KDFAlgorithm: $.ASN1Encoder<TLS13KDFAlgorithm> | null = null;

/**
 * @summary Encodes a(n) TLS13KDFAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13KDFAlgorithm, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13KDFAlgorithm (value: TLS13KDFAlgorithm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13KDFAlgorithm) { _cached_encoder_for_TLS13KDFAlgorithm = $._encodeEnumerated; }
    return _cached_encoder_for_TLS13KDFAlgorithm(value, elGetter);
}


/* eslint-enable */
