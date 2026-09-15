import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GPRSEventType, _enum_for_GPRSEventType, _decode_GPRSEventType, _encode_GPRSEventType } from "./GPRSEventType.ta.mjs";
import { MonitorMode, _enum_for_MonitorMode, _decode_MonitorMode, _encode_MonitorMode } from "./MonitorMode.ta.mjs";

/**
 * @summary GPRSEvent
 * @description
 *
 * GPRS event information for monitoring (event type plus `MonitorMode`). (3GPP
 * TS 29.078 V19.0.0 clause 5.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRSEvent ::= SEQUENCE {
 *  gPRSEventType			[0] GPRSEventType,
 *  monitorMode				[1] MonitorMode
 *  }
 * ```
 *
 */
export class GPRSEvent {
    constructor (
        /**
         * @summary `gPRSEventType`.
         * @description
         *
         * GPRS DP to arm or report. (3GPP TS 29.078 V19.0.0 clause 5.1).
         *
         * @public
         * @readonly
         */
        readonly gPRSEventType: GPRSEventType,
        /**
         * @summary `monitorMode`.
         * @description
         *
         * Whether the gprsSSF notifies the gsmSCF of the event.
         * (3GPP TS 29.078 V19.0.0 clause 5.1).
         *
         * @public
         * @readonly
         */
        readonly monitorMode: MonitorMode,
    ) {}

    public static _from_object (_o: { [_K in keyof (GPRSEvent)]: (GPRSEvent)[_K] }): GPRSEvent {
        return new GPRSEvent(_o.gPRSEventType, _o.monitorMode);
    }

    public static _enum_for_gPRSEventType = _enum_for_GPRSEventType;
    public static _enum_for_monitorMode = _enum_for_MonitorMode;
}

export const _root_component_type_list_1_spec_for_GPRSEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("gPRSEventType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("monitorMode", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_GPRSEvent: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GPRSEvent: $.ComponentSpec[] = [];

let _cached_decoder_for_GPRSEvent: $.ASN1Decoder<GPRSEvent> | null = null;
export function _decode_GPRSEvent (el: _Element): GPRSEvent {
    if (!_cached_decoder_for_GPRSEvent) {
        _cached_decoder_for_GPRSEvent = function (el: _Element): GPRSEvent {
    let gPRSEventType!: GPRSEventType;
    let monitorMode!: MonitorMode;
    const callbacks: $.DecodingMap = {
        "gPRSEventType": (_el: _Element): void => { gPRSEventType = $._decode_implicit<GPRSEventType>(() => _decode_GPRSEventType)(_el); },
        "monitorMode": (_el: _Element): void => { monitorMode = $._decode_implicit<MonitorMode>(() => _decode_MonitorMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSEvent,
        _extension_additions_list_spec_for_GPRSEvent,
        _root_component_type_list_2_spec_for_GPRSEvent,
        undefined,
    );
    return new GPRSEvent(
        gPRSEventType,
        monitorMode
    );
        };
    }
    return _cached_decoder_for_GPRSEvent(el);
}

let _cached_encoder_for_GPRSEvent: $.ASN1Encoder<GPRSEvent> | null = null;
export function _encode_GPRSEvent (value: GPRSEvent, elGetter: $.ASN1Encoder<GPRSEvent>): _Element {
    if (!_cached_encoder_for_GPRSEvent) {
        _cached_encoder_for_GPRSEvent = function (value: GPRSEvent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GPRSEventType, $.BER)(value.gPRSEventType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER)
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GPRSEvent(value, elGetter);
}
