/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Diagnostics, _encode_Diagnostics, Diagnostics } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Diagnostics.ta.mjs";
import { _decode_DiagnosticScheduleStatusReport_specific, _encode_DiagnosticScheduleStatusReport_specific, DiagnosticScheduleStatusReport_specific } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/DiagnosticScheduleStatusReport-specific.ta.mjs";


/**
 * @summary DiagnosticScheduleStatusReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticScheduleStatusReport      ::=    CHOICE
 * { common                       [0]    Diagnostics
 * , specific                     [1]    INTEGER
 *    { notSupportedInThisDeliveryMode      (0)   -- not used for
 *                                                -- version 1 forward transfer
 *                                                -- services
 *    ,     alreadyStopped                  (1)
 *    ,     invalidReportingCycle           (2)
 *    }
 * }
 * ```
 */
export
type DiagnosticScheduleStatusReport =
    { common: Diagnostics } /* CHOICE_ALT_ROOT */
    | { specific: DiagnosticScheduleStatusReport_specific } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagnosticScheduleStatusReport: $.ASN1Decoder<DiagnosticScheduleStatusReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagnosticScheduleStatusReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagnosticScheduleStatusReport (el: _Element): DiagnosticScheduleStatusReport {
    if (!_cached_decoder_for_DiagnosticScheduleStatusReport) { _cached_decoder_for_DiagnosticScheduleStatusReport = $._decode_inextensible_choice<DiagnosticScheduleStatusReport>({
    "CONTEXT 0": [ "common", $._decode_implicit<Diagnostics>(() => _decode_Diagnostics) ],
    "CONTEXT 1": [ "specific", $._decode_implicit<DiagnosticScheduleStatusReport_specific>(() => _decode_DiagnosticScheduleStatusReport_specific) ]
}); }
    return _cached_decoder_for_DiagnosticScheduleStatusReport(el);
}

let _cached_encoder_for_DiagnosticScheduleStatusReport: $.ASN1Encoder<DiagnosticScheduleStatusReport> | null = null;

/**
 * @summary Encodes a(n) DiagnosticScheduleStatusReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagnosticScheduleStatusReport, encoded as an ASN.1 Element.
 */
export
function _encode_DiagnosticScheduleStatusReport (value: DiagnosticScheduleStatusReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagnosticScheduleStatusReport) { _cached_encoder_for_DiagnosticScheduleStatusReport = $._encode_choice<DiagnosticScheduleStatusReport>({
    "common": $._encode_implicit(_TagClass.context, 0, () => _encode_Diagnostics, $.BER),
    "specific": $._encode_implicit(_TagClass.context, 1, () => _encode_DiagnosticScheduleStatusReport_specific, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagnosticScheduleStatusReport(value, elGetter);
}


/* eslint-enable */
