/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { EventTypeCharging, _decode_EventTypeCharging, _encode_EventTypeCharging } from "../Core-INAP-CS1-DataTypes/EventTypeCharging.ta.mjs";
// export { EventTypeCharging, _decode_EventTypeCharging, _encode_EventTypeCharging } from "../Core-INAP-CS1-DataTypes/EventTypeCharging.ta.mjs";
import { EventSpecificInformationCharging, _decode_EventSpecificInformationCharging, _encode_EventSpecificInformationCharging } from "../Core-INAP-CS1-DataTypes/EventSpecificInformationCharging.ta.mjs";
// export { EventSpecificInformationCharging, _decode_EventSpecificInformationCharging, _encode_EventSpecificInformationCharging } from "../Core-INAP-CS1-DataTypes/EventSpecificInformationCharging.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
import { MonitorMode, _enum_for_MonitorMode, MonitorMode_interrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, interrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode } from "../Core-INAP-CS1-DataTypes/MonitorMode.ta.mjs";
// export { MonitorMode, _enum_for_MonitorMode, MonitorMode_interrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, interrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode } from "../Core-INAP-CS1-DataTypes/MonitorMode.ta.mjs";


/**
 * @summary EventNotificationChargingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventNotificationChargingArg ::= SEQUENCE {
 *      eventTypeCharging     [0] EventTypeCharging,
 *      eventSpecificInformationCharging     [1] EventSpecificInformationCharging     OPTIONAL,
 *      legID     [2] LegID     OPTIONAL,
 *      extensions     [3] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL,
 *      monitorMode     [30] MonitorMode     DEFAULT notifyAndContinue
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class EventNotificationChargingArg {
    constructor (
        /**
         * @summary `eventTypeCharging`.
         * @public
         * @readonly
         */
        readonly eventTypeCharging: EventTypeCharging,
        /**
         * @summary `eventSpecificInformationCharging`.
         * @public
         * @readonly
         */
        readonly eventSpecificInformationCharging: OPTIONAL<EventSpecificInformationCharging>,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary `monitorMode`.
         * @public
         * @readonly
         */
        readonly monitorMode: OPTIONAL<MonitorMode>
    ) {}

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
        return new EventNotificationChargingArg(_o.eventTypeCharging, _o.eventSpecificInformationCharging, _o.legID, _o.extensions, _o.monitorMode);
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
    new $.ComponentSpec("eventTypeCharging", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("eventSpecificInformationCharging", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("monitorMode", true, $.hasTag(_TagClass.context, 30), undefined, undefined)
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
        undefined,
    );
    return new EventNotificationChargingArg(
        eventTypeCharging,
        eventSpecificInformationCharging,
        legID,
        extensions,
        monitorMode
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeCharging, $.BER)(value.eventTypeCharging, $.BER),
            /* IF_ABSENT  */ ((value.eventSpecificInformationCharging === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EventSpecificInformationCharging, $.BER)(value.eventSpecificInformationCharging, $.BER)),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* IF_DEFAULT */ (value.monitorMode === undefined || $.deepEq(value.monitorMode, EventNotificationChargingArg._default_value_for_monitorMode) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventNotificationChargingArg(value, elGetter);
}


/* eslint-enable */
