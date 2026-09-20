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
import { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
import { EC_State, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
import { AlarmAckRule, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
import { EventNotification_actionResult, _decode_EventNotification_actionResult, _encode_EventNotification_actionResult } from "../ISO-9506-MMS-1/EventNotification-actionResult.ta.mjs";


/**
 * @summary EventNotification
 * @description
 *
 * Unconfirmed service: the server notifies an enrolled client
 * of an Event Condition state transition. The server issues
 * the request. Not sent unless the peer advertised support in
 * Initiate Services Supported. Disabled monitored conditions
 * do not generate notifications. Enrollment class
 * `notification` (not `modifier`) drives this PDU. Alarm ack
 * rule is present only for monitored conditions.
 *
 * [ISO 9506-1:2003 §18.3] [ISO 9506-2:2003 §18.3]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventNotification ::= SEQUENCE {
 *    eventEnrollmentName        [0] ObjectName,
 *    eventConditionName         [1] ObjectName,
 *    severity                   [2] IMPLICIT Severity,
 *    currentState               [3] IMPLICIT EC-State OPTIONAL,
 *    transitionTime             [4] EventTime,
 *    notificationLost           [6] IMPLICIT BOOLEAN DEFAULT FALSE,
 *    alarmAcknowledgmentRule    [7] IMPLICIT AlarmAckRule OPTIONAL,
 *    actionResult               [8] IMPLICIT SEQUENCE {
 *        eventActionName            ObjectName,
 *        successOrFailure           CHOICE {
 *           success                    [0] IMPLICIT SEQUENCE {
 *              confirmedServiceResponse      ConfirmedServiceResponse
 * ,            cs-Response-Detail            [79] Response-Detail OPTIONAL
 *                            -- shall not be transmitted if value is the
 *                            -- value of a tagged type derived from NULL
 *              },
 *           failure                    [1] IMPLICIT SEQUENCE {
 *              modifierPosition           [0] IMPLICIT Unsigned32 OPTIONAL,
 *              serviceError               [1] IMPLICIT ServiceError }
 *           }
 *        } OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class EventNotification {
    constructor (
        /**
         * @summary `eventEnrollmentName`.
         * @description
         *
         * `&name` of the Event Enrollment for which this
         * notification is invoked.
         *
         * [ISO 9506-1:2003 §18.3.1.1.1]
         *
         * @public
         * @readonly
         */
        readonly eventEnrollmentName: ObjectName,
        /**
         * @summary `eventConditionName`.
         * @description
         *
         * `&name` of the Event Condition referenced by the
         * enrollment's `&eventCondition`.
         *
         * [ISO 9506-1:2003 §18.3.1.1.2]
         *
         * @public
         * @readonly
         */
        readonly eventConditionName: ObjectName,
        /**
         * @summary `severity`.
         * @description
         *
         * `&severity` of the referenced Event Condition
         * (0 most severe, 127 least, 64 normal).
         *
         * [ISO 9506-1:2003 §18.3.1.1.3]
         *
         * @public
         * @readonly
         */
        readonly severity: Severity,
        /**
         * @summary `currentState`.
         * @description
         *
         * Event Condition `&ecState` after transition
         * processing. Omitted for `any-to-deleted`, or if the
         * condition became unavailable (Domain delete or AA
         * loss).
         *
         * [ISO 9506-1:2003 §18.3.1.1.4]
         *
         * @public
         * @readonly
         */
        readonly currentState: OPTIONAL<EC_State>,
        /**
         * @summary `transitionTime`.
         * @description
         *
         * Time (time-of-day or Time Sequence Identifier) at
         * which the transition was detected.
         *
         * [ISO 9506-1:2003 §18.3.1.1.5]
         *
         * @public
         * @readonly
         */
        readonly transitionTime: EventTime,
        /**
         * @summary `notificationLost`.
         * @description
         *
         * Enrollment `&notificationLost` at transition time.
         * True: one or more prior notifications for this
         * enrollment were not issued due to resource limits.
         * Set false after a successful notification.
         * Default false.
         *
         * [ISO 9506-1:2003 §18.3.1.1.6]
         *
         * @public
         * @readonly
         */
        readonly notificationLost: OPTIONAL<BOOLEAN>,
        /**
         * @summary `alarmAcknowledgmentRule`.
         * @description
         *
         * Enrollment `&aaRule`. Present only when the Event
         * Condition is `monitored`. Omitted for
         * network-triggered conditions. Values: `none`
         * (ack allowed, no `&ackState` effect), `simple`
         * (ack allowed; active ack updates `&ackState`),
         * `ack-active` (active ack required), `ack-all`
         * (active and idle acks required). Acks are never
         * required for disabled transitions.
         *
         * [ISO 9506-1:2003 §18.3.1.1.7] [ISO 9506-1:2003 §21.1.1.13]
         *
         * @public
         * @readonly
         */
        readonly alarmAcknowledgmentRule: OPTIONAL<AlarmAckRule>,
        /**
         * @summary `actionResult`.
         * @description
         *
         * Result of executing the Event Action referenced by
         * the enrollment. Omitted if there is no Event
         * Action, the action became unavailable, or the
         * transition is `any-to-deleted`.
         *
         * [ISO 9506-1:2003 §18.3.1.1.8]
         *
         * @public
         * @readonly
         */
        readonly actionResult: OPTIONAL<EventNotification_actionResult>
    ) {}

    /**
     * @summary Restructures an object into a EventNotification
     * @description
     * 
     * This takes an `object` and converts it to a `EventNotification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventNotification`.
     * @returns {EventNotification}
     */
    public static _from_object (_o: { [_K in keyof (EventNotification)]: (EventNotification)[_K] }): EventNotification {
        return new EventNotification(_o.eventEnrollmentName, _o.eventConditionName, _o.severity, _o.currentState, _o.transitionTime, _o.notificationLost, _o.alarmAcknowledgmentRule, _o.actionResult);
    }

    /**
     * @summary Getter that returns the default value for `notificationLost`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_notificationLost () { return false; }
}

/**
 * @summary The Leading Root Component Types of EventNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventNotification: $.ComponentSpec[] = [
    new $.ComponentSpec("eventEnrollmentName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventConditionName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("severity", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("currentState", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("transitionTime", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("notificationLost", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("alarmAcknowledgmentRule", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("actionResult", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of EventNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventNotification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventNotification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventNotification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventNotification: $.ASN1Decoder<EventNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventNotification (el: _Element): EventNotification {
    if (!_cached_decoder_for_EventNotification) { _cached_decoder_for_EventNotification = function (el: _Element): EventNotification {
    let eventEnrollmentName!: ObjectName;
    let eventConditionName!: ObjectName;
    let severity!: Severity;
    let currentState: OPTIONAL<EC_State>;
    let transitionTime!: EventTime;
    let notificationLost: OPTIONAL<BOOLEAN> = EventNotification._default_value_for_notificationLost;
    let alarmAcknowledgmentRule: OPTIONAL<AlarmAckRule>;
    let actionResult: OPTIONAL<EventNotification_actionResult>;
    const callbacks: $.DecodingMap = {
        "eventEnrollmentName": (_el: _Element): void => { eventEnrollmentName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "eventConditionName": (_el: _Element): void => { eventConditionName = $._decode_explicit<ObjectName>(() => _decode_ObjectName)(_el); },
        "severity": (_el: _Element): void => { severity = $._decode_implicit<Severity>(() => _decode_Severity)(_el); },
        "currentState": (_el: _Element): void => { currentState = $._decode_implicit<EC_State>(() => _decode_EC_State)(_el); },
        "transitionTime": (_el: _Element): void => { transitionTime = $._decode_explicit<EventTime>(() => _decode_EventTime)(_el); },
        "notificationLost": (_el: _Element): void => { notificationLost = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "alarmAcknowledgmentRule": (_el: _Element): void => { alarmAcknowledgmentRule = $._decode_implicit<AlarmAckRule>(() => _decode_AlarmAckRule)(_el); },
        "actionResult": (_el: _Element): void => { actionResult = $._decode_implicit<EventNotification_actionResult>(() => _decode_EventNotification_actionResult)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventNotification,
        _extension_additions_list_spec_for_EventNotification,
        _root_component_type_list_2_spec_for_EventNotification,
        undefined,
    );
    return new EventNotification(
        eventEnrollmentName,
        eventConditionName,
        severity,
        currentState,
        transitionTime,
        notificationLost,
        alarmAcknowledgmentRule,
        actionResult
    );
}; }
    return _cached_decoder_for_EventNotification(el);
}

let _cached_encoder_for_EventNotification: $.ASN1Encoder<EventNotification> | null = null;

/**
 * @summary Encodes a(n) EventNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventNotification, encoded as an ASN.1 Element.
 */
export
function _encode_EventNotification (value: EventNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventNotification) { _cached_encoder_for_EventNotification = function (value: EventNotification): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ObjectName, $.BER)(value.eventEnrollmentName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectName, $.BER)(value.eventConditionName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Severity, $.BER)(value.severity, $.BER),
            /* IF_ABSENT  */ ((value.currentState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_EC_State, $.BER)(value.currentState, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_EventTime, $.BER)(value.transitionTime, $.BER),
            /* IF_DEFAULT */ (value.notificationLost === undefined || $.deepEq(value.notificationLost, EventNotification._default_value_for_notificationLost) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.notificationLost, $.BER)),
            /* IF_ABSENT  */ ((value.alarmAcknowledgmentRule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AlarmAckRule, $.BER)(value.alarmAcknowledgmentRule, $.BER)),
            /* IF_ABSENT  */ ((value.actionResult === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_EventNotification_actionResult, $.BER)(value.actionResult, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventNotification(value, elGetter);
}


/* eslint-enable */
