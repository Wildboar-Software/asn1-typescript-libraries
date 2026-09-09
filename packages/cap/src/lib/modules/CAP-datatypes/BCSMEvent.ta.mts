import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventTypeBCSM, _enum_for_EventTypeBCSM, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "./EventTypeBCSM.ta.mjs";
import { MonitorMode, _enum_for_MonitorMode, _decode_MonitorMode, _encode_MonitorMode } from "./MonitorMode.ta.mjs";
import { type LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { type DpSpecificCriteria, _decode_DpSpecificCriteria, _encode_DpSpecificCriteria } from "./DpSpecificCriteria.ta.mjs";

/**
 * @summary BCSMEvent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BCSMEvent{PARAMETERS-BOUND : bound} ::= SEQUENCE {
 eventTypeBCSM			[0] EventTypeBCSM,
 monitorMode				[1] MonitorMode,
 legID				[2] LegID					OPTIONAL,
 dpSpecificCriteria			[30] DpSpecificCriteria {bound}		OPTIONAL,
 automaticRearm			[50] NULL					OPTIONAL,
 ...
 }
 * ```
 *
 */
export class BCSMEvent {
    constructor (
        readonly eventTypeBCSM: EventTypeBCSM,
        readonly monitorMode: MonitorMode,
        readonly legID: OPTIONAL<LegID>,
        readonly dpSpecificCriteria: OPTIONAL<DpSpecificCriteria>,
        readonly automaticRearm: OPTIONAL<NULL>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (BCSMEvent)]: (BCSMEvent)[_K] }): BCSMEvent {
        return new BCSMEvent(_o.eventTypeBCSM, _o.monitorMode, _o.legID, _o.dpSpecificCriteria, _o.automaticRearm, _o._unrecognizedExtensionsList);
    }

    public static _enum_for_eventTypeBCSM = _enum_for_EventTypeBCSM;
    public static _enum_for_monitorMode = _enum_for_MonitorMode;
}

export const _root_component_type_list_1_spec_for_BCSMEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTypeBCSM", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("monitorMode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dpSpecificCriteria", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("automaticRearm", true, $.hasTag(_TagClass.context, 50))
];

export const _root_component_type_list_2_spec_for_BCSMEvent: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_BCSMEvent: $.ComponentSpec[] = [];

let _cached_decoder_for_BCSMEvent: $.ASN1Decoder<BCSMEvent> | null = null;
export function _decode_BCSMEvent (el: _Element): BCSMEvent {
    if (!_cached_decoder_for_BCSMEvent) {
        _cached_decoder_for_BCSMEvent = function (el: _Element): BCSMEvent {
    let eventTypeBCSM!: EventTypeBCSM;
    let monitorMode!: MonitorMode;
    let legID: OPTIONAL<LegID>;
    let dpSpecificCriteria: OPTIONAL<DpSpecificCriteria>;
    let automaticRearm: OPTIONAL<NULL>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "monitorMode": (_el: _Element): void => { monitorMode = $._decode_implicit<MonitorMode>(() => _decode_MonitorMode)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "dpSpecificCriteria": (_el: _Element): void => { dpSpecificCriteria = $._decode_explicit<DpSpecificCriteria>(() => _decode_DpSpecificCriteria)(_el); },
        "automaticRearm": (_el: _Element): void => { automaticRearm = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BCSMEvent,
        _extension_additions_list_spec_for_BCSMEvent,
        _root_component_type_list_2_spec_for_BCSMEvent,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BCSMEvent(
        eventTypeBCSM,
        monitorMode,
        legID,
        dpSpecificCriteria,
        automaticRearm,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_BCSMEvent(el);
}

let _cached_encoder_for_BCSMEvent: $.ASN1Encoder<BCSMEvent> | null = null;
export function _encode_BCSMEvent (value: BCSMEvent, elGetter: $.ASN1Encoder<BCSMEvent>): _Element {
    if (!_cached_encoder_for_BCSMEvent) {
        _cached_encoder_for_BCSMEvent = function (value: BCSMEvent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.dpSpecificCriteria === undefined) ? undefined : $._encode_explicit(_TagClass.context, 30, () => _encode_DpSpecificCriteria, $.BER)(value.dpSpecificCriteria, $.BER)),
            /* IF_ABSENT  */ ((value.automaticRearm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => $._encodeNull, $.BER)(value.automaticRearm, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_BCSMEvent(value, elGetter);
}
