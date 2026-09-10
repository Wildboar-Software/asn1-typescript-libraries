import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ElapsedTime_timeGPRSIfTariffSwitch, _decode_ElapsedTime_timeGPRSIfTariffSwitch, _encode_ElapsedTime_timeGPRSIfTariffSwitch } from "./ElapsedTime-timeGPRSIfTariffSwitch.ta.mjs";

/**
 * @summary ElapsedTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ElapsedTime ::= CHOICE {
 *  timeGPRSIfNoTariffSwitch		[0] INTEGER (0..86400),
 *  timeGPRSIfTariffSwitch		[1] SEQUENCE {
 *  timeGPRSSinceLastTariffSwitch	[0] INTEGER (0..86400),
 *  timeGPRSTariffSwitchInterval	[1] INTEGER (0..86400)			OPTIONAL
 *  }
 *  }
 * ```
 *
 */
export type ElapsedTime =
{ timeGPRSIfNoTariffSwitch: INTEGER }
    | { timeGPRSIfTariffSwitch: ElapsedTime_timeGPRSIfTariffSwitch };

let _cached_decoder_for_ElapsedTime: $.ASN1Decoder<ElapsedTime> | null = null;
export function _decode_ElapsedTime (el: _Element): ElapsedTime {
    if (!_cached_decoder_for_ElapsedTime) {
        _cached_decoder_for_ElapsedTime = $._decode_inextensible_choice<ElapsedTime>({
    "CONTEXT 0": [ "timeGPRSIfNoTariffSwitch", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 86400n) : (value < 0 || value > 86400))) {
        throw new ASN1OverflowError("ElapsedTime.timeGPRSIfNoTariffSwitch violates INTEGER constraint");
    }
    return value;
}) ],
    "CONTEXT 1": [ "timeGPRSIfTariffSwitch", $._decode_implicit<ElapsedTime_timeGPRSIfTariffSwitch>(() => _decode_ElapsedTime_timeGPRSIfTariffSwitch) ]
        });
    }
    return _cached_decoder_for_ElapsedTime(el);
}

let _cached_encoder_for_ElapsedTime: $.ASN1Encoder<ElapsedTime> | null = null;
export function _encode_ElapsedTime (value: ElapsedTime, elGetter: $.ASN1Encoder<ElapsedTime>): _Element {
    if (!_cached_encoder_for_ElapsedTime) {
        _cached_encoder_for_ElapsedTime = $._encode_choice<ElapsedTime>({
    "timeGPRSIfNoTariffSwitch": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "timeGPRSIfTariffSwitch": $._encode_implicit(_TagClass.context, 1, () => _encode_ElapsedTime_timeGPRSIfTariffSwitch, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_ElapsedTime(value, elGetter);
}
