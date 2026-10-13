/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticFspThrowEvent_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspThrowEvent-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticFspThrowEvent_specific = INTEGER;

/**
 * @summary DiagnosticFspThrowEvent_specific_operationNotSupported
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_operationNotSupported: DiagnosticFspThrowEvent_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_operationNotSupported
 * @constant
 * @type {number}
 */
export
const operationNotSupported: DiagnosticFspThrowEvent_specific = DiagnosticFspThrowEvent_specific_operationNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence: DiagnosticFspThrowEvent_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence
 * @constant
 * @type {number}
 */
export
const eventIdentificationOutOfSequence: DiagnosticFspThrowEvent_specific = DiagnosticFspThrowEvent_specific_eventIdentificationOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_noSuchEvent
 * @constant
 * @type {number}
 */
export
const DiagnosticFspThrowEvent_specific_noSuchEvent: DiagnosticFspThrowEvent_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticFspThrowEvent_specific_noSuchEvent
 * @constant
 * @type {number}
 */
export
const noSuchEvent: DiagnosticFspThrowEvent_specific = DiagnosticFspThrowEvent_specific_noSuchEvent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticFspThrowEvent_specific: $.ASN1Decoder<DiagnosticFspThrowEvent_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspThrowEvent_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspThrowEvent_specific (el: _Element): DiagnosticFspThrowEvent_specific {
    if (!_cached_decoder_for_DiagnosticFspThrowEvent_specific) { _cached_decoder_for_DiagnosticFspThrowEvent_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticFspThrowEvent_specific(el);
}

let _cached_encoder_for_DiagnosticFspThrowEvent_specific: $.ASN1Encoder<DiagnosticFspThrowEvent_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspThrowEvent_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspThrowEvent_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspThrowEvent_specific (value: DiagnosticFspThrowEvent_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspThrowEvent_specific) { _cached_encoder_for_DiagnosticFspThrowEvent_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticFspThrowEvent_specific(value, elGetter);
}


/* eslint-enable */
