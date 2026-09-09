import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TransferredVolume, _decode_TransferredVolume, _encode_TransferredVolume } from "./TransferredVolume.ta.mjs";
import { type ElapsedTime, _decode_ElapsedTime, _encode_ElapsedTime } from "./ElapsedTime.ta.mjs";

/**
 * @summary ChargingResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChargingResult ::= CHOICE {
 transferredVolume			[0] TransferredVolume,
 elapsedTime				[1]	ElapsedTime
 }
 * ```
 *
 */
export type ChargingResult =
{ transferredVolume: TransferredVolume }
    | { elapsedTime: ElapsedTime };

let _cached_decoder_for_ChargingResult: $.ASN1Decoder<ChargingResult> | null = null;
export function _decode_ChargingResult (el: _Element): ChargingResult {
    if (!_cached_decoder_for_ChargingResult) {
        _cached_decoder_for_ChargingResult = $._decode_inextensible_choice<ChargingResult>({
    "CONTEXT 0": [ "transferredVolume", $._decode_explicit<TransferredVolume>(() => _decode_TransferredVolume) ],
    "CONTEXT 1": [ "elapsedTime", $._decode_explicit<ElapsedTime>(() => _decode_ElapsedTime) ]
        });
    }
    return _cached_decoder_for_ChargingResult(el);
}

let _cached_encoder_for_ChargingResult: $.ASN1Encoder<ChargingResult> | null = null;
export function _encode_ChargingResult (value: ChargingResult, elGetter: $.ASN1Encoder<ChargingResult>): _Element {
    if (!_cached_encoder_for_ChargingResult) {
        _cached_encoder_for_ChargingResult = $._encode_choice<ChargingResult>({
    "transferredVolume": $._encode_explicit(_TagClass.context, 0, () => _encode_TransferredVolume, $.BER),
    "elapsedTime": $._encode_explicit(_TagClass.context, 1, () => _encode_ElapsedTime, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_ChargingResult(value, elGetter);
}
