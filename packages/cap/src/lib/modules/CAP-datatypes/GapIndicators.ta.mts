import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Duration, _decode_Duration, _encode_Duration } from "../Core-INAP-CS1-DataTypes/Duration.ta.mjs";
import { type Interval, _decode_Interval, _encode_Interval } from "../Core-INAP-CS1-DataTypes/Interval.ta.mjs";

/**
 * @summary GapIndicators
 * @description
 *
 * Call gapping characteristics. No call gapping when `gapInterval` equals 0.
 * (3GPP TS 29.078 V19.0.0 clauses 5.1 and 11.5)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GapIndicators ::= SEQUENCE {
 *  duration				[0] Duration,
 *  gapInterval				[1] Interval,
 *  ...
 *  }
 * ```
 *
 */
export class GapIndicators {
    constructor (
        /**
         * @summary `duration`.
         * @description
         *
         * Total interval while CallGap for the specified criteria is active.
         * 0 = remove gapping; 2 = network-specific duration; other values =
         * seconds. -1 shall not be used. (3GPP TS 29.078 V19.0.0 clauses 5.1
         * and 11.5)
         *
         * @public
         * @readonly
         */
        readonly duration: Duration,
        /**
         * @summary `gapInterval`.
         * @description
         *
         * Minimum time between calls allowed through. 0 = calls meeting the
         * criteria shall not be rejected (ASN.1: no call gapping); 1 = reject
         * all matching calls; other values = milliseconds. (3GPP TS 29.078
         * V19.0.0 clauses 5.1 and 11.5)
         *
         * @public
         * @readonly
         */
        readonly gapInterval: Interval,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GapIndicators)]: (GapIndicators)[_K] }): GapIndicators {
        return new GapIndicators(_o.duration, _o.gapInterval, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_GapIndicators: $.ComponentSpec[] = [
    new $.ComponentSpec("duration", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("gapInterval", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_GapIndicators: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GapIndicators: $.ComponentSpec[] = [];

let _cached_decoder_for_GapIndicators: $.ASN1Decoder<GapIndicators> | null = null;
export function _decode_GapIndicators (el: _Element): GapIndicators {
    if (!_cached_decoder_for_GapIndicators) {
        _cached_decoder_for_GapIndicators = function (el: _Element): GapIndicators {
    let duration!: Duration;
    let gapInterval!: Interval;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "duration": (_el: _Element): void => { duration = $._decode_implicit<Duration>(() => _decode_Duration)(_el); },
        "gapInterval": (_el: _Element): void => { gapInterval = $._decode_implicit<Interval>(() => _decode_Interval)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GapIndicators,
        _extension_additions_list_spec_for_GapIndicators,
        _root_component_type_list_2_spec_for_GapIndicators,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GapIndicators(
        duration,
        gapInterval,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GapIndicators(el);
}

let _cached_encoder_for_GapIndicators: $.ASN1Encoder<GapIndicators> | null = null;
export function _encode_GapIndicators (value: GapIndicators, elGetter: $.ASN1Encoder<GapIndicators>): _Element {
    if (!_cached_encoder_for_GapIndicators) {
        _cached_encoder_for_GapIndicators = function (value: GapIndicators): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Duration, $.BER)(value.duration, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Interval, $.BER)(value.gapInterval, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GapIndicators(value, elGetter);
}
