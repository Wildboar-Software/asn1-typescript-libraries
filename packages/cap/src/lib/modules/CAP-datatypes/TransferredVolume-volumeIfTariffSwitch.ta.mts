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


/**
 * @summary TransferredVolume_volumeIfTariffSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 volumeSinceLastTariffSwitch		[0]	INTEGER (0..4294967295),
 volumeTariffSwitchInterval		[1]	INTEGER (0..4294967295)		OPTIONAL
 }
 * ```
 *
 */
export class TransferredVolume_volumeIfTariffSwitch {
    constructor (
        readonly volumeSinceLastTariffSwitch: INTEGER,
        readonly volumeTariffSwitchInterval: OPTIONAL<INTEGER>,
    ) {}

    public static _from_object (_o: { [_K in keyof (TransferredVolume_volumeIfTariffSwitch)]: (TransferredVolume_volumeIfTariffSwitch)[_K] }): TransferredVolume_volumeIfTariffSwitch {
        return new TransferredVolume_volumeIfTariffSwitch(_o.volumeSinceLastTariffSwitch, _o.volumeTariffSwitchInterval);
    }
}

export const _root_component_type_list_1_spec_for_TransferredVolume_volumeIfTariffSwitch: $.ComponentSpec[] = [
    new $.ComponentSpec("volumeSinceLastTariffSwitch", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("volumeTariffSwitchInterval", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_TransferredVolume_volumeIfTariffSwitch: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_TransferredVolume_volumeIfTariffSwitch: $.ComponentSpec[] = [];

let _cached_decoder_for_TransferredVolume_volumeIfTariffSwitch: $.ASN1Decoder<TransferredVolume_volumeIfTariffSwitch> | null = null;
export function _decode_TransferredVolume_volumeIfTariffSwitch (el: _Element): TransferredVolume_volumeIfTariffSwitch {
    if (!_cached_decoder_for_TransferredVolume_volumeIfTariffSwitch) {
        _cached_decoder_for_TransferredVolume_volumeIfTariffSwitch = function (el: _Element): TransferredVolume_volumeIfTariffSwitch {
    let volumeSinceLastTariffSwitch!: INTEGER;
    let volumeTariffSwitchInterval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "volumeSinceLastTariffSwitch": (_el: _Element): void => { volumeSinceLastTariffSwitch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "volumeTariffSwitchInterval": (_el: _Element): void => { volumeTariffSwitchInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TransferredVolume_volumeIfTariffSwitch,
        _extension_additions_list_spec_for_TransferredVolume_volumeIfTariffSwitch,
        _root_component_type_list_2_spec_for_TransferredVolume_volumeIfTariffSwitch,
        undefined,
    );
    return new TransferredVolume_volumeIfTariffSwitch(
        volumeSinceLastTariffSwitch,
        volumeTariffSwitchInterval
    );
        };
    }
    return _cached_decoder_for_TransferredVolume_volumeIfTariffSwitch(el);
}

let _cached_encoder_for_TransferredVolume_volumeIfTariffSwitch: $.ASN1Encoder<TransferredVolume_volumeIfTariffSwitch> | null = null;
export function _encode_TransferredVolume_volumeIfTariffSwitch (value: TransferredVolume_volumeIfTariffSwitch, elGetter: $.ASN1Encoder<TransferredVolume_volumeIfTariffSwitch>): _Element {
    if (!_cached_encoder_for_TransferredVolume_volumeIfTariffSwitch) {
        _cached_encoder_for_TransferredVolume_volumeIfTariffSwitch = function (value: TransferredVolume_volumeIfTariffSwitch, elGetter: $.ASN1Encoder<TransferredVolume_volumeIfTariffSwitch>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.volumeSinceLastTariffSwitch, $.BER),
            /* IF_ABSENT  */ ((value.volumeTariffSwitchInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.volumeTariffSwitchInterval, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_TransferredVolume_volumeIfTariffSwitch(value, elGetter);
}
