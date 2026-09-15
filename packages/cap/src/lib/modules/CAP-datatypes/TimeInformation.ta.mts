import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TimeIfNoTariffSwitch, _decode_TimeIfNoTariffSwitch, _encode_TimeIfNoTariffSwitch } from "./TimeIfNoTariffSwitch.ta.mjs";
import { TimeIfTariffSwitch, _decode_TimeIfTariffSwitch, _encode_TimeIfTariffSwitch } from "./TimeIfTariffSwitch.ta.mjs";

/**
 * @summary TimeInformation
 * @description
 *
 * Call duration information, with or without a tariff switch. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeInformation ::= CHOICE {
 *  timeIfNoTariffSwitch		[0] TimeIfNoTariffSwitch,
 *  timeIfTariffSwitch			[1] TimeIfTariffSwitch
 *  }
 * ```
 *
 */
export type TimeInformation =
{ timeIfNoTariffSwitch: TimeIfNoTariffSwitch }
    | { timeIfTariffSwitch: TimeIfTariffSwitch };

let _cached_decoder_for_TimeInformation: $.ASN1Decoder<TimeInformation> | null = null;
export function _decode_TimeInformation (el: _Element): TimeInformation {
    if (!_cached_decoder_for_TimeInformation) {
        _cached_decoder_for_TimeInformation = $._decode_inextensible_choice<TimeInformation>({
    "CONTEXT 0": [ "timeIfNoTariffSwitch", $._decode_implicit<TimeIfNoTariffSwitch>(() => _decode_TimeIfNoTariffSwitch) ],
    "CONTEXT 1": [ "timeIfTariffSwitch", $._decode_implicit<TimeIfTariffSwitch>(() => _decode_TimeIfTariffSwitch) ]
        });
    }
    return _cached_decoder_for_TimeInformation(el);
}

let _cached_encoder_for_TimeInformation: $.ASN1Encoder<TimeInformation> | null = null;
export function _encode_TimeInformation (value: TimeInformation, elGetter: $.ASN1Encoder<TimeInformation>): _Element {
    if (!_cached_encoder_for_TimeInformation) {
        _cached_encoder_for_TimeInformation = $._encode_choice<TimeInformation>({
    "timeIfNoTariffSwitch": $._encode_implicit(_TagClass.context, 0, () => _encode_TimeIfNoTariffSwitch, $.BER),
    "timeIfTariffSwitch": $._encode_implicit(_TagClass.context, 1, () => _encode_TimeIfTariffSwitch, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_TimeInformation(value, elGetter);
}
