/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PacketDataHeaderReport, _decode_PacketDataHeaderReport, _encode_PacketDataHeaderReport } from "../UmtsHI2Operations/PacketDataHeaderReport.ta.mjs";
// export { PacketDataHeaderReport, _decode_PacketDataHeaderReport, _encode_PacketDataHeaderReport } from "../UmtsHI2Operations/PacketDataHeaderReport.ta.mjs";
import { type PacketDataSummaryReport, _decode_PacketDataSummaryReport, _encode_PacketDataSummaryReport } from "../UmtsHI2Operations/PacketDataSummaryReport.ta.mjs";
// export { PacketDataSummaryReport, _decode_PacketDataSummaryReport, _encode_PacketDataSummaryReport } from "../UmtsHI2Operations/PacketDataSummaryReport.ta.mjs";


/**
 * @summary PacketDataHeaderInformation
 * @description
 * 
 * Packet-header IRI for an active PDP context, either one packet at a time or a
 * summary of packet flows. Mandatory on the packet data header information
 * REPORT (table 6.9A). Summary reports are also sent when a flow starts, when
 * the summary timer or the count threshold fires, and when the flow ends,
 * including PDP context deactivation.
 * 
 * For IP fragments, header information on a 6-tuple basis may exist only on the
 * first packet, and later fragments may not be reported. 3GPP TS 33.108, clause
 * 6.5.1.1, tables 6.9A, 6.9B, and 6.9C; annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketDataHeaderInformation  ::=  CHOICE
 * {
 * 
 *     packetDataHeader        [1]    PacketDataHeaderReport,
 *     packetDataSummary    [2]    PacketDataSummaryReport,
 * ...
 * }
 * ```
 */
export
type PacketDataHeaderInformation =
    { packetDataHeader: PacketDataHeaderReport } /* CHOICE_ALT_ROOT */
    | { packetDataSummary: PacketDataSummaryReport } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PacketDataHeaderInformation: $.ASN1Decoder<PacketDataHeaderInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketDataHeaderInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketDataHeaderInformation (el: _Element): PacketDataHeaderInformation {
    if (!_cached_decoder_for_PacketDataHeaderInformation) { _cached_decoder_for_PacketDataHeaderInformation = $._decode_extensible_choice<PacketDataHeaderInformation>({
    "CONTEXT 1": [ "packetDataHeader", $._decode_explicit<PacketDataHeaderReport>(() => _decode_PacketDataHeaderReport) ],
    "CONTEXT 2": [ "packetDataSummary", $._decode_implicit<PacketDataSummaryReport>(() => _decode_PacketDataSummaryReport) ]
}); }
    return _cached_decoder_for_PacketDataHeaderInformation(el);
}

let _cached_encoder_for_PacketDataHeaderInformation: $.ASN1Encoder<PacketDataHeaderInformation> | null = null;

/**
 * @summary Encodes a(n) PacketDataHeaderInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketDataHeaderInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PacketDataHeaderInformation (value: PacketDataHeaderInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketDataHeaderInformation) { _cached_encoder_for_PacketDataHeaderInformation = $._encode_choice<PacketDataHeaderInformation>({
    "packetDataHeader": $._encode_explicit(_TagClass.context, 1, () => _encode_PacketDataHeaderReport, $.BER),
    "packetDataSummary": $._encode_implicit(_TagClass.context, 2, () => _encode_PacketDataSummaryReport, $.BER),
}, $.BER); }
    return _cached_encoder_for_PacketDataHeaderInformation(value, elGetter);
}


/* eslint-enable */
