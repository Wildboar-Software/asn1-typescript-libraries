/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticFspTransferData_specific, _encode_DiagnosticFspTransferData_specific, DiagnosticFspTransferData_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspTransferData-specific.ta.mjs";


/**
 * @summary DiagnosticFspTransferData
 * @description
 * 
 * Negative-result diagnostic of FSP-TRANSFER-DATA. A positive result omits the
 * diagnostic and queues the Packet. The provider stays in state 3. `common`
 * carries `duplicateInvokeId` and `otherReason`. `specific` carries the codes
 * in section 3.6.2.18. Checks follow the order in that section.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.18, 3.6.3, and 3.1.3.5.
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
