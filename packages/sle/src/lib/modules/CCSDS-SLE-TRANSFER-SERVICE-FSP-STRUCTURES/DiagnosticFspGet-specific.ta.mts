/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspGet_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspGet-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticFspGet_specific = INTEGER;

/**
 * @summary DiagnosticFspGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const DiagnosticFspGet_specific_unknownParameter: DiagnosticFspGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticFspGet_specific = DiagnosticFspGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticFspGet_specific: $.ASN1Decoder<DiagnosticFspGet_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspGet_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspGet_specific (el: _Element): DiagnosticFspGet_specific {
    if (!_cached_decoder_for_DiagnosticFspGet_specific) { _cached_decoder_for_DiagnosticFspGet_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticFspGet_specific(el);
}

let _cached_encoder_for_DiagnosticFspGet_specific: $.ASN1Encoder<DiagnosticFspGet_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspGet_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspGet_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspGet_specific (value: DiagnosticFspGet_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspGet_specific) { _cached_encoder_for_DiagnosticFspGet_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticFspGet_specific(value, elGetter);
}


/* eslint-enable */
