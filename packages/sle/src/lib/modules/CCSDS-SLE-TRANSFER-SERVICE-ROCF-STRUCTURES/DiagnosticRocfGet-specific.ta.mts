/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRocfGet_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRocfGet-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticRocfGet_specific = INTEGER;

/**
 * @summary DiagnosticRocfGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const DiagnosticRocfGet_specific_unknownParameter: DiagnosticRocfGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRocfGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRocfGet_specific = DiagnosticRocfGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticRocfGet_specific: $.ASN1Decoder<DiagnosticRocfGet_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRocfGet_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRocfGet_specific (el: _Element): DiagnosticRocfGet_specific {
    if (!_cached_decoder_for_DiagnosticRocfGet_specific) { _cached_decoder_for_DiagnosticRocfGet_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticRocfGet_specific(el);
}

let _cached_encoder_for_DiagnosticRocfGet_specific: $.ASN1Encoder<DiagnosticRocfGet_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRocfGet_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRocfGet_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRocfGet_specific (value: DiagnosticRocfGet_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRocfGet_specific) { _cached_encoder_for_DiagnosticRocfGet_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticRocfGet_specific(value, elGetter);
}


/* eslint-enable */
