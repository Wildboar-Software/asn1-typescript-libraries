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
import { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspended /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspended /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS2-datatypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analysedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analysedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oTermSeized /* IMPORTED_LONG_ENUMERATION_ITEM */, oTermSeized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oSuspended /* IMPORTED_LONG_ENUMERATION_ITEM */, oSuspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tSuspended /* IMPORTED_LONG_ENUMERATION_ITEM */, tSuspended /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_origAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tReAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tReAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_facilitySelectedAndAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, facilitySelectedAndAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_callAccepted /* IMPORTED_LONG_ENUMERATION_ITEM */, callAccepted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../IN-CS2-datatypes/EventTypeBCSM.ta.mjs";
import { MonitorMode, _enum_for_MonitorMode, MonitorMode_interrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, interrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode } from "../IN-CS2-datatypes/MonitorMode.ta.mjs";
// export { MonitorMode, _enum_for_MonitorMode, MonitorMode_interrupted /* IMPORTED_LONG_ENUMERATION_ITEM */, interrupted /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_notifyAndContinue /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndContinue /* IMPORTED_SHORT_ENUMERATION_ITEM */, MonitorMode_transparent /* IMPORTED_LONG_ENUMERATION_ITEM */, transparent /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MonitorMode, _encode_MonitorMode } from "../IN-CS2-datatypes/MonitorMode.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
import { DpSpecificCriteria, _decode_DpSpecificCriteria, _encode_DpSpecificCriteria } from "../IN-CS2-datatypes/DpSpecificCriteria.ta.mjs";
// export { DpSpecificCriteria, _decode_DpSpecificCriteria, _encode_DpSpecificCriteria } from "../IN-CS2-datatypes/DpSpecificCriteria.ta.mjs";


/**
 * @summary BCSMEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BCSMEvent{PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *   eventTypeBCSM       [0]  EventTypeBCSM,
 *   monitorMode         [1]  MonitorMode,
 *   legID               [2]  LegID OPTIONAL,
 *   dpSpecificCriteria  [30]  DpSpecificCriteria{bound} OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BCSMEvent {
    constructor (
        /**
         * @summary `eventTypeBCSM`.
         * @public
         * @readonly
         */
        readonly eventTypeBCSM: EventTypeBCSM,
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
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `dpSpecificCriteria`.
         * @public
         * @readonly
         */
        readonly dpSpecificCriteria: OPTIONAL<DpSpecificCriteria>
    ) {}

    /**
     * @summary Restructures an object into a BCSMEvent
     * @description
     * 
     * This takes an `object` and converts it to a `BCSMEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BCSMEvent`.
     * @returns {BCSMEvent}
     */
    public static _from_object (_o: { [_K in keyof (BCSMEvent)]: (BCSMEvent)[_K] }): BCSMEvent {
        return new BCSMEvent(_o.eventTypeBCSM, _o.monitorMode, _o.legID, _o.dpSpecificCriteria);
    }

        /**
         * @summary The enum used as the type of the component `eventTypeBCSM`
         * @public
         * @static
         */

    public static _enum_for_eventTypeBCSM = _enum_for_EventTypeBCSM;        /**
         * @summary The enum used as the type of the component `monitorMode`
         * @public
         * @static
         */

    public static _enum_for_monitorMode = _enum_for_MonitorMode;
}

/**
 * @summary The Leading Root Component Types of BCSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BCSMEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTypeBCSM", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("monitorMode", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("dpSpecificCriteria", true, $.hasTag(_TagClass.context, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BCSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BCSMEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BCSMEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BCSMEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BCSMEvent: $.ASN1Decoder<BCSMEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BCSMEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BCSMEvent (el: _Element): BCSMEvent {
    if (!_cached_decoder_for_BCSMEvent) { _cached_decoder_for_BCSMEvent = function (el: _Element): BCSMEvent {
    let eventTypeBCSM!: EventTypeBCSM;
    let monitorMode!: MonitorMode;
    let legID: OPTIONAL<LegID>;
    let dpSpecificCriteria: OPTIONAL<DpSpecificCriteria>;
    const callbacks: $.DecodingMap = {
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "monitorMode": (_el: _Element): void => { monitorMode = $._decode_implicit<MonitorMode>(() => _decode_MonitorMode)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "dpSpecificCriteria": (_el: _Element): void => { dpSpecificCriteria = $._decode_explicit<DpSpecificCriteria>(() => _decode_DpSpecificCriteria)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BCSMEvent,
        _extension_additions_list_spec_for_BCSMEvent,
        _root_component_type_list_2_spec_for_BCSMEvent,
        undefined,
    );
    return new BCSMEvent(
        eventTypeBCSM,
        monitorMode,
        legID,
        dpSpecificCriteria
    );
}; }
    return _cached_decoder_for_BCSMEvent(el);
}

let _cached_encoder_for_BCSMEvent: $.ASN1Encoder<BCSMEvent> | null = null;

/**
 * @summary Encodes a(n) BCSMEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BCSMEvent, encoded as an ASN.1 Element.
 */
export
function _encode_BCSMEvent (value: BCSMEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BCSMEvent) { _cached_encoder_for_BCSMEvent = function (value: BCSMEvent, elGetter: $.ASN1Encoder<BCSMEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MonitorMode, $.BER)(value.monitorMode, $.BER),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.dpSpecificCriteria === undefined) ? undefined : $._encode_explicit(_TagClass.context, 30, () => _encode_DpSpecificCriteria, $.BER)(value.dpSpecificCriteria, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BCSMEvent(value, elGetter);
}


/* eslint-enable */
