import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch, _decode_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch, _encode_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch } from "./ElapsedTimeRollOver-rO-TimeGPRSIfTariffSwitch.ta.mjs";

/**
 * @summary ElapsedTimeRollOver
 * @description
 *
 * Counters of how many times the corresponding `ElapsedTime` parameter-range
 * rolled over. `rO-TimeGPRSIfNoTariffSwitch` and the tariff-switch pair may be
 * absent if no rollover occurred.
 * (3GPP TS 29.078 V19.0.0 clauses 5.1 and 13.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ElapsedTimeRollOver ::= CHOICE {
 *  rO-TimeGPRSIfNoTariffSwitch		[0] INTEGER (0..255),
 *  rO-TimeGPRSIfTariffSwitch		[1] SEQUENCE {
 *  rO-TimeGPRSSinceLastTariffSwitch	[0] INTEGER (0..255)			OPTIONAL,
 *  rO-TimeGPRSTariffSwitchInterval	[1] INTEGER (0..255)			OPTIONAL
 *  }
 *  }
 * ```
 *
 */
export type ElapsedTimeRollOver =
{ rO_TimeGPRSIfNoTariffSwitch: INTEGER }
    | { rO_TimeGPRSIfTariffSwitch: ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch };

let _cached_decoder_for_ElapsedTimeRollOver: $.ASN1Decoder<ElapsedTimeRollOver> | null = null;
export function _decode_ElapsedTimeRollOver (el: _Element): ElapsedTimeRollOver {
    if (!_cached_decoder_for_ElapsedTimeRollOver) {
        _cached_decoder_for_ElapsedTimeRollOver = $._decode_inextensible_choice<ElapsedTimeRollOver>({
    "CONTEXT 0": [ "rO_TimeGPRSIfNoTariffSwitch", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("ElapsedTimeRollOver.rO_TimeGPRSIfNoTariffSwitch violates INTEGER constraint");
    }
    return value;
}) ],
    "CONTEXT 1": [ "rO_TimeGPRSIfTariffSwitch", $._decode_implicit<ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch>(() => _decode_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch) ]
        });
    }
    return _cached_decoder_for_ElapsedTimeRollOver(el);
}

let _cached_encoder_for_ElapsedTimeRollOver: $.ASN1Encoder<ElapsedTimeRollOver> | null = null;
export function _encode_ElapsedTimeRollOver (value: ElapsedTimeRollOver, elGetter: $.ASN1Encoder<ElapsedTimeRollOver>): _Element {
    if (!_cached_encoder_for_ElapsedTimeRollOver) {
        _cached_encoder_for_ElapsedTimeRollOver = $._encode_choice<ElapsedTimeRollOver>({
    "rO_TimeGPRSIfNoTariffSwitch": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "rO_TimeGPRSIfTariffSwitch": $._encode_implicit(_TagClass.context, 1, () => _encode_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_ElapsedTimeRollOver(value, elGetter);
}
