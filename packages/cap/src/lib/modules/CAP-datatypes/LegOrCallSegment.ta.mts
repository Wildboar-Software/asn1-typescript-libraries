import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "./CallSegmentID.ta.mjs";
import { type LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";

/**
 * @summary LegOrCallSegment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LegOrCallSegment {PARAMETERS-BOUND : bound} ::= CHOICE {
 callSegmentID			[0] CallSegmentID {bound},
 legID				[1] LegID
 }
 * ```
 *
 */
export type LegOrCallSegment =
{ callSegmentID: CallSegmentID }
    | { legID: LegID };

let _cached_decoder_for_LegOrCallSegment: $.ASN1Decoder<LegOrCallSegment> | null = null;
export function _decode_LegOrCallSegment (el: _Element): LegOrCallSegment {
    if (!_cached_decoder_for_LegOrCallSegment) {
        _cached_decoder_for_LegOrCallSegment = $._decode_inextensible_choice<LegOrCallSegment>({
    "CONTEXT 0": [ "callSegmentID", $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID) ],
    "CONTEXT 1": [ "legID", $._decode_explicit<LegID>(() => _decode_LegID) ]
        });
    }
    return _cached_decoder_for_LegOrCallSegment(el);
}

let _cached_encoder_for_LegOrCallSegment: $.ASN1Encoder<LegOrCallSegment> | null = null;
export function _encode_LegOrCallSegment (value: LegOrCallSegment, elGetter: $.ASN1Encoder<LegOrCallSegment>): _Element {
    if (!_cached_encoder_for_LegOrCallSegment) {
        _cached_encoder_for_LegOrCallSegment = $._encode_choice<LegOrCallSegment>({
    "callSegmentID": $._encode_implicit(_TagClass.context, 0, () => _encode_CallSegmentID, $.BER),
    "legID": $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_LegOrCallSegment(value, elGetter);
}
