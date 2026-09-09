import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary TimeIfTariffSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeIfTariffSwitch ::= SEQUENCE {
 timeSinceTariffSwitch		[0] INTEGER(0..864000),
 tariffSwitchInterval		[1] INTEGER(1..864000)			OPTIONAL
 }
 * ```
 *
 */
export class TimeIfTariffSwitch {
    constructor (
        readonly timeSinceTariffSwitch: INTEGER,
        readonly tariffSwitchInterval: OPTIONAL<INTEGER>,
    ) {}

    public static _from_object (_o: { [_K in keyof (TimeIfTariffSwitch)]: (TimeIfTariffSwitch)[_K] }): TimeIfTariffSwitch {
        return new TimeIfTariffSwitch(_o.timeSinceTariffSwitch, _o.tariffSwitchInterval);
    }
}

export const _root_component_type_list_1_spec_for_TimeIfTariffSwitch: $.ComponentSpec[] = [
    new $.ComponentSpec("timeSinceTariffSwitch", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffSwitchInterval", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_TimeIfTariffSwitch: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_TimeIfTariffSwitch: $.ComponentSpec[] = [];

let _cached_decoder_for_TimeIfTariffSwitch: $.ASN1Decoder<TimeIfTariffSwitch> | null = null;
export function _decode_TimeIfTariffSwitch (el: _Element): TimeIfTariffSwitch {
    if (!_cached_decoder_for_TimeIfTariffSwitch) {
        _cached_decoder_for_TimeIfTariffSwitch = function (el: _Element): TimeIfTariffSwitch {
    let timeSinceTariffSwitch!: INTEGER;
    let tariffSwitchInterval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "timeSinceTariffSwitch": (_el: _Element): void => { timeSinceTariffSwitch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "tariffSwitchInterval": (_el: _Element): void => { tariffSwitchInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TimeIfTariffSwitch,
        _extension_additions_list_spec_for_TimeIfTariffSwitch,
        _root_component_type_list_2_spec_for_TimeIfTariffSwitch,
        undefined,
    );
    return new TimeIfTariffSwitch(
        timeSinceTariffSwitch,
        tariffSwitchInterval
    );
        };
    }
    return _cached_decoder_for_TimeIfTariffSwitch(el);
}

let _cached_encoder_for_TimeIfTariffSwitch: $.ASN1Encoder<TimeIfTariffSwitch> | null = null;
export function _encode_TimeIfTariffSwitch (value: TimeIfTariffSwitch, elGetter: $.ASN1Encoder<TimeIfTariffSwitch>): _Element {
    if (!_cached_encoder_for_TimeIfTariffSwitch) {
        _cached_encoder_for_TimeIfTariffSwitch = function (value: TimeIfTariffSwitch): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.timeSinceTariffSwitch, $.BER),
            /* IF_ABSENT  */ ((value.tariffSwitchInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tariffSwitchInterval, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_TimeIfTariffSwitch(value, elGetter);
}
