/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";


/**
 * @summary EventConditionStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventConditionStatus ::= SEQUENCE {
 *    eventConditionName            [0] ObjectName,
 *    currentState                  [1] IMPLICIT EC-State,
 *    numberOfEventEnrollments      [2] IMPLICIT Unsigned32,
 *    enabled                       [3] IMPLICIT BOOLEAN OPTIONAL,
 *    timeOfLastTransitionToActive  [4] EventTime OPTIONAL,
 *    timeOfLastTransitionToIdle    [5] EventTime OPTIONAL }
 * ```
 * 
 * @class
 */
export
class EventConditionStatus {
    constructor (
        /**
         * @summary `eventConditionName`.
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `currentState`.
         * @public
         * @readonly
         */
        readonly currentState: EC_State,
        /**
         * @summary `numberOfEventEnrollments`.
         * @public
         * @readonly
         */
        readonly numberOfEventEnrollments: Unsigned32,
        /**
         * @summary `enabled`.
         * @public
         * @readonly
         */
        readonly enabled: OPTIONAL<BOOLEAN>,
        /**
         * @summary `timeOfLastTransitionToActive`.
         * @public
         * @readonly
         */
        readonly timeOfLastTransitionToActive: OPTIONAL<EventTime>,
        /**
         * @summary `timeOfLastTransitionToIdle`.
         * @public
         * @readonly
         */
        readonly timeOfLastTransitionToIdle: OPTIONAL<EventTime>
    ) {}

    /**
     * @summary Restructures an object into a EventConditionStatus
     * @description
     * 
     * This takes an `object` and converts it to a `EventConditionStatus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventConditionStatus`.
     * @returns {EventConditionStatus}
     */
    public static _from_object (_o: { [_K in keyof (EventConditionStatus)]: (EventConditionStatus)[_K] }): EventConditionStatus {
        return new EventConditionStatus(_o.eventConditionName, _o.currentState, _o.numberOfEventEnrollments, _o.enabled, _o.timeOfLastTransitionToActive, _o.timeOfLastTransitionToIdle);
    }


}

/**
 * @summary The Leading Root Component Types of EventConditionStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventConditionStatus: $.ComponentSpec[] = [
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("currentState", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfEventEnrollments", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("enabled", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeOfLastTransitionToActive", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("timeOfLastTransitionToIdle", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of EventConditionStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventConditionStatus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventConditionStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventConditionStatus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventConditionStatus: $.ASN1Decoder<EventConditionStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventConditionStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventConditionStatus (el: _Element): EventConditionStatus {
    if (!_cached_decoder_for_EventConditionStatus) { _cached_decoder_for_EventConditionStatus = function (el: _Element): EventConditionStatus {
    let eventConditionName!: ObjectName;
    let currentState!: EC_State;
    let numberOfEventEnrollments!: Unsigned32;
    let enabled: OPTIONAL<BOOLEAN>;
    let timeOfLastTransitionToActive: OPTIONAL<EventTime>;
    let timeOfLastTransitionToIdle: OPTIONAL<EventTime>;
    const callbacks: $.DecodingMap = {
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "currentState": (_el: _Element): void => { currentState = $._decode_implicit<EC_State>(() => _decode_EC_State)(_el); },
        "numberOfEventEnrollments": (_el: _Element): void => { numberOfEventEnrollments = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(_el); },
        "enabled": (_el: _Element): void => { enabled = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "timeOfLastTransitionToActive": (_el: _Element): void => { timeOfLastTransitionToActive = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); },
        "timeOfLastTransitionToIdle": (_el: _Element): void => { timeOfLastTransitionToIdle = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventConditionStatus,
        _extension_additions_list_spec_for_EventConditionStatus,
        _root_component_type_list_2_spec_for_EventConditionStatus,
        undefined,
    );
    return new EventConditionStatus(
        eventConditionName,
        currentState,
        numberOfEventEnrollments,
        enabled,
        timeOfLastTransitionToActive,
        timeOfLastTransitionToIdle
    );
}; }
    return _cached_decoder_for_EventConditionStatus(el);
}

let _cached_encoder_for_EventConditionStatus: $.ASN1Encoder<EventConditionStatus> | null = null;

/**
 * @summary Encodes a(n) EventConditionStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventConditionStatus, encoded as an ASN.1 Element.
 */
export
function _encode_EventConditionStatus (value: EventConditionStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventConditionStatus) { _cached_encoder_for_EventConditionStatus = function (value: EventConditionStatus): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EC_State, $.BER)(value.currentState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Unsigned32, $.BER)(value.numberOfEventEnrollments, $.BER),
            /* IF_ABSENT  */ ((value.enabled === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.enabled, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastTransitionToActive === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_EventTime, $.BER)(value.timeOfLastTransitionToActive, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfLastTransitionToIdle === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_EventTime, $.BER)(value.timeOfLastTransitionToIdle, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventConditionStatus(value, elGetter);
}


/* eslint-enable */
