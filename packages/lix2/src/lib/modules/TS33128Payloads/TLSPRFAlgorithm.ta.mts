/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLSPRFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSPRFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5246(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLSPRFAlgorithm {
    rfc5246 = 1,
}

/**
 * @summary TLSPRFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSPRFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5246(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLSPRFAlgorithm = _enum_for_TLSPRFAlgorithm;

/**
 * @summary TLSPRFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSPRFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5246(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLSPRFAlgorithm = _enum_for_TLSPRFAlgorithm;

/**
 * @summary TLSPRFAlgorithm_rfc5246
 * @constant
 * @type {number}
 */
export
const TLSPRFAlgorithm_rfc5246: TLSPRFAlgorithm = TLSPRFAlgorithm.rfc5246; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfc5246
 * @constant
 * @type {number}
 */
export
const rfc5246: TLSPRFAlgorithm = TLSPRFAlgorithm.rfc5246; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TLSPRFAlgorithm: $.ASN1Decoder<TLSPRFAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLSPRFAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLSPRFAlgorithm (el: _Element): TLSPRFAlgorithm {
    if (!_cached_decoder_for_TLSPRFAlgorithm) { _cached_decoder_for_TLSPRFAlgorithm = $._decodeEnumerated; }
    return _cached_decoder_for_TLSPRFAlgorithm(el);
}

let _cached_encoder_for_TLSPRFAlgorithm: $.ASN1Encoder<TLSPRFAlgorithm> | null = null;

/**
 * @summary Encodes a(n) TLSPRFAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLSPRFAlgorithm, encoded as an ASN.1 Element.
 */
export
function _encode_TLSPRFAlgorithm (value: TLSPRFAlgorithm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLSPRFAlgorithm) { _cached_encoder_for_TLSPRFAlgorithm = $._encodeEnumerated; }
    return _cached_encoder_for_TLSPRFAlgorithm(value, elGetter);
}


/* eslint-enable */
