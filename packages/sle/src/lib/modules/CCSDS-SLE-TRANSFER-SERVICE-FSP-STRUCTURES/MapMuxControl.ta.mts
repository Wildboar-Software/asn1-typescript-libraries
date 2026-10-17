/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AbsolutePriority, _decode_AbsolutePriority, _encode_AbsolutePriority } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/AbsolutePriority.ta.mjs";
import { MapId, _decode_MapId, _encode_MapId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MapId.ta.mjs";


/**
 * @summary MapMuxControl
 * @description
 * 
 * MAP multiplexing control for one VC, as changed by the modify
 * map-multiplexing-control directive. `absolutePriority` is the priority of
 * each MAP in use, 1 to 64 entries. `pollingVector` is the MAP polling vector,
 * 1 to 192 MAP identifiers. When the MAP scheme is FIFO, or MAPs are not used,
 * table 3-11 says the reported map-multiplexing-control parameter is null; that
 * report uses `MuxControl`, which has an empty FIFO alternative.
 * 
 * CCSDS 912.3-B-3, sections 3.12.2.6, 3.10.2.5 (table 3-11), and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MapMuxControl            ::=    CHOICE
 * {  absolutePriority  [0]   SEQUENCE SIZE (1 .. 64) OF AbsolutePriority
 * ,  pollingVector     [1]   SEQUENCE SIZE (1 .. 192) OF MapId
 * }
 * ```
 */
export
type MapMuxControl =
    { absolutePriority: AbsolutePriority[] } /* CHOICE_ALT_ROOT */
    | { pollingVector: MapId[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MapMuxControl: $.ASN1Decoder<MapMuxControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MapMuxControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MapMuxControl (el: _Element): MapMuxControl {
    if (!_cached_decoder_for_MapMuxControl) { _cached_decoder_for_MapMuxControl = $._decode_inextensible_choice<MapMuxControl>({
    "CONTEXT 0": [ "absolutePriority", $._decode_implicit<AbsolutePriority[]>(() => $._decodeSequenceOf<AbsolutePriority>(() => _decode_AbsolutePriority)) ],
    "CONTEXT 1": [ "pollingVector", $._decode_implicit<MapId[]>(() => $._decodeSequenceOf<MapId>(() => _decode_MapId)) ]
}); }
    const _decoded = _cached_decoder_for_MapMuxControl(el);
    if ("absolutePriority" in _decoded) {
        if (_decoded.absolutePriority.length < 1 || _decoded.absolutePriority.length > 64) {
            throw new ASN1SizeError("MapMuxControl.absolutePriority violates SIZE (1..64)");
        }
    }
    if ("pollingVector" in _decoded) {
        if (_decoded.pollingVector.length < 1 || _decoded.pollingVector.length > 192) {
            throw new ASN1SizeError("MapMuxControl.pollingVector violates SIZE (1..192)");
        }
    }
    return _decoded;
}

let _cached_encoder_for_MapMuxControl: $.ASN1Encoder<MapMuxControl> | null = null;

/**
 * @summary Encodes a(n) MapMuxControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MapMuxControl, encoded as an ASN.1 Element.
 */
export
function _encode_MapMuxControl (value: MapMuxControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MapMuxControl) { _cached_encoder_for_MapMuxControl = $._encode_choice<MapMuxControl>({
    "absolutePriority": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<AbsolutePriority>(() => _encode_AbsolutePriority, $.BER), $.BER),
    "pollingVector": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MapId>(() => _encode_MapId, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MapMuxControl(value, elGetter);
}


/* eslint-enable */
