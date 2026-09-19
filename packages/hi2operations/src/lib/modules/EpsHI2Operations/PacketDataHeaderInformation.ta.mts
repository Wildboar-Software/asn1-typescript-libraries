/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketDataHeaderReport, _decode_PacketDataHeaderReport, _encode_PacketDataHeaderReport } from "../EpsHI2Operations/PacketDataHeaderReport.ta.mjs";
// export { PacketDataHeaderReport, _decode_PacketDataHeaderReport, _encode_PacketDataHeaderReport } from "../EpsHI2Operations/PacketDataHeaderReport.ta.mjs";
import { PacketDataSummaryReport, _decode_PacketDataSummaryReport, _encode_PacketDataSummaryReport } from "../EpsHI2Operations/PacketDataSummaryReport.ta.mjs";
// export { PacketDataSummaryReport, _decode_PacketDataSummaryReport, _encode_PacketDataSummaryReport } from "../EpsHI2Operations/PacketDataSummaryReport.ta.mjs";


/**
 * @summary PacketDataHeaderInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketDataHeaderInformation  ::=  CHOICE
 * {
 *  packetDataHeader [1] PacketDataHeaderReport,
 *  packetDataSummary [2] PacketDataSummaryReport,
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
