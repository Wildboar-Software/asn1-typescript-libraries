/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Diagnostics, _decode_Diagnostics, _encode_Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
// export { Diagnostics, Diagnostics_duplicateInvokeId /* IMPORTED_LONG_NAMED_INTEGER */, duplicateInvokeId /* IMPORTED_SHORT_NAMED_INTEGER */, Diagnostics_otherReason /* IMPORTED_LONG_NAMED_INTEGER */, otherReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Diagnostics, _encode_Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { DiagnosticCltuTransferData_specific, _decode_DiagnosticCltuTransferData_specific, _encode_DiagnosticCltuTransferData_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuTransferData-specific.ta.mjs";
// export { DiagnosticCltuTransferData_specific, DiagnosticCltuTransferData_specific_unableToProcess /* IMPORTED_LONG_NAMED_INTEGER */, unableToProcess /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticCltuTransferData_specific_unableToStore /* IMPORTED_LONG_NAMED_INTEGER */, unableToStore /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticCltuTransferData_specific_outOfSequence /* IMPORTED_LONG_NAMED_INTEGER */, outOfSequence /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticCltuTransferData_specific_inconsistentTimeRange /* IMPORTED_LONG_NAMED_INTEGER */, inconsistentTimeRange /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticCltuTransferData_specific_invalidTime /* IMPORTED_LONG_NAMED_INTEGER */, invalidTime /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticCltuTransferData_specific_lateSldu /* IMPORTED_LONG_NAMED_INTEGER */, lateSldu /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticCltuTransferData_specific_invalidDelayTime /* IMPORTED_LONG_NAMED_INTEGER */, invalidDelayTime /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticCltuTransferData_specific_cltuError /* IMPORTED_LONG_NAMED_INTEGER */, cltuError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagnosticCltuTransferData_specific, _encode_DiagnosticCltuTransferData_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuTransferData-specific.ta.mjs";


/**
 * @summary DiagnosticCltuTransferData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticCltuTransferData     ::=    CHOICE
 * {  common                                 [0]   Diagnostics
 * ,  specific                               [1]   INTEGER
 *    {  unableToProcess                  (0)
 *    ,  unableToStore                    (1)
 *    ,  outOfSequence                    (2)
 *    ,  inconsistentTimeRange            (3)
 *    ,  invalidTime                      (4)
 *    ,  lateSldu                         (5)
 *    ,  invalidDelayTime                 (6)
 *    ,  cltuError                        (7)
 *    }
 * }
 * ```
 */
export
type DiagnosticCltuTransferData =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticCltuTransferData_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticCltuTransferData: $.ASN1Decoder<DiagnosticCltuTransferData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticCltuTransferData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticCltuTransferData (el: _Element): DiagnosticCltuTransferData {
    if (!_cached_decoder_for_DiagnosticCltuTransferData) { _cached_decoder_for_DiagnosticCltuTransferData = $._decode_inextensible_choice<DiagnosticCltuTransferData>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticCltuTransferData_specific>(() => _decode_DiagnosticCltuTransferData_specific) ]
}); }
    return _cached_decoder_for_DiagnosticCltuTransferData(el);
}

let _cached_encoder_for_DiagnosticCltuTransferData: $.ASN1Encoder<DiagnosticCltuTransferData> | null = null;

/**
 * @summary Encodes a(n) DiagnosticCltuTransferData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticCltuTransferData, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticCltuTransferData (value: DiagnosticCltuTransferData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticCltuTransferData) { _cached_encoder_for_DiagnosticCltuTransferData = $._encode_choice<DiagnosticCltuTransferData>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticCltuTransferData_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticCltuTransferData(value, elGetter);
}


/* eslint-enable */
