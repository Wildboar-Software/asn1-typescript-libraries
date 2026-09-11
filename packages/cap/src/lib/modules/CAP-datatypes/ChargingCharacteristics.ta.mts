import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ChargingCharacteristics
 * @description
 *
 * GPRS charging limit for ApplyChargingGPRS. `maxTransferredVolume` is bytes
 * (1..4294967295). `maxElapsedTime` is seconds (1..86400).
 * (3GPP TS 29.078 V19.0.0 clause 5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChargingCharacteristics ::= CHOICE {
 *  maxTransferredVolume		[0]	INTEGER (1..4294967295),
 *  maxElapsedTime			[1] INTEGER (1..86400)
 *  }
 * ```
 *
 */
export type ChargingCharacteristics =
{ maxTransferredVolume: INTEGER }
    | { maxElapsedTime: INTEGER };

let _cached_decoder_for_ChargingCharacteristics: $.ASN1Decoder<ChargingCharacteristics> | null = null;
export function _decode_ChargingCharacteristics (el: _Element): ChargingCharacteristics {
    if (!_cached_decoder_for_ChargingCharacteristics) {
        _cached_decoder_for_ChargingCharacteristics = $._decode_inextensible_choice<ChargingCharacteristics>({
    "CONTEXT 0": [ "maxTransferredVolume", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 1n || value > 4294967295n) : (value < 1 || value > 4294967295))) {
        throw new ASN1OverflowError("ChargingCharacteristics.maxTransferredVolume violates INTEGER constraint");
    }
    return value;
}) ],
    "CONTEXT 1": [ "maxElapsedTime", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 1n || value > 86400n) : (value < 1 || value > 86400))) {
        throw new ASN1OverflowError("ChargingCharacteristics.maxElapsedTime violates INTEGER constraint");
    }
    return value;
}) ]
        });
    }
    return _cached_decoder_for_ChargingCharacteristics(el);
}

let _cached_encoder_for_ChargingCharacteristics: $.ASN1Encoder<ChargingCharacteristics> | null = null;
export function _encode_ChargingCharacteristics (value: ChargingCharacteristics, elGetter: $.ASN1Encoder<ChargingCharacteristics>): _Element {
    if (!_cached_encoder_for_ChargingCharacteristics) {
        _cached_encoder_for_ChargingCharacteristics = $._encode_choice<ChargingCharacteristics>({
    "maxTransferredVolume": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "maxElapsedTime": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_ChargingCharacteristics(value, elGetter);
}
