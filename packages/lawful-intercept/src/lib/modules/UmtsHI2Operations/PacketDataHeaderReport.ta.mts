/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketDataHeaderMapped, _decode_PacketDataHeaderMapped, _encode_PacketDataHeaderMapped } from "../UmtsHI2Operations/PacketDataHeaderMapped.ta.mjs";
// export { PacketDataHeaderMapped, _decode_PacketDataHeaderMapped, _encode_PacketDataHeaderMapped } from "../UmtsHI2Operations/PacketDataHeaderMapped.ta.mjs";
import { PacketDataHeaderCopy, _decode_PacketDataHeaderCopy, _encode_PacketDataHeaderCopy } from "../UmtsHI2Operations/PacketDataHeaderCopy.ta.mjs";
// export { PacketDataHeaderCopy, _decode_PacketDataHeaderCopy, _encode_PacketDataHeaderCopy } from "../UmtsHI2Operations/PacketDataHeaderCopy.ta.mjs";


/**
 * @summary PacketDataHeaderReport
 * @description
 * 
 * Per-packet packet-data header information: either mapped header fields or a
 * copy of the headers, excluding contents (table 6.9B). 3GPP TS 33.108, clause
 * 6.5.1.1 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketDataHeaderReport  ::=  CHOICE
 * {
 * 
 *     packetDataHeaderMapped    [1]    PacketDataHeaderMapped,
 *     packetDataHeaderCopy    [2]    PacketDataHeaderCopy,
 * ...
 * }
 * ```
 */
export
type PacketDataHeaderReport =
    { packetDataHeaderMapped: PacketDataHeaderMapped } /* CHOICE_ALT_ROOT */
    | { packetDataHeaderCopy: PacketDataHeaderCopy } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PacketDataHeaderReport: $.ASN1Decoder<PacketDataHeaderReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketDataHeaderReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketDataHeaderReport (el: _Element): PacketDataHeaderReport {
    if (!_cached_decoder_for_PacketDataHeaderReport) { _cached_decoder_for_PacketDataHeaderReport = $._decode_extensible_choice<PacketDataHeaderReport>({
    "CONTEXT 1": [ "packetDataHeaderMapped", $._decode_implicit<PacketDataHeaderMapped>(() => _decode_PacketDataHeaderMapped) ],
    "CONTEXT 2": [ "packetDataHeaderCopy", $._decode_implicit<PacketDataHeaderCopy>(() => _decode_PacketDataHeaderCopy) ]
}); }
    return _cached_decoder_for_PacketDataHeaderReport(el);
}

let _cached_encoder_for_PacketDataHeaderReport: $.ASN1Encoder<PacketDataHeaderReport> | null = null;

/**
 * @summary Encodes a(n) PacketDataHeaderReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketDataHeaderReport, encoded as an ASN.1 Element.
 */
export
function _encode_PacketDataHeaderReport (value: PacketDataHeaderReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketDataHeaderReport) { _cached_encoder_for_PacketDataHeaderReport = $._encode_choice<PacketDataHeaderReport>({
    "packetDataHeaderMapped": $._encode_implicit(_TagClass.context, 1, () => _encode_PacketDataHeaderMapped, $.BER),
    "packetDataHeaderCopy": $._encode_implicit(_TagClass.context, 2, () => _encode_PacketDataHeaderCopy, $.BER),
}, $.BER); }
    return _cached_encoder_for_PacketDataHeaderReport(value, elGetter);
}


/* eslint-enable */
