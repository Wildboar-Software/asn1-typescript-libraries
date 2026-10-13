/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
// export { Diagnostics, Diagnostics_duplicateInvokeId /* IMPORTED_LONG_NAMED_INTEGER */, duplicateInvokeId /* IMPORTED_SHORT_NAMED_INTEGER */, Diagnostics_otherReason /* IMPORTED_LONG_NAMED_INTEGER */, otherReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Diagnostics, _encode_Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticFspTransferData_specific, _encode_DiagnosticFspTransferData_specific, DiagnosticFspTransferData_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspTransferData-specific.ta.mjs";
// export { DiagnosticFspTransferData_specific, DiagnosticFspTransferData_specific_unableToProcess /* IMPORTED_LONG_NAMED_INTEGER */, unableToProcess /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_unableToStore /* IMPORTED_LONG_NAMED_INTEGER */, unableToStore /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_packetIdentificationOutOfSequence /* IMPORTED_LONG_NAMED_INTEGER */, packetIdentificationOutOfSequence /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_duplicatePacketIdentification /* IMPORTED_LONG_NAMED_INTEGER */, duplicatePacketIdentification /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_inconsistentTimeRange /* IMPORTED_LONG_NAMED_INTEGER */, inconsistentTimeRange /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_invalidTime /* IMPORTED_LONG_NAMED_INTEGER */, invalidTime /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_conflictingProductionTimeIntervals /* IMPORTED_LONG_NAMED_INTEGER */, conflictingProductionTimeIntervals /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_lateSldu /* IMPORTED_LONG_NAMED_INTEGER */, lateSldu /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_invalidDelayTime /* IMPORTED_LONG_NAMED_INTEGER */, invalidDelayTime /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_invalidTransmissionMode /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransmissionMode /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_invalidMap /* IMPORTED_LONG_NAMED_INTEGER */, invalidMap /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_invalidNotificationRequest /* IMPORTED_LONG_NAMED_INTEGER */, invalidNotificationRequest /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_packetTooLong /* IMPORTED_LONG_NAMED_INTEGER */, packetTooLong /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_unsupportedPacketVersion /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedPacketVersion /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_incorrectPacketType /* IMPORTED_LONG_NAMED_INTEGER */, incorrectPacketType /* IMPORTED_SHORT_NAMED_INTEGER */, DiagnosticFspTransferData_specific_invalidPacketApid /* IMPORTED_LONG_NAMED_INTEGER */, invalidPacketApid /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagnosticFspTransferData_specific, _encode_DiagnosticFspTransferData_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspTransferData-specific.ta.mjs";


/**
 * @summary DiagnosticFspTransferData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticFspTransferData            ::=    CHOICE
 * {  common                        [0]   Diagnostics
 * ,  specific                      [1]   INTEGER
 *    {  unableToProcess                     (0)
 *    ,  unableToStore                       (1)
 *    ,  packetIdentificationOutOfSequence   (2)
 *    ,  duplicatePacketIdentification       (3)
 * ,  inconsistentTimeRange                  (4)
 *    ,  invalidTime                         (5)
 *    ,  conflictingProductionTimeIntervals  (6)
 *    ,  lateSldu                            (7)
 *    ,  invalidDelayTime                    (8)
 *    ,  invalidTransmissionMode             (9)
 *    ,  invalidMap                          (10)
 *    ,  invalidNotificationRequest          (11)
 *    ,  packetTooLong                       (12)
 *    ,  unsupportedPacketVersion            (13)
 *    ,  incorrectPacketType                 (14)
 *    ,  invalidPacketApid                   (15)
 *    }
 * }
 * ```
 */
export
type DiagnosticFspTransferData =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticFspTransferData_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticFspTransferData: $.ASN1Decoder<DiagnosticFspTransferData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticFspTransferData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticFspTransferData (el: _Element): DiagnosticFspTransferData {
    if (!_cached_decoder_for_DiagnosticFspTransferData) { _cached_decoder_for_DiagnosticFspTransferData = $._decode_inextensible_choice<DiagnosticFspTransferData>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticFspTransferData_specific>(() => _decode_DiagnosticFspTransferData_specific) ]
}); }
    return _cached_decoder_for_DiagnosticFspTransferData(el);
}

let _cached_encoder_for_DiagnosticFspTransferData: $.ASN1Encoder<DiagnosticFspTransferData> | null = null;

/**
 * @summary Encodes a(n) DiagnosticFspTransferData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticFspTransferData, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticFspTransferData (value: DiagnosticFspTransferData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticFspTransferData) { _cached_encoder_for_DiagnosticFspTransferData = $._encode_choice<DiagnosticFspTransferData>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticFspTransferData_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticFspTransferData(value, elGetter);
}


/* eslint-enable */
