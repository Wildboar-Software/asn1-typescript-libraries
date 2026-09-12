/* eslint-disable */
import {
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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { EC_State, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";


/**
 * @summary AcknowledgeEventNotification_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcknowledgeEventNotification-Request ::= SEQUENCE {
 *    eventEnrollmentName              [0] ObjectName,
 *    acknowledgedState                [2] IMPLICIT EC-State,
 *    timeOfAcknowledgedTransition     [3] EventTime }
 * ```
 * 
 * @class
 */
export
class AcknowledgeEventNotification_Request {
    constructor (
        /**
         * @summary `eventEnrollmentName`.
         * @public
         * @readonly
         */
        readonly eventEnrollmentName: ObjectName,
        /**
         * @summary `acknowledgedState`.
         * @public
         * @readonly
         */
        readonly acknowledgedState: EC_State,
        /**
         * @summary `timeOfAcknowledgedTransition`.
         * @public
         * @readonly
         */
        readonly timeOfAcknowledgedTransition: EventTime
    ) {}

    /**
     * @summary Restructures an object into a AcknowledgeEventNotification_Request
     * @description
     * 
     * This takes an `object` and converts it to a `AcknowledgeEventNotification_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AcknowledgeEventNotification_Request`.
     * @returns {AcknowledgeEventNotification_Request}
     */
    public static _from_object (_o: { [_K in keyof (AcknowledgeEventNotification_Request)]: (AcknowledgeEventNotification_Request)[_K] }): AcknowledgeEventNotification_Request {
        return new AcknowledgeEventNotification_Request(_o.eventEnrollmentName, _o.acknowledgedState, _o.timeOfAcknowledgedTransition);
    }


}

/**
 * @summary The Leading Root Component Types of AcknowledgeEventNotification_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AcknowledgeEventNotification_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("eventEnrollmentName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("acknowledgedState", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeOfAcknowledgedTransition", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AcknowledgeEventNotification_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AcknowledgeEventNotification_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AcknowledgeEventNotification_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AcknowledgeEventNotification_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AcknowledgeEventNotification_Request: $.ASN1Decoder<AcknowledgeEventNotification_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcknowledgeEventNotification_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcknowledgeEventNotification_Request (el: _Element): AcknowledgeEventNotification_Request {
    if (!_cached_decoder_for_AcknowledgeEventNotification_Request) { _cached_decoder_for_AcknowledgeEventNotification_Request = function (el: _Element): AcknowledgeEventNotification_Request {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("AcknowledgeEventNotification-Request contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eventEnrollmentName";
    sequence[1].name = "acknowledgedState";
    sequence[2].name = "timeOfAcknowledgedTransition";
    let eventEnrollmentName!: ObjectName;
    let acknowledgedState!: EC_State;
    let timeOfAcknowledgedTransition!: EventTime;
    eventEnrollmentName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(sequence[0]);
    acknowledgedState = $._decode_implicit<EC_State>(() => _decode_EC_State)(sequence[1]);
    timeOfAcknowledgedTransition = $._decode_explicit<EventTime>(() => _decode_EventTime)(sequence[2]);
    return new AcknowledgeEventNotification_Request(
        eventEnrollmentName,
        acknowledgedState,
        timeOfAcknowledgedTransition,

    );
}; }
    return _cached_decoder_for_AcknowledgeEventNotification_Request(el);
}

let _cached_encoder_for_AcknowledgeEventNotification_Request: $.ASN1Encoder<AcknowledgeEventNotification_Request> | null = null;

/**
 * @summary Encodes a(n) AcknowledgeEventNotification_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcknowledgeEventNotification_Request, encoded as an ASN.1 Element.
 */
export
function _encode_AcknowledgeEventNotification_Request (value: AcknowledgeEventNotification_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcknowledgeEventNotification_Request) { _cached_encoder_for_AcknowledgeEventNotification_Request = function (value: AcknowledgeEventNotification_Request): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventEnrollmentName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EC_State, $.BER)(value.acknowledgedState, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_EventTime, $.BER)(value.timeOfAcknowledgedTransition, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AcknowledgeEventNotification_Request(value, elGetter);
}


/* eslint-enable */
