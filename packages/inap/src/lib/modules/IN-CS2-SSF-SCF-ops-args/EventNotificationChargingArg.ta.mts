/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EventTypeCharging, _decode_EventTypeCharging, _encode_EventTypeCharging } from "../IN-CS2-datatypes/EventTypeCharging.ta.mjs";
// export { EventTypeCharging, _decode_EventTypeCharging, _encode_EventTypeCharging } from "../IN-CS2-datatypes/EventTypeCharging.ta.mjs";
import { type EventSpecificInformationCharging, _decode_EventSpecificInformationCharging, _encode_EventSpecificInformationCharging } from "../IN-CS2-datatypes/EventSpecificInformationCharging.ta.mjs";
// export { EventSpecificInformationCharging, _decode_EventSpecificInformationCharging, _encode_EventSpecificInformationCharging } from "../IN-CS2-datatypes/EventSpecificInformationCharging.ta.mjs";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { MonitorMode, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode, _enum_for_MonitorMode } from "../IN-CS2-datatypes/MonitorMode.ta.mjs";
// export { MonitorMode, _enum_for_MonitorMode, MonitorMode_interrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, interrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode } from "../IN-CS2-datatypes/MonitorMode.ta.mjs";


/**
 * @summary EventNotificationChargingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventNotificationChargingArg ::= SEQUENCE {
 *   eventTypeCharging                 [0]  EventTypeCharging,
 *   eventSpecificInformationCharging
 *     [1]  EventSpecificInformationCharging OPTIONAL,
 *   legID                             [2]  LegID OPTIONAL,
 *   extensions
 *     [3]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   monitorMode                       [30]  MonitorMode DEFAULT notifyAndContinue,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventNotificationChargingArg {
    /**
     * @summary `eventTypeCharging`.
     * @public
     * @readonly
     */
    readonly eventTypeCharging: EventTypeCharging;
    /**
     * @summary `eventSpecificInformationCharging`.
     * @public
     * @readonly
     */
    readonly eventSpecificInformationCharging: OPTIONAL<EventSpecificInformationCharging>;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary `monitorMode`.
     * @public
     * @readonly
     */
    readonly monitorMode: OPTIONAL<MonitorMode>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eventTypeCharging: EventTypeCharging,
        eventSpecificInformationCharging?: OPTIONAL<EventSpecificInformationCharging>,
        legID?: OPTIONAL<LegID>,
        extensions?: OPTIONAL<ExtensionField[]>,
        monitorMode?: OPTIONAL<MonitorMode>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eventTypeCharging = eventTypeCharging;
        this.eventSpecificInformationCharging = eventSpecificInformationCharging;
        this.legID = legID;
        this.extensions = extensions;
        this.monitorMode = monitorMode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventNotificationChargingArg
     * @description
     * 
     * This takes an `object` and converts it to a `EventNotificationChargingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventNotificationChargingArg`.
     * @returns {EventNotificationChargingArg}
     */
    public static _from_object (_o: { [_K in keyof (EventNotificationChargingArg)]: (EventNotificationChargingArg)[_K] }): EventNotificationChargingArg {
        return new EventNotificationChargingArg(_o.eventTypeCharging, _o.eventSpecificInformationCharging, _o.legID, _o.extensions, _o.monitorMode, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `monitorMode`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_monitorMode () { return MonitorMode_notifyAndContinue; }        /**
         * @summary The enum used as the type of the component `monitorMode`
         * @public
         * @static
         */

    public static _enum_for_monitorMode = _enum_for_MonitorMode;
}

/**
 * @summary The Leading Root Component Types of EventNotificationChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventNotificationChargingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTypeCharging", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventSpecificInformationCharging", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("monitorMode", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of EventNotificationChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventNotificationChargingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventNotificationChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventNotificationChargingArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventNotificationChargingArg: $.ASN1Decoder<EventNotificationChargingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventNotificationChargingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventNotificationChargingArg (el: _Element): EventNotificationChargingArg {
    if (!_cached_decoder_for_EventNotificationChargingArg) { _cached_decoder_for_EventNotificationChargingArg = function (el: _Element): EventNotificationChargingArg {
    let eventTypeCharging!: EventTypeCharging;
    let eventSpecificInformationCharging: OPTIONAL<EventSpecificInformationCharging>;
    let legID: OPTIONAL<LegID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let monitorMode: OPTIONAL<MonitorMode> = EventNotificationChargingArg._default_value_for_monitorMode;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventTypeCharging": (_el: _Element): void => { eventTypeCharging = $._decode_implicit<EventTypeCharging>(() => _decode_EventTypeCharging)(_el); },
        "eventSpecificInformationCharging": (_el: _Element): void => { eventSpecificInformationCharging = $._decode_implicit<EventSpecificInformationCharging>(() => _decode_EventSpecificInformationCharging)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "monitorMode": (_el: _Element): void => { monitorMode = $._decode_implicit<MonitorMode>(() => _decode_MonitorMode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventNotificationChargingArg,
        _extension_additions_list_spec_for_EventNotificationChargingArg,
        _root_component_type_list_2_spec_for_EventNotificationChargingArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventNotificationChargingArg(
        eventTypeCharging,
        eventSpecificInformationCharging,
        legID,
        extensions,
        monitorMode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventNotificationChargingArg(el);
}

let _cached_encoder_for_EventNotificationChargingArg: $.ASN1Encoder<EventNotificationChargingArg> | null = null;

/**
 * @summary Encodes a(n) EventNotificationChargingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventNotificationChargingArg, encoded as an ASN.1 Element.
 */
export
function _encode_EventNotificationChargingArg (value: EventNotificationChargingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventNotificationChargingArg) { _cached_encoder_for_EventNotificationChargingArg = function (value: EventNotificationChargingArg, elGetter: $.ASN1Encoder<EventNotificationChargingArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeCharging, $.BER)(value.eventTypeCharging, $.BER);
    if (value.eventSpecificInformationCharging !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_EventSpecificInformationCharging, $.BER)(value.eventSpecificInformationCharging, $.BER);
    }
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.monitorMode !== undefined && !$.deepEq(value.monitorMode, EventNotificationChargingArg._default_value_for_monitorMode)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 30, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventNotificationChargingArg(value, elGetter);
}


/* eslint-enable */
