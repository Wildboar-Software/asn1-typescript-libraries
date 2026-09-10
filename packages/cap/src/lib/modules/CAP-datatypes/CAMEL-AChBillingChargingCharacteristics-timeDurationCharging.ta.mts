import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AudibleIndicator, _decode_AudibleIndicator, _encode_AudibleIndicator } from "./AudibleIndicator.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "./Extensions.ta.mjs";

/**
 * @summary CAMEL_AChBillingChargingCharacteristics_timeDurationCharging
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  maxCallPeriodDuration		[0] INTEGER (1..864000),
 *  releaseIfdurationExceeded		[1] BOOLEAN DEFAULT FALSE,
 *  tariffSwitchInterval		[2] INTEGER (1..86400)			OPTIONAL,
 *  audibleIndicator			[3] AudibleIndicator DEFAULT tone: FALSE,	
 *  extensions				[4] Extensions {bound}			OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class CAMEL_AChBillingChargingCharacteristics_timeDurationCharging {
    constructor (
        readonly maxCallPeriodDuration: INTEGER,
        readonly releaseIfdurationExceeded: OPTIONAL<BOOLEAN>,
        readonly tariffSwitchInterval: OPTIONAL<INTEGER>,
        readonly audibleIndicator: OPTIONAL<AudibleIndicator>,
        readonly extensions: OPTIONAL<Extensions>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CAMEL_AChBillingChargingCharacteristics_timeDurationCharging)]: (CAMEL_AChBillingChargingCharacteristics_timeDurationCharging)[_K] }): CAMEL_AChBillingChargingCharacteristics_timeDurationCharging {
        return new CAMEL_AChBillingChargingCharacteristics_timeDurationCharging(_o.maxCallPeriodDuration, _o.releaseIfdurationExceeded, _o.tariffSwitchInterval, _o.audibleIndicator, _o.extensions, _o._unrecognizedExtensionsList);
    }

    public static get _default_value_for_releaseIfdurationExceeded () { return false; }
    public static get _default_value_for_audibleIndicator () { return { tone: false }; }
}

export const _root_component_type_list_1_spec_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging: $.ComponentSpec[] = [
    new $.ComponentSpec("maxCallPeriodDuration", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("releaseIfdurationExceeded", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tariffSwitchInterval", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("audibleIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4))
];

export const _root_component_type_list_2_spec_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging: $.ComponentSpec[] = [];

let _cached_decoder_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging: $.ASN1Decoder<CAMEL_AChBillingChargingCharacteristics_timeDurationCharging> | null = null;
export function _decode_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging (el: _Element): CAMEL_AChBillingChargingCharacteristics_timeDurationCharging {
    if (!_cached_decoder_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging) {
        _cached_decoder_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging = function (el: _Element): CAMEL_AChBillingChargingCharacteristics_timeDurationCharging {
    let maxCallPeriodDuration!: INTEGER;
    let releaseIfdurationExceeded: OPTIONAL<BOOLEAN> = CAMEL_AChBillingChargingCharacteristics_timeDurationCharging._default_value_for_releaseIfdurationExceeded;
    let tariffSwitchInterval: OPTIONAL<INTEGER>;
    let audibleIndicator: OPTIONAL<AudibleIndicator> = CAMEL_AChBillingChargingCharacteristics_timeDurationCharging._default_value_for_audibleIndicator;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "maxCallPeriodDuration": (_el: _Element): void => { maxCallPeriodDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "releaseIfdurationExceeded": (_el: _Element): void => { releaseIfdurationExceeded = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "tariffSwitchInterval": (_el: _Element): void => { tariffSwitchInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "audibleIndicator": (_el: _Element): void => { audibleIndicator = $._decode_explicit<AudibleIndicator>(() => _decode_AudibleIndicator)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging,
        _extension_additions_list_spec_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging,
        _root_component_type_list_2_spec_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CAMEL_AChBillingChargingCharacteristics_timeDurationCharging(
        maxCallPeriodDuration,
        releaseIfdurationExceeded,
        tariffSwitchInterval,
        audibleIndicator,
        extensions,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging(el);
}

let _cached_encoder_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging: $.ASN1Encoder<CAMEL_AChBillingChargingCharacteristics_timeDurationCharging> | null = null;
export function _encode_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging (value: CAMEL_AChBillingChargingCharacteristics_timeDurationCharging, elGetter: $.ASN1Encoder<CAMEL_AChBillingChargingCharacteristics_timeDurationCharging>): _Element {
    if (!_cached_encoder_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging) {
        _cached_encoder_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging = function (value: CAMEL_AChBillingChargingCharacteristics_timeDurationCharging): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.maxCallPeriodDuration, $.BER),
            /* IF_DEFAULT */ (value.releaseIfdurationExceeded === undefined || $.deepEq(value.releaseIfdurationExceeded, CAMEL_AChBillingChargingCharacteristics_timeDurationCharging._default_value_for_releaseIfdurationExceeded) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.releaseIfdurationExceeded, $.BER)),
            /* IF_ABSENT  */ ((value.tariffSwitchInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.tariffSwitchInterval, $.BER)),
            /* IF_DEFAULT */ (value.audibleIndicator === undefined || $.deepEq(value.audibleIndicator, CAMEL_AChBillingChargingCharacteristics_timeDurationCharging._default_value_for_audibleIndicator) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_AudibleIndicator, $.BER)(value.audibleIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CAMEL_AChBillingChargingCharacteristics_timeDurationCharging(value, elGetter);
}
