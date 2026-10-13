/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AbsolutePriority, _decode_AbsolutePriority, _encode_AbsolutePriority } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/AbsolutePriority.ta.mjs";
// export { AbsolutePriority, _decode_AbsolutePriority, _encode_AbsolutePriority } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/AbsolutePriority.ta.mjs";
import { VcOrMapId, _decode_VcOrMapId, _encode_VcOrMapId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/VcOrMapId.ta.mjs";
// export { VcOrMapId, _decode_VcOrMapId, _encode_VcOrMapId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/VcOrMapId.ta.mjs";


/**
 * @summary MuxControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MuxControl                  ::=    CHOICE
 * {  muxSchemeIsFifo      [0]   NULL
 * ,  muxSchemeIsPriority  [1]   SEQUENCE SIZE (1 .. 64) OF AbsolutePriority
 * ,  muxSchemeIsVector    [2]   SEQUENCE SIZE (1 .. 192) OF VcOrMapId
 * }
 * ```
 */
export
type MuxControl =
    { muxSchemeIsFifo: NULL } /* CHOICE_ALT_ROOT */
    | { muxSchemeIsPriority: AbsolutePriority[] } /* CHOICE_ALT_ROOT */
    | { muxSchemeIsVector: VcOrMapId[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MuxControl: $.ASN1Decoder<MuxControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MuxControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MuxControl (el: _Element): MuxControl {
    if (!_cached_decoder_for_MuxControl) { _cached_decoder_for_MuxControl = $._decode_inextensible_choice<MuxControl>({
    "CONTEXT 0": [ "muxSchemeIsFifo", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "muxSchemeIsPriority", $._decode_implicit<AbsolutePriority[]>(() => $._decodeSequenceOf<AbsolutePriority>(() => _decode_AbsolutePriority)) ],
    "CONTEXT 2": [ "muxSchemeIsVector", $._decode_implicit<VcOrMapId[]>(() => $._decodeSequenceOf<VcOrMapId>(() => _decode_VcOrMapId)) ]
}); }
    const _decoded = _cached_decoder_for_MuxControl(el);
    if ("muxSchemeIsPriority" in _decoded) {
        if (_decoded.muxSchemeIsPriority.length < 1 || _decoded.muxSchemeIsPriority.length > 64) {
            throw new ASN1SizeError("MuxControl.muxSchemeIsPriority violates SIZE (1..64)");
        }
    }
    if ("muxSchemeIsVector" in _decoded) {
        if (_decoded.muxSchemeIsVector.length < 1 || _decoded.muxSchemeIsVector.length > 192) {
            throw new ASN1SizeError("MuxControl.muxSchemeIsVector violates SIZE (1..192)");
        }
    }
    return _decoded;
}

let _cached_encoder_for_MuxControl: $.ASN1Encoder<MuxControl> | null = null;

/**
 * @summary Encodes a(n) MuxControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MuxControl, encoded as an ASN.1 Element.
 */
export
function _encode_MuxControl (value: MuxControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MuxControl) { _cached_encoder_for_MuxControl = $._encode_choice<MuxControl>({
    "muxSchemeIsFifo": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "muxSchemeIsPriority": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<AbsolutePriority>(() => _encode_AbsolutePriority, $.BER), $.BER),
    "muxSchemeIsVector": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<VcOrMapId>(() => _encode_VcOrMapId, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MuxControl(value, elGetter);
}


/* eslint-enable */
