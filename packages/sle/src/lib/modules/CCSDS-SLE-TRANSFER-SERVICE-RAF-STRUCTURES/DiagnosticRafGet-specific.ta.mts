/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticRafGet_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRafGet-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticRafGet_specific = INTEGER;

/**
 * @summary DiagnosticRafGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const DiagnosticRafGet_specific_unknownParameter: DiagnosticRafGet_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticRafGet_specific_unknownParameter
 * @constant
 * @type {number}
 */
export
const unknownParameter: DiagnosticRafGet_specific = DiagnosticRafGet_specific_unknownParameter; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticRafGet_specific: $.ASN1Decoder<DiagnosticRafGet_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRafGet_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRafGet_specific (el: _Element): DiagnosticRafGet_specific {
    if (!_cached_decoder_for_DiagnosticRafGet_specific) { _cached_decoder_for_DiagnosticRafGet_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticRafGet_specific(el);
}

let _cached_encoder_for_DiagnosticRafGet_specific: $.ASN1Encoder<DiagnosticRafGet_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRafGet_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRafGet_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRafGet_specific (value: DiagnosticRafGet_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRafGet_specific) { _cached_encoder_for_DiagnosticRafGet_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticRafGet_specific(value, elGetter);
}


/* eslint-enable */
