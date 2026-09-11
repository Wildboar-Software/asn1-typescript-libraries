import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransferredVolume_volumeIfTariffSwitch, _decode_TransferredVolume_volumeIfTariffSwitch, _encode_TransferredVolume_volumeIfTariffSwitch } from "./TransferredVolume-volumeIfTariffSwitch.ta.mjs";

/**
 * @summary TransferredVolume
 * @description
 *
 * Transferred volume; `volumeIfNoTariffSwitch`, `volumeSinceLastTariffSwitch`
 * and `volumeTariffSwitchInterval` are measured in bytes. (3GPP TS 29.078
 * V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferredVolume ::= CHOICE {
 *  volumeIfNoTariffSwitch		[0] INTEGER (0..4294967295),
 *  volumeIfTariffSwitch		[1] SEQUENCE {
 *  volumeSinceLastTariffSwitch		[0]	INTEGER (0..4294967295),
 *  volumeTariffSwitchInterval		[1]	INTEGER (0..4294967295)		OPTIONAL
 *  }
 *  }
 * ```
 *
 */
export type TransferredVolume =
{ volumeIfNoTariffSwitch: INTEGER }
    | { volumeIfTariffSwitch: TransferredVolume_volumeIfTariffSwitch };

let _cached_decoder_for_TransferredVolume: $.ASN1Decoder<TransferredVolume> | null = null;
export function _decode_TransferredVolume (el: _Element): TransferredVolume {
    if (!_cached_decoder_for_TransferredVolume) {
        _cached_decoder_for_TransferredVolume = $._decode_inextensible_choice<TransferredVolume>({
    "CONTEXT 0": [ "volumeIfNoTariffSwitch", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 4294967295n) : (value < 0 || value > 4294967295))) {
        throw new ASN1OverflowError("TransferredVolume.volumeIfNoTariffSwitch violates INTEGER constraint");
    }
    return value;
}) ],
    "CONTEXT 1": [ "volumeIfTariffSwitch", $._decode_implicit<TransferredVolume_volumeIfTariffSwitch>(() => _decode_TransferredVolume_volumeIfTariffSwitch) ]
        });
    }
    return _cached_decoder_for_TransferredVolume(el);
}

let _cached_encoder_for_TransferredVolume: $.ASN1Encoder<TransferredVolume> | null = null;
export function _encode_TransferredVolume (value: TransferredVolume, elGetter: $.ASN1Encoder<TransferredVolume>): _Element {
    if (!_cached_encoder_for_TransferredVolume) {
        _cached_encoder_for_TransferredVolume = $._encode_choice<TransferredVolume>({
    "volumeIfNoTariffSwitch": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "volumeIfTariffSwitch": $._encode_implicit(_TagClass.context, 1, () => _encode_TransferredVolume_volumeIfTariffSwitch, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_TransferredVolume(value, elGetter);
}
