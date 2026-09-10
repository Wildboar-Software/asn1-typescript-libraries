import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransferredVolumeRollOver_rO_VolumeIfTariffSwitch, _decode_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch, _encode_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch } from "./TransferredVolumeRollOver-rO-VolumeIfTariffSwitch.ta.mjs";

/**
 * @summary TransferredVolumeRollOver
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferredVolumeRollOver ::= CHOICE {
 *  rO-VolumeIfNoTariffSwitch		[0] INTEGER (0..255),
 *  rO-VolumeIfTariffSwitch		[1] SEQUENCE {
 *  rO-VolumeSinceLastTariffSwitch	[0]	INTEGER (0..255)			OPTIONAL,
 *  rO-VolumeTariffSwitchInterval	[1]	INTEGER (0..255)			OPTIONAL
 *  }
 *  }
 * ```
 *
 */
export type TransferredVolumeRollOver =
{ rO_VolumeIfNoTariffSwitch: INTEGER }
    | { rO_VolumeIfTariffSwitch: TransferredVolumeRollOver_rO_VolumeIfTariffSwitch };

let _cached_decoder_for_TransferredVolumeRollOver: $.ASN1Decoder<TransferredVolumeRollOver> | null = null;
export function _decode_TransferredVolumeRollOver (el: _Element): TransferredVolumeRollOver {
    if (!_cached_decoder_for_TransferredVolumeRollOver) {
        _cached_decoder_for_TransferredVolumeRollOver = $._decode_inextensible_choice<TransferredVolumeRollOver>({
    "CONTEXT 0": [ "rO_VolumeIfNoTariffSwitch", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "rO_VolumeIfTariffSwitch", $._decode_implicit<TransferredVolumeRollOver_rO_VolumeIfTariffSwitch>(() => _decode_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch) ]
        });
    }
    return _cached_decoder_for_TransferredVolumeRollOver(el);
}

let _cached_encoder_for_TransferredVolumeRollOver: $.ASN1Encoder<TransferredVolumeRollOver> | null = null;
export function _encode_TransferredVolumeRollOver (value: TransferredVolumeRollOver, elGetter: $.ASN1Encoder<TransferredVolumeRollOver>): _Element {
    if (!_cached_encoder_for_TransferredVolumeRollOver) {
        _cached_encoder_for_TransferredVolumeRollOver = $._encode_choice<TransferredVolumeRollOver>({
    "rO_VolumeIfNoTariffSwitch": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "rO_VolumeIfTariffSwitch": $._encode_implicit(_TagClass.context, 1, () => _encode_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_TransferredVolumeRollOver(value, elGetter);
}
