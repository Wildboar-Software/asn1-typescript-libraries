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
import { EventName, _decode_EventName, _encode_EventName } from "../MEDIA-GATEWAY-CONTROL/EventName.ta.mjs";
// export { EventName, _decode_EventName, _encode_EventName } from "../MEDIA-GATEWAY-CONTROL/EventName.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
// export { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { RequestedActions, _decode_RequestedActions, _encode_RequestedActions } from "../MEDIA-GATEWAY-CONTROL/RequestedActions.ta.mjs";
// export { RequestedActions, _decode_RequestedActions, _encode_RequestedActions } from "../MEDIA-GATEWAY-CONTROL/RequestedActions.ta.mjs";
import { EventParameter, _decode_EventParameter, _encode_EventParameter } from "../MEDIA-GATEWAY-CONTROL/EventParameter.ta.mjs";
// export { EventParameter, _decode_EventParameter, _encode_EventParameter } from "../MEDIA-GATEWAY-CONTROL/EventParameter.ta.mjs";


/**
 * @summary RequestedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedEvent ::= SEQUENCE
 *     {
 * --        pkgdName                [0] PkgdName,
 *         eventName                [0] EventName,
 *         streamID                [1] StreamID OPTIONAL,
 *         eventAction                [2] RequestedActions OPTIONAL,
 *         evParList                [3] SEQUENCE OF EventParameter,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class RequestedEvent {
    constructor (
        /**
         * @summary `eventName`.
         * @public
         * @readonly
         */
        readonly eventName: EventName,
        /**
         * @summary `streamID`.
         * @public
         * @readonly
         */
        readonly streamID: OPTIONAL<StreamID>,
        /**
         * @summary `eventAction`.
         * @public
         * @readonly
         */
        readonly eventAction: OPTIONAL<RequestedActions>,
        /**
         * @summary `evParList`.
         * @public
         * @readonly
         */
        readonly evParList: EventParameter[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `RequestedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestedEvent`.
     * @returns {RequestedEvent}
     */
    public static _from_object (_o: { [_K in keyof (RequestedEvent)]: (RequestedEvent)[_K] }): RequestedEvent {
        return new RequestedEvent(_o.eventName, _o.streamID, _o.eventAction, _o.evParList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RequestedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("eventName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventAction", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("evParList", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RequestedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestedEvent: $.ASN1Decoder<RequestedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedEvent (el: _Element): RequestedEvent {
    if (!_cached_decoder_for_RequestedEvent) { _cached_decoder_for_RequestedEvent = function (el: _Element): RequestedEvent {
    let eventName!: EventName;
    let streamID: OPTIONAL<StreamID>;
    let eventAction: OPTIONAL<RequestedActions>;
    let evParList!: EventParameter[];
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventName": (_el: _Element): void => { eventName = $._decode_implicit<EventName>(() => _decode_EventName)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); },
        "eventAction": (_el: _Element): void => { eventAction = $._decode_implicit<RequestedActions>(() => _decode_RequestedActions)(_el); },
        "evParList": (_el: _Element): void => { evParList = $._decode_implicit<EventParameter[]>(() => $._decodeSequenceOf<EventParameter>(() => _decode_EventParameter))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestedEvent,
        _extension_additions_list_spec_for_RequestedEvent,
        _root_component_type_list_2_spec_for_RequestedEvent,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestedEvent(
        eventName,
        streamID,
        eventAction,
        evParList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestedEvent(el);
}

let _cached_encoder_for_RequestedEvent: $.ASN1Encoder<RequestedEvent> | null = null;

/**
 * @summary Encodes a(n) RequestedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedEvent (value: RequestedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedEvent) { _cached_encoder_for_RequestedEvent = function (value: RequestedEvent, elGetter: $.ASN1Encoder<RequestedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventName, $.BER)(value.eventName, $.BER),
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StreamID, $.BER)(value.streamID, $.BER)),
            /* IF_ABSENT  */ ((value.eventAction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RequestedActions, $.BER)(value.eventAction, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<EventParameter>(() => _encode_EventParameter, $.BER), $.BER)(value.evParList, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestedEvent(value, elGetter);
}


/* eslint-enable */
