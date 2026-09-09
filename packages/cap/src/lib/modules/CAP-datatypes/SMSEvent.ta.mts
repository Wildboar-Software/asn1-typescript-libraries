import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventTypeSMS, _enum_for_EventTypeSMS, _decode_EventTypeSMS, _encode_EventTypeSMS } from "./EventTypeSMS.ta.mjs";
import { MonitorMode, _enum_for_MonitorMode, _decode_MonitorMode, _encode_MonitorMode } from "./MonitorMode.ta.mjs";

/**
 * @summary SMSEvent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMSEvent ::= SEQUENCE {
 eventTypeSMS			[0] EventTypeSMS,
 monitorMode				[1] MonitorMode
 }
 * ```
 *
 */
export class SMSEvent {
    constructor (
        readonly eventTypeSMS: EventTypeSMS,
        readonly monitorMode: MonitorMode,
    ) {}

    public static _from_object (_o: { [_K in keyof (SMSEvent)]: (SMSEvent)[_K] }): SMSEvent {
        return new SMSEvent(_o.eventTypeSMS, _o.monitorMode);
    }

    public static _enum_for_eventTypeSMS = _enum_for_EventTypeSMS;
    public static _enum_for_monitorMode = _enum_for_MonitorMode;
}

export const _root_component_type_list_1_spec_for_SMSEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTypeSMS", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("monitorMode", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_SMSEvent: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_SMSEvent: $.ComponentSpec[] = [];

let _cached_decoder_for_SMSEvent: $.ASN1Decoder<SMSEvent> | null = null;
export function _decode_SMSEvent (el: _Element): SMSEvent {
    if (!_cached_decoder_for_SMSEvent) {
        _cached_decoder_for_SMSEvent = function (el: _Element): SMSEvent {
    let eventTypeSMS!: EventTypeSMS;
    let monitorMode!: MonitorMode;
    const callbacks: $.DecodingMap = {
        "eventTypeSMS": (_el: _Element): void => { eventTypeSMS = $._decode_implicit<EventTypeSMS>(() => _decode_EventTypeSMS)(_el); },
        "monitorMode": (_el: _Element): void => { monitorMode = $._decode_implicit<MonitorMode>(() => _decode_MonitorMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMSEvent,
        _extension_additions_list_spec_for_SMSEvent,
        _root_component_type_list_2_spec_for_SMSEvent,
        undefined,
    );
    return new SMSEvent(
        eventTypeSMS,
        monitorMode
    );
        };
    }
    return _cached_decoder_for_SMSEvent(el);
}

let _cached_encoder_for_SMSEvent: $.ASN1Encoder<SMSEvent> | null = null;
export function _encode_SMSEvent (value: SMSEvent, elGetter: $.ASN1Encoder<SMSEvent>): _Element {
    if (!_cached_encoder_for_SMSEvent) {
        _cached_encoder_for_SMSEvent = function (value: SMSEvent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeSMS, $.BER)(value.eventTypeSMS, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER)
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_SMSEvent(value, elGetter);
}
