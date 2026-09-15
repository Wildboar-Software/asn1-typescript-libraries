/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventTypeCharging, _decode_EventTypeCharging, _encode_EventTypeCharging } from "../IN-CS2-datatypes/EventTypeCharging.ta.mjs";
// export { EventTypeCharging, _decode_EventTypeCharging, _encode_EventTypeCharging } from "../IN-CS2-datatypes/EventTypeCharging.ta.mjs";
import { MonitorMode, _enum_for_MonitorMode, _decode_MonitorMode, _encode_MonitorMode } from "../IN-CS2-datatypes/MonitorMode.ta.mjs";
// export { MonitorMode, _enum_for_MonitorMode, MonitorMode_interrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, interrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode } from "../IN-CS2-datatypes/MonitorMode.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";


/**
 * @summary ChargingEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingEvent{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   eventTypeCharging  [0]  EventTypeCharging{bound},
 *   monitorMode        [1]  MonitorMode,
 *   legID              [2]  LegID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ChargingEvent {
    constructor (
        /**
         * @summary `eventTypeCharging`.
         * @public
         * @readonly
         */
        readonly eventTypeCharging: EventTypeCharging,
        /**
         * @summary `monitorMode`.
         * @public
         * @readonly
         */
        readonly monitorMode: MonitorMode,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>
    ) {}

    /**
     * @summary Restructures an object into a ChargingEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingEvent`.
     * @returns {ChargingEvent}
     */
    public static _from_object (_o: { [_K in keyof (ChargingEvent)]: (ChargingEvent)[_K] }): ChargingEvent {
        return new ChargingEvent(_o.eventTypeCharging, _o.monitorMode, _o.legID);
    }

        /**
         * @summary The enum used as the type of the component `monitorMode`
         * @public
         * @static
         */

    public static _enum_for_monitorMode = _enum_for_MonitorMode;
}

/**
 * @summary The Leading Root Component Types of ChargingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTypeCharging", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("monitorMode", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ChargingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingEvent: $.ASN1Decoder<ChargingEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingEvent (el: _Element): ChargingEvent {
    if (!_cached_decoder_for_ChargingEvent) { _cached_decoder_for_ChargingEvent = function (el: _Element): ChargingEvent {
    let eventTypeCharging!: EventTypeCharging;
    let monitorMode!: MonitorMode;
    let legID: OPTIONAL<LegID>;
    const callbacks: $.DecodingMap = {
        "eventTypeCharging": (_el: _Element): void => { eventTypeCharging = $._decode_implicit<EventTypeCharging>(() => _decode_EventTypeCharging)(_el); },
        "monitorMode": (_el: _Element): void => { monitorMode = $._decode_implicit<MonitorMode>(() => _decode_MonitorMode)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargingEvent,
        _extension_additions_list_spec_for_ChargingEvent,
        _root_component_type_list_2_spec_for_ChargingEvent,
        undefined,
    );
    return new ChargingEvent(
        eventTypeCharging,
        monitorMode,
        legID
    );
}; }
    return _cached_decoder_for_ChargingEvent(el);
}

let _cached_encoder_for_ChargingEvent: $.ASN1Encoder<ChargingEvent> | null = null;

/**
 * @summary Encodes a(n) ChargingEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingEvent (value: ChargingEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingEvent) { _cached_encoder_for_ChargingEvent = function (value: ChargingEvent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeCharging, $.BER)(value.eventTypeCharging, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChargingEvent(value, elGetter);
}


/* eslint-enable */
