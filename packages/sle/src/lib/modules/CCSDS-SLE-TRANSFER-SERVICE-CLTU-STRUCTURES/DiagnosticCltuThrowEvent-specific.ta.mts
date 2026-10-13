/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticCltuThrowEvent_specific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuThrowEvent-specific ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagnosticCltuThrowEvent_specific = INTEGER;

/**
 * @summary DiagnosticCltuThrowEvent_specific_operationNotSupported
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_operationNotSupported: DiagnosticCltuThrowEvent_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_operationNotSupported
 * @constant
 * @type {number}
 */
export
const operationNotSupported: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_operationNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence: DiagnosticCltuThrowEvent_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence
 * @constant
 * @type {number}
 */
export
const eventInvocIdOutOfSequence: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_eventInvocIdOutOfSequence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_noSuchEvent
 * @constant
 * @type {number}
 */
export
const DiagnosticCltuThrowEvent_specific_noSuchEvent: DiagnosticCltuThrowEvent_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticCltuThrowEvent_specific_noSuchEvent
 * @constant
 * @type {number}
 */
export
const noSuchEvent: DiagnosticCltuThrowEvent_specific = DiagnosticCltuThrowEvent_specific_noSuchEvent; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagnosticCltuThrowEvent_specific: $.ASN1Decoder<DiagnosticCltuThrowEvent_specific> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticCltuThrowEvent_specific
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticCltuThrowEvent_specific (el: _Element): DiagnosticCltuThrowEvent_specific {
    if (!_cached_decoder_for_DiagnosticCltuThrowEvent_specific) { _cached_decoder_for_DiagnosticCltuThrowEvent_specific = $._decodeInteger; }
    return _cached_decoder_for_DiagnosticCltuThrowEvent_specific(el);
}

let _cached_encoder_for_DiagnosticCltuThrowEvent_specific: $.ASN1Encoder<DiagnosticCltuThrowEvent_specific> | null = null;

/**
 * @summary Encodes a(n) DiagnosticCltuThrowEvent_specific into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticCltuThrowEvent_specific, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticCltuThrowEvent_specific (value: DiagnosticCltuThrowEvent_specific, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticCltuThrowEvent_specific) { _cached_encoder_for_DiagnosticCltuThrowEvent_specific = $._encodeInteger; }
    return _cached_encoder_for_DiagnosticCltuThrowEvent_specific(value, elGetter);
}


/* eslint-enable */
