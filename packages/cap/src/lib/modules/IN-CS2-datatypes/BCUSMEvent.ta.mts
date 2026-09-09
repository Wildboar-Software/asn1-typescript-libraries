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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventTypeBCUSM, _enum_for_EventTypeBCUSM, EventTypeBCUSM_componentReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, componentReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCUSM_associationReleaseRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, associationReleaseRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCUSM, _encode_EventTypeBCUSM } from "../IN-CS2-datatypes/EventTypeBCUSM.ta.mjs";
// export { EventTypeBCUSM, _enum_for_EventTypeBCUSM, EventTypeBCUSM_componentReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, componentReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCUSM_associationReleaseRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, associationReleaseRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCUSM, _encode_EventTypeBCUSM } from "../IN-CS2-datatypes/EventTypeBCUSM.ta.mjs";
import { MonitorMode, _enum_for_MonitorMode, MonitorMode_interrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, interrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode } from "../IN-CS2-datatypes/MonitorMode.ta.mjs";
// export { MonitorMode, _enum_for_MonitorMode, MonitorMode_interrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, interrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode } from "../IN-CS2-datatypes/MonitorMode.ta.mjs";


/**
 * @summary BCUSMEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCUSMEvent ::= SEQUENCE {
 *   eventType    [0]  EventTypeBCUSM,
 *   monitorMode  [1]  MonitorMode
 * }
 * ```
 * 
 * @class
 */
export
class BCUSMEvent {
    constructor (
        /**
         * @summary `eventType`.
         * @public
         * @readonly
         */
        readonly eventType: EventTypeBCUSM,
        /**
         * @summary `monitorMode`.
         * @public
         * @readonly
         */
        readonly monitorMode: MonitorMode
    ) {}

    /**
     * @summary Restructures an object into a BCUSMEvent
     * @description
     * 
     * This takes an `object` and converts it to a `BCUSMEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BCUSMEvent`.
     * @returns {BCUSMEvent}
     */
    public static _from_object (_o: { [_K in keyof (BCUSMEvent)]: (BCUSMEvent)[_K] }): BCUSMEvent {
        return new BCUSMEvent(_o.eventType, _o.monitorMode);
    }

        /**
         * @summary The enum used as the type of the component `eventType`
         * @public
         * @static
         */

    public static _enum_for_eventType = _enum_for_EventTypeBCUSM;        /**
         * @summary The enum used as the type of the component `monitorMode`
         * @public
         * @static
         */

    public static _enum_for_monitorMode = _enum_for_MonitorMode;
}

/**
 * @summary The Leading Root Component Types of BCUSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BCUSMEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("eventType", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("monitorMode", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BCUSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BCUSMEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BCUSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BCUSMEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BCUSMEvent: $.ASN1Decoder<BCUSMEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BCUSMEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BCUSMEvent (el: _Element): BCUSMEvent {
    if (!_cached_decoder_for_BCUSMEvent) { _cached_decoder_for_BCUSMEvent = function (el: _Element): BCUSMEvent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BCUSMEvent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eventType";
    sequence[1].name = "monitorMode";
    let eventType!: EventTypeBCUSM;
    let monitorMode!: MonitorMode;
    eventType = $._decode_implicit<EventTypeBCUSM>(() => _decode_EventTypeBCUSM)(sequence[0]);
    monitorMode = $._decode_implicit<MonitorMode>(() => _decode_MonitorMode)(sequence[1]);
    return new BCUSMEvent(
        eventType,
        monitorMode,

    );
}; }
    return _cached_decoder_for_BCUSMEvent(el);
}

let _cached_encoder_for_BCUSMEvent: $.ASN1Encoder<BCUSMEvent> | null = null;

/**
 * @summary Encodes a(n) BCUSMEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BCUSMEvent, encoded as an ASN.1 Element.
 */
export
function _encode_BCUSMEvent (value: BCUSMEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BCUSMEvent) { _cached_encoder_for_BCUSMEvent = function (value: BCUSMEvent, elGetter: $.ASN1Encoder<BCUSMEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCUSM, $.BER)(value.eventType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BCUSMEvent(value, elGetter);
}


/* eslint-enable */
