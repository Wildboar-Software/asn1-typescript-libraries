import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ElapsedTime_timeGPRSIfTariffSwitch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  timeGPRSSinceLastTariffSwitch	[0] INTEGER (0..86400),
 *  timeGPRSTariffSwitchInterval	[1] INTEGER (0..86400)			OPTIONAL
 *  }
 * ```
 *
 */
export class ElapsedTime_timeGPRSIfTariffSwitch {
    constructor (
        /**
         * @summary `timeGPRSSinceLastTariffSwitch`.
         * @description
         *
         * Elapsed time since the event that started time count or the last
         * tariff switch, in seconds.
         * (3GPP TS 29.078 V19.0.0 clauses 5.1 and 13.3).
         *
         * @public
         * @readonly
         */
        readonly timeGPRSSinceLastTariffSwitch: INTEGER,
        /**
         * @summary `timeGPRSTariffSwitchInterval`.
         * @description
         *
         * Present only if a tariff switch was detected after the event that
         * started time count in the current period. Time between that event or
         * the previous switch and the last switch, in seconds.
         * (3GPP TS 29.078 V19.0.0 clauses 5.1 and 13.3).
         *
         * @public
         * @readonly
         */
        readonly timeGPRSTariffSwitchInterval: OPTIONAL<INTEGER>,
    ) {
        if ((typeof timeGPRSSinceLastTariffSwitch === "bigint" ? (timeGPRSSinceLastTariffSwitch < 0n || timeGPRSSinceLastTariffSwitch > 86400n) : (timeGPRSSinceLastTariffSwitch < 0 || timeGPRSSinceLastTariffSwitch > 86400))) {
            throw new ASN1OverflowError("ElapsedTime_timeGPRSIfTariffSwitch.timeGPRSSinceLastTariffSwitch violates INTEGER constraint");
        }
        if (timeGPRSTariffSwitchInterval !== undefined && (typeof timeGPRSTariffSwitchInterval === "bigint" ? (timeGPRSTariffSwitchInterval < 0n || timeGPRSTariffSwitchInterval > 86400n) : (timeGPRSTariffSwitchInterval < 0 || timeGPRSTariffSwitchInterval > 86400))) {
            throw new ASN1OverflowError("ElapsedTime_timeGPRSIfTariffSwitch.timeGPRSTariffSwitchInterval violates INTEGER constraint");
        }
    }

    public static _from_object (_o: { [_K in keyof (ElapsedTime_timeGPRSIfTariffSwitch)]: (ElapsedTime_timeGPRSIfTariffSwitch)[_K] }): ElapsedTime_timeGPRSIfTariffSwitch {
        return new ElapsedTime_timeGPRSIfTariffSwitch(_o.timeGPRSSinceLastTariffSwitch, _o.timeGPRSTariffSwitchInterval);
    }
}

export const _root_component_type_list_1_spec_for_ElapsedTime_timeGPRSIfTariffSwitch: $.ComponentSpec[] = [
    new $.ComponentSpec("timeGPRSSinceLastTariffSwitch", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeGPRSTariffSwitchInterval", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_ElapsedTime_timeGPRSIfTariffSwitch: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_ElapsedTime_timeGPRSIfTariffSwitch: $.ComponentSpec[] = [];

let _cached_decoder_for_ElapsedTime_timeGPRSIfTariffSwitch: $.ASN1Decoder<ElapsedTime_timeGPRSIfTariffSwitch> | null = null;
export function _decode_ElapsedTime_timeGPRSIfTariffSwitch (el: _Element): ElapsedTime_timeGPRSIfTariffSwitch {
    if (!_cached_decoder_for_ElapsedTime_timeGPRSIfTariffSwitch) {
        _cached_decoder_for_ElapsedTime_timeGPRSIfTariffSwitch = function (el: _Element): ElapsedTime_timeGPRSIfTariffSwitch {
    let timeGPRSSinceLastTariffSwitch!: INTEGER;
    let timeGPRSTariffSwitchInterval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "timeGPRSSinceLastTariffSwitch": (_el: _Element): void => { timeGPRSSinceLastTariffSwitch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "timeGPRSTariffSwitchInterval": (_el: _Element): void => { timeGPRSTariffSwitchInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ElapsedTime_timeGPRSIfTariffSwitch,
        _extension_additions_list_spec_for_ElapsedTime_timeGPRSIfTariffSwitch,
        _root_component_type_list_2_spec_for_ElapsedTime_timeGPRSIfTariffSwitch,
        undefined,
    );
    return new ElapsedTime_timeGPRSIfTariffSwitch(
        timeGPRSSinceLastTariffSwitch,
        timeGPRSTariffSwitchInterval
    );
        };
    }
    return _cached_decoder_for_ElapsedTime_timeGPRSIfTariffSwitch(el);
}

let _cached_encoder_for_ElapsedTime_timeGPRSIfTariffSwitch: $.ASN1Encoder<ElapsedTime_timeGPRSIfTariffSwitch> | null = null;
export function _encode_ElapsedTime_timeGPRSIfTariffSwitch (value: ElapsedTime_timeGPRSIfTariffSwitch, elGetter: $.ASN1Encoder<ElapsedTime_timeGPRSIfTariffSwitch>): _Element {
    if (!_cached_encoder_for_ElapsedTime_timeGPRSIfTariffSwitch) {
        _cached_encoder_for_ElapsedTime_timeGPRSIfTariffSwitch = function (value: ElapsedTime_timeGPRSIfTariffSwitch): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.timeGPRSSinceLastTariffSwitch, $.BER),
            /* IF_ABSENT  */ ((value.timeGPRSTariffSwitchInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.timeGPRSTariffSwitchInterval, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_ElapsedTime_timeGPRSIfTariffSwitch(value, elGetter);
}
