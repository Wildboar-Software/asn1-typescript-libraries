import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  rO-TimeGPRSSinceLastTariffSwitch	[0] INTEGER (0..255)			OPTIONAL,
 *  rO-TimeGPRSTariffSwitchInterval	[1] INTEGER (0..255)			OPTIONAL
 *  }
 * ```
 *
 */
export class ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch {
    constructor (
        readonly rO_TimeGPRSSinceLastTariffSwitch: OPTIONAL<INTEGER>,
        readonly rO_TimeGPRSTariffSwitchInterval: OPTIONAL<INTEGER>,
    ) {
        if (rO_TimeGPRSSinceLastTariffSwitch !== undefined && (typeof rO_TimeGPRSSinceLastTariffSwitch === "bigint" ? (rO_TimeGPRSSinceLastTariffSwitch < 0n || rO_TimeGPRSSinceLastTariffSwitch > 255n) : (rO_TimeGPRSSinceLastTariffSwitch < 0 || rO_TimeGPRSSinceLastTariffSwitch > 255))) {
            throw new ASN1OverflowError("ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch.rO_TimeGPRSSinceLastTariffSwitch violates INTEGER constraint");
        }
        if (rO_TimeGPRSTariffSwitchInterval !== undefined && (typeof rO_TimeGPRSTariffSwitchInterval === "bigint" ? (rO_TimeGPRSTariffSwitchInterval < 0n || rO_TimeGPRSTariffSwitchInterval > 255n) : (rO_TimeGPRSTariffSwitchInterval < 0 || rO_TimeGPRSTariffSwitchInterval > 255))) {
            throw new ASN1OverflowError("ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch.rO_TimeGPRSTariffSwitchInterval violates INTEGER constraint");
        }
    }

    public static _from_object (_o: { [_K in keyof (ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch)]: (ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch)[_K] }): ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch {
        return new ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch(_o.rO_TimeGPRSSinceLastTariffSwitch, _o.rO_TimeGPRSTariffSwitchInterval);
    }
}

export const _root_component_type_list_1_spec_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch: $.ComponentSpec[] = [
    new $.ComponentSpec("rO-TimeGPRSSinceLastTariffSwitch", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rO-TimeGPRSTariffSwitchInterval", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch: $.ComponentSpec[] = [];

let _cached_decoder_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch: $.ASN1Decoder<ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch> | null = null;
export function _decode_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch (el: _Element): ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch {
    if (!_cached_decoder_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch) {
        _cached_decoder_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch = function (el: _Element): ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch {
    let rO_TimeGPRSSinceLastTariffSwitch: OPTIONAL<INTEGER>;
    let rO_TimeGPRSTariffSwitchInterval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "rO-TimeGPRSSinceLastTariffSwitch": (_el: _Element): void => { rO_TimeGPRSSinceLastTariffSwitch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rO-TimeGPRSTariffSwitchInterval": (_el: _Element): void => { rO_TimeGPRSTariffSwitchInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch,
        _extension_additions_list_spec_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch,
        _root_component_type_list_2_spec_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch,
        undefined,
    );
    return new ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch(
        rO_TimeGPRSSinceLastTariffSwitch,
        rO_TimeGPRSTariffSwitchInterval
    );
        };
    }
    return _cached_decoder_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch(el);
}

let _cached_encoder_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch: $.ASN1Encoder<ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch> | null = null;
export function _encode_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch (value: ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch, elGetter: $.ASN1Encoder<ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch>): _Element {
    if (!_cached_encoder_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch) {
        _cached_encoder_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch = function (value: ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.rO_TimeGPRSSinceLastTariffSwitch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.rO_TimeGPRSSinceLastTariffSwitch, $.BER)),
            /* IF_ABSENT  */ ((value.rO_TimeGPRSTariffSwitchInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.rO_TimeGPRSTariffSwitchInterval, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_ElapsedTimeRollOver_rO_TimeGPRSIfTariffSwitch(value, elGetter);
}
