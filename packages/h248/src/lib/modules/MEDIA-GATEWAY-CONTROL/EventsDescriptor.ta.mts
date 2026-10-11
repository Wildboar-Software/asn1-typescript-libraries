/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";
import { RequestedEvent, _decode_RequestedEvent, _encode_RequestedEvent } from "../MEDIA-GATEWAY-CONTROL/RequestedEvent.ta.mjs";


/**
 * @summary EventsDescriptor
 * @description
 * 
 * Events the MG detects on a termination, and what it does when one is
 * recognized (ITU-T Rec. H.248.1 (03/2013) clause 7.1.9).
 *
 * The default action is a Notify carrying this `requestID`. Notification can be
 * suppressed or deferred by NotifyBehaviour, by an active digit map, or by
 * LockStep buffering. A new Events descriptor replaces the previous one; an
 * event already being notified is finished, and later events use the new
 * descriptor. An empty descriptor disables all recognition. Unless the
 * descriptor is replaced, it stays active after an event is recognized.
 *
 * `requestID` is required when `eventList` is not empty (Annex A). It is
 * omitted when the descriptor is empty.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventsDescriptor ::= SEQUENCE
 *     {
 *         requestID                [0] RequestID OPTIONAL,
 *         -- RequestID must be present if eventList
 *         -- is non empty
 *         eventList                [1] SEQUENCE OF RequestedEvent,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class EventsDescriptor {
    constructor (
        /**
         * @summary `requestID`.
         * @description
         *
         * Correlates this request with the Notify it produces. Required when
         * `eventList` is not empty. Omitted on an empty descriptor (clause
         * 7.1.9.1). On an AuditCapability reply that returns every event, ALL
         * is encoded as 0xFFFFFFFF (Annex A).
         *
         * @public
         * @readonly
         */
        readonly requestID: OPTIONAL<RequestID>,
        /**
         * @summary `eventList`.
         * @description
         *
         * Events to detect. The ALL wildcard may be used as the event
         * identifier inside a package (clause 7.1.9.2).
         *
         * @public
         * @readonly
         */
        readonly eventList: RequestedEvent[],
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
     * @summary Restructures an object into a EventsDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `EventsDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventsDescriptor`.
     * @returns {EventsDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (EventsDescriptor)]: (EventsDescriptor)[_K] }): EventsDescriptor {
        return new EventsDescriptor(_o.requestID, _o.eventList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventsDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("requestID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventList", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventsDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventsDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventsDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventsDescriptor: $.ASN1Decoder<EventsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventsDescriptor (el: _Element): EventsDescriptor {
    if (!_cached_decoder_for_EventsDescriptor) { _cached_decoder_for_EventsDescriptor = function (el: _Element): EventsDescriptor {
    let requestID: OPTIONAL<RequestID>;
    let eventList!: RequestedEvent[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestID": (_el: _Element): void => { requestID = $._decode_implicit<RequestID>(() => _decode_RequestID)(_el); },
        "eventList": (_el: _Element): void => { eventList = $._decode_implicit<RequestedEvent[]>(() => $._decodeSequenceOf<RequestedEvent>(() => _decode_RequestedEvent))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventsDescriptor,
        _extension_additions_list_spec_for_EventsDescriptor,
        _root_component_type_list_2_spec_for_EventsDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventsDescriptor(
        requestID,
        eventList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventsDescriptor(el);
}

let _cached_encoder_for_EventsDescriptor: $.ASN1Encoder<EventsDescriptor> | null = null;

/**
 * @summary Encodes a(n) EventsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_EventsDescriptor (value: EventsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventsDescriptor) { _cached_encoder_for_EventsDescriptor = function (value: EventsDescriptor, elGetter: $.ASN1Encoder<EventsDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requestID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RequestID, $.BER)(value.requestID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RequestedEvent>(() => _encode_RequestedEvent, $.BER), $.BER)(value.eventList, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventsDescriptor(value, elGetter);
}


/* eslint-enable */
