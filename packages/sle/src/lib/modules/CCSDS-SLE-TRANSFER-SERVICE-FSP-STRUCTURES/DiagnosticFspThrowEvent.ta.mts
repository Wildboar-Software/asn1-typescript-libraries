/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, type Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticFspThrowEvent_specific, _encode_DiagnosticFspThrowEvent_specific, type DiagnosticFspThrowEvent_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspThrowEvent-specific.ta.mjs";


/**
 * @summary DiagnosticFspThrowEvent
 * @description
 * 
 * Negative-result diagnostic of FSP-THROW-EVENT. A positive result omits the
 * diagnostic and forwards the event. The provider stays in state 2 or state 3.
 * `common` carries `duplicateInvokeId` and `otherReason`. `specific` carries
 * the codes in section 3.11.2.9. Checks follow the order in that section.
 * 
 * CCSDS 912.3-B-3, sections 3.11.2.9, 3.11.3, and 3.1.3.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspThrowEvent           ::=    CHOICE
 * {  common                     [0]   Diagnostics
 * ,  specific                   [1]   INTEGER
 *    {  operationNotSupported            (0)
 *    ,  eventIdentificationOutOfSequence (1)
 * ,  noSuchEvent                         (2)
 *    }
 * }
 * ```
 */
export
type DiagnosticFspThrowEvent =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticFspThrowEvent_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticFspThrowEvent: $.ASN1Decoder<DiagnosticFspThrowEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspThrowEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspThrowEvent (el: _Element): DiagnosticFspThrowEvent {
    if (!_cached_decoder_for_DiagnosticFspThrowEvent) { _cached_decoder_for_DiagnosticFspThrowEvent = $._decode_inextensible_choice<DiagnosticFspThrowEvent>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticFspThrowEvent_specific>(() => _decode_DiagnosticFspThrowEvent_specific) ]
}); }
    return _cached_decoder_for_DiagnosticFspThrowEvent(el);
}

let _cached_encoder_for_DiagnosticFspThrowEvent: $.ASN1Encoder<DiagnosticFspThrowEvent> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspThrowEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspThrowEvent, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspThrowEvent (value: DiagnosticFspThrowEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspThrowEvent) { _cached_encoder_for_DiagnosticFspThrowEvent = $._encode_choice<DiagnosticFspThrowEvent>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticFspThrowEvent_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticFspThrowEvent(value, elGetter);
}


/* eslint-enable */
