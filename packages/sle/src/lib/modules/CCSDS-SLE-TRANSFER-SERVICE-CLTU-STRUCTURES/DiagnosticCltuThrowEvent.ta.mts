/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticCltuThrowEvent_specific, _encode_DiagnosticCltuThrowEvent_specific, DiagnosticCltuThrowEvent_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuThrowEvent-specific.ta.mjs";


/**
 * @summary DiagnosticCltuThrowEvent
 * @description
 * 
 * Why CLTU-THROW-EVENT failed. common carries duplicate invoke id and other
 * reason. specific carries operation not supported, out of sequence, and no
 * such event. On any negative result the event is not forwarded. CCSDS
 * 912.1-B-5, section 3.11.2.9.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuThrowEvent          ::=    CHOICE
 * {  common                                 [0]   Diagnostics
 * ,  specific                               [1]   INTEGER
 *    {  operationNotSupported            (0)
 *    ,  eventInvocIdOutOfSequence        (1)
 *    ,  noSuchEvent                      (2)
 *    }
 * }
 * ```
 */
export
type DiagnosticCltuThrowEvent =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticCltuThrowEvent_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticCltuThrowEvent: $.ASN1Decoder<DiagnosticCltuThrowEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticCltuThrowEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticCltuThrowEvent (el: _Element): DiagnosticCltuThrowEvent {
    if (!_cached_decoder_for_DiagnosticCltuThrowEvent) { _cached_decoder_for_DiagnosticCltuThrowEvent = $._decode_inextensible_choice<DiagnosticCltuThrowEvent>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticCltuThrowEvent_specific>(() => _decode_DiagnosticCltuThrowEvent_specific) ]
}); }
    return _cached_decoder_for_DiagnosticCltuThrowEvent(el);
}

let _cached_encoder_for_DiagnosticCltuThrowEvent: $.ASN1Encoder<DiagnosticCltuThrowEvent> | null = null;

/**
 * @summary Encodes a(n) DiagnosticCltuThrowEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticCltuThrowEvent, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticCltuThrowEvent (value: DiagnosticCltuThrowEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticCltuThrowEvent) { _cached_encoder_for_DiagnosticCltuThrowEvent = $._encode_choice<DiagnosticCltuThrowEvent>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticCltuThrowEvent_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticCltuThrowEvent(value, elGetter);
}


/* eslint-enable */
