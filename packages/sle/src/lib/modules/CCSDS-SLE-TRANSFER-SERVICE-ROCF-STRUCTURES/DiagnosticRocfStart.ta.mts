/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
// export { Diagnostics, Diagnostics_duplicateInvokeId /* IMPORTED_LONG_NAMED_INTEGER */, duplicateInvokeId /* IMPORTED_SHORT_NAMED_INTEGER */, Diagnostics_otherReason /* IMPORTED_LONG_NAMED_INTEGER */, otherReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Diagnostics, _encode_Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticRocfStart_specific, _encode_DiagnosticRocfStart_specific, DiagnosticRocfStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/DiagnosticRocfStart-specific.ta.mjs";
// export { DiagnosticRocfStart_specific, DiagnosticRocfStart_specific_outOfService /* IMPORTED_LONG_NAMED_INTEGER */, outOfService /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRocfStart_specific_unableToComply /* IMPORTED_LONG_NAMED_INTEGER */, unableToComply /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRocfStart_specific_invalidStartTime /* IMPORTED_LONG_NAMED_INTEGER */, invalidStartTime /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRocfStart_specific_invalidStopTime /* IMPORTED_LONG_NAMED_INTEGER */, invalidStopTime /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRocfStart_specific_missingTimeValue /* IMPORTED_LONG_NAMED_INTEGER */, missingTimeValue /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRocfStart_specific_invalidGvcid /* IMPORTED_LONG_NAMED_INTEGER */, invalidGvcid /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRocfStart_specific_invalidControlWordType /* IMPORTED_LONG_NAMED_INTEGER */, invalidControlWordType /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRocfStart_specific_invalidTcVcid /* IMPORTED_LONG_NAMED_INTEGER */, invalidTcVcid /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticRocfStart_specific_invalidUpdateMode /* IMPORTED_LONG_NAMED_INTEGER */, invalidUpdateMode /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagnosticRocfStart_specific, _encode_DiagnosticRocfStart_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/DiagnosticRocfStart-specific.ta.mjs";


/**
 * @summary DiagnosticRocfStart
 * @description
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
