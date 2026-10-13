/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuGetParameter_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuGetParameter-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticCltuGetParameter_specific = INTEGER;

/**
 * @summary DiagnosticCltuGetParameter_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuGetParameter_specific_unknownParameter: DiagnosticCltuGetParameter_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuGetParameter_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticCltuGetParameter_specific = DiagnosticCltuGetParameter_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticCltuGetParameter_specific: $.ASN1Decoder<DiagnosticCltuGetParameter_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticCltuGetParameter_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticCltuGetParameter_specific (el: _Element): DiagnosticCltuGetParameter_specific {
    if (!_cached_decoder_for_DiagnosticCltuGetParameter_specific) { _cached_decoder_for_DiagnosticCltuGetParameter_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticCltuGetParameter_specific(el);
}

let _cached_encoder_for_DiagnosticCltuGetParameter_specific: $.ASN1Encoder<DiagnosticCltuGetParameter_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticCltuGetParameter_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticCltuGetParameter_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticCltuGetParameter_specific (value: DiagnosticCltuGetParameter_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticCltuGetParameter_specific) { _cached_encoder_for_DiagnosticCltuGetParameter_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticCltuGetParameter_specific(value, elGetter);
}


/* eslint-enable */
