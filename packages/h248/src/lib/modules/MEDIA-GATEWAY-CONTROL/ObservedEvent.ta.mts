/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventName, _decode_EventName, _encode_EventName } from "../MEDIA-GATEWAY-CONTROL/EventName.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { EventParameter, _decode_EventParameter, _encode_EventParameter } from "../MEDIA-GATEWAY-CONTROL/EventParameter.ta.mjs";
import { TimeNotation, _decode_TimeNotation, _encode_TimeNotation } from "../MEDIA-GATEWAY-CONTROL/TimeNotation.ta.mjs";


/**
 * @summary ObservedEvent
 * @description
 * 
 * One detected event (ITU-T Rec. H.248.1 (03/2013) clause 7.1.17).
 *
 * If the MGC requested the event on a specific stream, the MG returns that
 * StreamID. If the MGC requested it at termination level, the MG may omit the
 * StreamID or include it, according to the event's meaning.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObservedEvent ::= SEQUENCE
 *     {
 *         eventName                    [0] EventName,
 *         streamID                    [1] StreamID OPTIONAL,
 *         eventParList                [2] SEQUENCE OF EventParameter,
 *         timeNotation                [3] TimeNotation OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class ObservedEvent {
    constructor (
        /**
         * @summary `eventName`.
         * @description
         *
         * Package and event that was detected.
         *
         * @public
         * @readonly
         */
        readonly eventName: EventName,
        /**
         * @summary `streamID`.
         * @description
         *
         * Stream on which the event was detected, when the event is
         * stream-specific (clause 7.1.17).
         *
         * @public
         * @readonly
         */
        readonly streamID: OPTIONAL<StreamID>,
        /**
         * @summary `eventParList`.
         * @description
         *
         * Parameters observed with the event.
         *
         * @public
         * @readonly
         */
        readonly eventParList: EventParameter[],
        /**
         * @summary `timeNotation`.
         * @description
         *
         * Detection time, to hundredths of a second (clause 7.1.17). When the
         * event was buffered under LockStep, the Notify carries the time of
         * detection, not the time the buffer was drained (clause 7.1.9.4).
         *
         * @public
         * @readonly
         */
        readonly timeNotation: OPTIONAL<TimeNotation>,
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions this version does not define. Kept so a later
         * peer can still carry them (ITU-T Rec. H.248.1 (03/2013) clause 11.7).
         *
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObservedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ObservedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObservedEvent`.
     * @returns {ObservedEvent}
     */
    public static _from_object (_o: { [_K in keyof (ObservedEvent)]: (ObservedEvent)[_K] }): ObservedEvent {
        return new ObservedEvent(_o.eventName, _o.streamID, _o.eventParList, _o.timeNotation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ObservedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ObservedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("eventName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventParList", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeNotation", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ObservedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ObservedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ObservedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ObservedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ObservedEvent: $.ASN1Decoder<ObservedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObservedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObservedEvent (el: _Element): ObservedEvent {
    if (!_cached_decoder_for_ObservedEvent) { _cached_decoder_for_ObservedEvent = function (el: _Element): ObservedEvent {
    let eventName!: EventName;
    let streamID: OPTIONAL<StreamID>;
    let eventParList!: EventParameter[];
    let timeNotation: OPTIONAL<TimeNotation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventName": (_el: _Element): void => { eventName = $._decode_implicit<EventName>(() => _decode_EventName)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); },
        "eventParList": (_el: _Element): void => { eventParList = $._decode_implicit<EventParameter[]>(() => $._decodeSequenceOf<EventParameter>(() => _decode_EventParameter))(_el); },
        "timeNotation": (_el: _Element): void => { timeNotation = $._decode_implicit<TimeNotation>(() => _decode_TimeNotation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ObservedEvent,
        _extension_additions_list_spec_for_ObservedEvent,
        _root_component_type_list_2_spec_for_ObservedEvent,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ObservedEvent(
        eventName,
        streamID,
        eventParList,
        timeNotation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ObservedEvent(el);
}

let _cached_encoder_for_ObservedEvent: $.ASN1Encoder<ObservedEvent> | null = null;

/**
 * @summary Encodes a(n) ObservedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ObservedEvent (value: ObservedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObservedEvent) { _cached_encoder_for_ObservedEvent = function (value: ObservedEvent, elGetter: $.ASN1Encoder<ObservedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventName, $.BER)(value.eventName, $.BER),
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StreamID, $.BER)(value.streamID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<EventParameter>(() => _encode_EventParameter, $.BER), $.BER)(value.eventParList, $.BER),
            /* IF_ABSENT  */ ((value.timeNotation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TimeNotation, $.BER)(value.timeNotation, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ObservedEvent(value, elGetter);
}


/* eslint-enable */
