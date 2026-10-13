/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRcfGet_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRcfGet-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticRcfGet_specific = INTEGER;

/**
 * @summary DiagnosticRcfGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const DiagnosticRcfGet_specific_unknownParameter: DiagnosticRcfGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRcfGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRcfGet_specific = DiagnosticRcfGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticRcfGet_specific: $.ASN1Decoder<DiagnosticRcfGet_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRcfGet_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRcfGet_specific (el: _Element): DiagnosticRcfGet_specific {
    if (!_cached_decoder_for_DiagnosticRcfGet_specific) { _cached_decoder_for_DiagnosticRcfGet_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticRcfGet_specific(el);
}

let _cached_encoder_for_DiagnosticRcfGet_specific: $.ASN1Encoder<DiagnosticRcfGet_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRcfGet_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRcfGet_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRcfGet_specific (value: DiagnosticRcfGet_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRcfGet_specific) { _cached_encoder_for_DiagnosticRcfGet_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticRcfGet_specific(value, elGetter);
}


/* eslint-enable */
