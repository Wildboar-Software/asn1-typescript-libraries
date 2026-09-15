import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TransferredVolumeRollOver, _decode_TransferredVolumeRollOver, _encode_TransferredVolumeRollOver } from "./TransferredVolumeRollOver.ta.mjs";
import { type ElapsedTimeRollOver, _decode_ElapsedTimeRollOver, _encode_ElapsedTimeRollOver } from "./ElapsedTimeRollOver.ta.mjs";

/**
 * @summary ChargingRollOver
 * @description
 *
 * `transferredVolumeRollOver` shall be reported if ApplyChargingReportGPRS
 * reports volume and a roll-over occurred in one or more volume counters;
 * otherwise absent. `elapsedTimeRollOver` likewise for duration counters.
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChargingRollOver ::= CHOICE {
 *  transferredVolumeRollOver		[0] TransferredVolumeRollOver,
 *  elapsedTimeRollOver			[1]	ElapsedTimeRollOver
 *  }
 * ```
 *
 */
export type ChargingRollOver =
{ transferredVolumeRollOver: TransferredVolumeRollOver }
    | { elapsedTimeRollOver: ElapsedTimeRollOver };

let _cached_decoder_for_ChargingRollOver: $.ASN1Decoder<ChargingRollOver> | null = null;
export function _decode_ChargingRollOver (el: _Element): ChargingRollOver {
    if (!_cached_decoder_for_ChargingRollOver) {
        _cached_decoder_for_ChargingRollOver = $._decode_inextensible_choice<ChargingRollOver>({
    "CONTEXT 0": [ "transferredVolumeRollOver", $._decode_explicit<TransferredVolumeRollOver>(() => _decode_TransferredVolumeRollOver) ],
    "CONTEXT 1": [ "elapsedTimeRollOver", $._decode_explicit<ElapsedTimeRollOver>(() => _decode_ElapsedTimeRollOver) ]
        });
    }
    return _cached_decoder_for_ChargingRollOver(el);
}

let _cached_encoder_for_ChargingRollOver: $.ASN1Encoder<ChargingRollOver> | null = null;
export function _encode_ChargingRollOver (value: ChargingRollOver, elGetter: $.ASN1Encoder<ChargingRollOver>): _Element {
    if (!_cached_encoder_for_ChargingRollOver) {
        _cached_encoder_for_ChargingRollOver = $._encode_choice<ChargingRollOver>({
    "transferredVolumeRollOver": $._encode_explicit(_TagClass.context, 0, () => _encode_TransferredVolumeRollOver, $.BER),
    "elapsedTimeRollOver": $._encode_explicit(_TagClass.context, 1, () => _encode_ElapsedTimeRollOver, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_ChargingRollOver(value, elGetter);
}
