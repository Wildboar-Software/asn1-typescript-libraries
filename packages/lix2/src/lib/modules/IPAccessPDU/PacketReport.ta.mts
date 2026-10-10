/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketReportHeader, _decode_PacketReportHeader, _encode_PacketReportHeader } from "../IPAccessPDU/PacketReportHeader.ta.mjs";
import { PacketReportSummary, _decode_PacketReportSummary, _encode_PacketReportSummary } from "../IPAccessPDU/PacketReportSummary.ta.mjs";


/**
 * @summary PacketReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketReport ::= CHOICE
 * {
 *     header  [1] PacketReportHeader,
 *     summary [2] PacketReportSummary,
 *     ...
 * }
 * ```
 * 
 */
export
type PacketReport =
    | { header: PacketReportHeader } /* CHOICE_ALT_ROOT */
    | { summary: PacketReportSummary } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PacketReport: $.ASN1Decoder<PacketReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketReport (el: _Element): PacketReport {
    if (!_cached_decoder_for_PacketReport) { _cached_decoder_for_PacketReport = $._decode_extensible_choice<PacketReport>({
    "CONTEXT 1": [ "header", $._decode_implicit<PacketReportHeader>(() => _decode_PacketReportHeader) ],
    "CONTEXT 2": [ "summary", $._decode_implicit<PacketReportSummary>(() => _decode_PacketReportSummary) ]
}); }
    return _cached_decoder_for_PacketReport(el);
}

let _cached_encoder_for_PacketReport: $.ASN1Encoder<PacketReport> | null = null;

/**
 * @summary Encodes a(n) PacketReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketReport, encoded as an ASN.1 Element.
 */
export
function _encode_PacketReport (value: PacketReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketReport) { _cached_encoder_for_PacketReport = $._encode_choice<PacketReport>({
    "header": $._encode_implicit(_TagClass.context, 1, () => _encode_PacketReportHeader, $.BER),
    "summary": $._encode_implicit(_TagClass.context, 2, () => _encode_PacketReportSummary, $.BER),
}, $.BER); }
    return _cached_encoder_for_PacketReport(value, elGetter);
}


/* eslint-enable */
