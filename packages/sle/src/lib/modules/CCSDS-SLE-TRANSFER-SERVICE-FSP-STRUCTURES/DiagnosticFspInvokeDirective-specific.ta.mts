/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspInvokeDirective_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspInvokeDirective-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticFspInvokeDirective_specific = INTEGER;

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed: DiagnosticFspInvokeDirective_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed
 * @constant
 * @type {number}
 */
export
const directiveInvocationNotAllowed: DiagnosticFspInvokeDirective_specific = DiagnosticFspInvokeDirective_specific_directiveInvocationNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence: DiagnosticFspInvokeDirective_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const directiveIdentificationOutOfSequence: DiagnosticFspInvokeDirective_specific = DiagnosticFspInvokeDirective_specific_directiveIdentificationOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveError
 * @constant
 * @type {number}
 */
export
const DiagnosticFspInvokeDirective_specific_directiveError: DiagnosticFspInvokeDirective_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspInvokeDirective_specific_directiveError
 * @constant
 * @type {number}
 */
export
const directiveError: DiagnosticFspInvokeDirective_specific = DiagnosticFspInvokeDirective_specific_directiveError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticFspInvokeDirective_specific: $.ASN1Decoder<DiagnosticFspInvokeDirective_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspInvokeDirective_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspInvokeDirective_specific (el: _Element): DiagnosticFspInvokeDirective_specific {
    if (!_cached_decoder_for_DiagnosticFspInvokeDirective_specific) { _cached_decoder_for_DiagnosticFspInvokeDirective_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticFspInvokeDirective_specific(el);
}

let _cached_encoder_for_DiagnosticFspInvokeDirective_specific: $.ASN1Encoder<DiagnosticFspInvokeDirective_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspInvokeDirective_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspInvokeDirective_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspInvokeDirective_specific (value: DiagnosticFspInvokeDirective_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspInvokeDirective_specific) { _cached_encoder_for_DiagnosticFspInvokeDirective_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticFspInvokeDirective_specific(value, elGetter);
}


/* eslint-enable */
