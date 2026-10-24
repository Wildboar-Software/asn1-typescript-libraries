/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, type Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticRocfStart_specific, _encode_DiagnosticRocfStart_specific, type DiagnosticRocfStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/DiagnosticRocfStart-specific.ta.mjs";


/**
 * @summary DiagnosticRocfStart
 * @description
 * 
 * Negative-result diagnostic of ROCF-START. The common alternative carries the
 * diagnostics shared by SLE operations: duplicateInvokeId (100) when invoke-ID
 * matches an invocation still awaiting confirmation, and otherReason (127),
 * used only when no listed diagnostic fits. The specific alternative carries
 * the ROCF-START diagnostics in section 3.4.2.12, items b through j. The
 * provider should test in the order those diagnostics are listed and report
 * the first problem found.
 *
 * CCSDS 911.5-B-4, sections 3.1.1.4, 3.1.3.4, 3.4.2.12, and annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticRocfStart      ::=    CHOICE
 * {  common            [0]   Diagnostics
 * ,  specific          [1]   INTEGER
 *    {  outOfService            (0)
 *    ,  unableToComply          (1)
 *    ,  invalidStartTime        (2)
 *    ,  invalidStopTime         (3)
 *    ,  missingTimeValue        (4)
 *    ,  invalidGvcid            (5)
 *    ,  invalidControlWordType  (6)
 *    ,  invalidTcVcid           (7)
 *    ,  invalidUpdateMode       (8)
 *    }
 * }
 * ```
 */
export
type DiagnosticRocfStart =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticRocfStart_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticRocfStart: $.ASN1Decoder<DiagnosticRocfStart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticRocfStart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticRocfStart (el: _Element): DiagnosticRocfStart {
    if (!_cached_decoder_for_DiagnosticRocfStart) { _cached_decoder_for_DiagnosticRocfStart = $._decode_inextensible_choice<DiagnosticRocfStart>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticRocfStart_specific>(() => _decode_DiagnosticRocfStart_specific) ]
}); }
    return _cached_decoder_for_DiagnosticRocfStart(el);
}

let _cached_encoder_for_DiagnosticRocfStart: $.ASN1Encoder<DiagnosticRocfStart> | null = null;

/**
 * @summary Encodes a(n) DiagnosticRocfStart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticRocfStart, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticRocfStart (value: DiagnosticRocfStart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticRocfStart) { _cached_encoder_for_DiagnosticRocfStart = $._encode_choice<DiagnosticRocfStart>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticRocfStart_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticRocfStart(value, elGetter);
}


/* eslint-enable */
