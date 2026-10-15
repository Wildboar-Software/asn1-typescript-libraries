/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketFlowSummary, _decode_PacketFlowSummary, _encode_PacketFlowSummary } from "../EpsHI2Operations/PacketFlowSummary.ta.mjs";
// export { PacketFlowSummary, _decode_PacketFlowSummary, _encode_PacketFlowSummary } from "../EpsHI2Operations/PacketFlowSummary.ta.mjs";


/**
 * @summary PacketDataSummaryReport
 * @description
 * 
 * One or more packet-flow summaries, the summary form of the packet data header
 * REPORT (table 10.5.1.1.14). A flow is the source and destination addresses
 * and ports, the transport protocol, and for IPv6 the flow label (clause
 * 10.5.1.1). Table 6.9A uses the same summary for a PDP context when annex B.9
 * carries GPRS IRI (clause 6.5.1.0). An interim summary is sent when the
 * summary timer expires or the packet-count threshold is reached.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketDataSummaryReport  ::=  SEQUENCE OF PacketFlowSummary
 * ```
 */
export
type PacketDataSummaryReport = PacketFlowSummary[]; // SequenceOfType

let _cached_decoder_for_PacketDataSummaryReport: $.ASN1Decoder<PacketDataSummaryReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketDataSummaryReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketDataSummaryReport (el: _Element): PacketDataSummaryReport {
    if (!_cached_decoder_for_PacketDataSummaryReport) { _cached_decoder_for_PacketDataSummaryReport = $._decodeSequenceOf<PacketFlowSummary>(() => _decode_PacketFlowSummary); }
    return _cached_decoder_for_PacketDataSummaryReport(el);
}

let _cached_encoder_for_PacketDataSummaryReport: $.ASN1Encoder<PacketDataSummaryReport> | null = null;

/**
 * @summary Encodes a(n) PacketDataSummaryReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketDataSummaryReport, encoded as an ASN.1 Element.
 */
export
function _encode_PacketDataSummaryReport (value: PacketDataSummaryReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketDataSummaryReport) { _cached_encoder_for_PacketDataSummaryReport = $._encodeSequenceOf<PacketFlowSummary>(() => _encode_PacketFlowSummary, $.BER); }
    return _cached_encoder_for_PacketDataSummaryReport(value, elGetter);
}


/* eslint-enable */
