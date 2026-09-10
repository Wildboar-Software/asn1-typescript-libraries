import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TransferredVolumeRollOver_rO_VolumeIfTariffSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  rO-VolumeSinceLastTariffSwitch	[0]	INTEGER (0..255)			OPTIONAL,
 *  rO-VolumeTariffSwitchInterval	[1]	INTEGER (0..255)			OPTIONAL
 *  }
 * ```
 *
 */
export class TransferredVolumeRollOver_rO_VolumeIfTariffSwitch {
    constructor (
        readonly rO_VolumeSinceLastTariffSwitch: OPTIONAL<INTEGER>,
        readonly rO_VolumeTariffSwitchInterval: OPTIONAL<INTEGER>,
    ) {
        if (rO_VolumeSinceLastTariffSwitch !== undefined && (typeof rO_VolumeSinceLastTariffSwitch === "bigint" ? (rO_VolumeSinceLastTariffSwitch < 0n || rO_VolumeSinceLastTariffSwitch > 255n) : (rO_VolumeSinceLastTariffSwitch < 0 || rO_VolumeSinceLastTariffSwitch > 255))) {
            throw new ASN1OverflowError("TransferredVolumeRollOver_rO_VolumeIfTariffSwitch.rO_VolumeSinceLastTariffSwitch violates INTEGER constraint");
        }
        if (rO_VolumeTariffSwitchInterval !== undefined && (typeof rO_VolumeTariffSwitchInterval === "bigint" ? (rO_VolumeTariffSwitchInterval < 0n || rO_VolumeTariffSwitchInterval > 255n) : (rO_VolumeTariffSwitchInterval < 0 || rO_VolumeTariffSwitchInterval > 255))) {
            throw new ASN1OverflowError("TransferredVolumeRollOver_rO_VolumeIfTariffSwitch.rO_VolumeTariffSwitchInterval violates INTEGER constraint");
        }
    }

    public static _from_object (_o: { [_K in keyof (TransferredVolumeRollOver_rO_VolumeIfTariffSwitch)]: (TransferredVolumeRollOver_rO_VolumeIfTariffSwitch)[_K] }): TransferredVolumeRollOver_rO_VolumeIfTariffSwitch {
        return new TransferredVolumeRollOver_rO_VolumeIfTariffSwitch(_o.rO_VolumeSinceLastTariffSwitch, _o.rO_VolumeTariffSwitchInterval);
    }
}

export const _root_component_type_list_1_spec_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch: $.ComponentSpec[] = [
    new $.ComponentSpec("rO-VolumeSinceLastTariffSwitch", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rO-VolumeTariffSwitchInterval", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch: $.ComponentSpec[] = [];

let _cached_decoder_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch: $.ASN1Decoder<TransferredVolumeRollOver_rO_VolumeIfTariffSwitch> | null = null;
export function _decode_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch (el: _Element): TransferredVolumeRollOver_rO_VolumeIfTariffSwitch {
    if (!_cached_decoder_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch) {
        _cached_decoder_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch = function (el: _Element): TransferredVolumeRollOver_rO_VolumeIfTariffSwitch {
    let rO_VolumeSinceLastTariffSwitch: OPTIONAL<INTEGER>;
    let rO_VolumeTariffSwitchInterval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "rO-VolumeSinceLastTariffSwitch": (_el: _Element): void => { rO_VolumeSinceLastTariffSwitch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rO-VolumeTariffSwitchInterval": (_el: _Element): void => { rO_VolumeTariffSwitchInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch,
        _extension_additions_list_spec_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch,
        _root_component_type_list_2_spec_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch,
        undefined,
    );
    return new TransferredVolumeRollOver_rO_VolumeIfTariffSwitch(
        rO_VolumeSinceLastTariffSwitch,
        rO_VolumeTariffSwitchInterval
    );
        };
    }
    return _cached_decoder_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch(el);
}

let _cached_encoder_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch: $.ASN1Encoder<TransferredVolumeRollOver_rO_VolumeIfTariffSwitch> | null = null;
export function _encode_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch (value: TransferredVolumeRollOver_rO_VolumeIfTariffSwitch, elGetter: $.ASN1Encoder<TransferredVolumeRollOver_rO_VolumeIfTariffSwitch>): _Element {
    if (!_cached_encoder_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch) {
        _cached_encoder_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch = function (value: TransferredVolumeRollOver_rO_VolumeIfTariffSwitch): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.rO_VolumeSinceLastTariffSwitch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.rO_VolumeSinceLastTariffSwitch, $.BER)),
            /* IF_ABSENT  */ ((value.rO_VolumeTariffSwitchInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.rO_VolumeTariffSwitchInterval, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_TransferredVolumeRollOver_rO_VolumeIfTariffSwitch(value, elGetter);
}
