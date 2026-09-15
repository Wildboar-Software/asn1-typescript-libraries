/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    NULL,
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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { EE_Class, _decode_EE_Class, _encode_EE_Class } from "../MMS-Object-Module-1/EE-Class.ta.mjs";
// export { EE_Class, EE_Class_modifier /* IMPORTED_LONG_NAMED_INTEGER */, modifier /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Class_notification /* IMPORTED_LONG_NAMED_INTEGER */, notification /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Class, _encode_EE_Class } from "../MMS-Object-Module-1/EE-Class.ta.mjs";
import { Transitions, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
// export { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
import { EE_Duration, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
// export { EE_Duration, EE_Duration_current /* IMPORTED_LONG_NAMED_INTEGER */, current /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Duration_permanent /* IMPORTED_LONG_NAMED_INTEGER */, permanent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { AlarmAckRule, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
// export { AlarmAckRule, AlarmAckRule_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_active /* IMPORTED_LONG_NAMED_INTEGER */, ack_active /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_all /* IMPORTED_LONG_NAMED_INTEGER */, ack_all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
import { EC_State, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary EVENT_ENROLLMENT
 * @description
 * 
 * Request to be notified of Event
 * Condition transitions, or to delay a confirmed service until those
 * transitions (modifier class). notification enrollments persist;
 * modifier enrollments are one-shot. ISO 9506-1:2003 §21.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EVENT-ENROLLMENT ::= CLASS {
 *     &name                      ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl             Identifier,
 *     &eeClass                   EE-Class ,
 *     &eventCondition            Identifier,
 *     &ecTransitions             Transitions,
 *     &aAssociation              INTEGER,
 *     -- The following two fields are present if and only if the
 *     -- value of &eeClass is modifier.
 *     &invokeID                  INTEGER OPTIONAL,
 *     &remainingDelay            CHOICE {
 *         time                      INTEGER,
 *         forever                   NULL } OPTIONAL,
 *     -- All the following fields are present if and only if the
 *     -- value of &eeClass is notification.
 *     &notificationLost          BOOLEAN OPTIONAL,
 *     &eventAction               ObjectName OPTIONAL,
 *     &duration                  EE-Duration OPTIONAL,
 *     &clientApplication         ApplicationReference OPTIONAL,
 *     -- The following four fields are present if and only if the
 *     -- value of &eeClass is notification and the value of &ecState
 *     -- of the Event Condition object is monitored
 *     &aaRule                    AlarmAckRule OPTIONAL,
 *     &timeActiveAck             EventTime OPTIONAL,
 *     &timeIdleAck               EventTime OPTIONAL,
 *     &ackState                  ENUMERATED {
 *         acked,
 *         noAckA,
 *         noAckI } OPTIONAL,
 *     &lastState                 EC-State OPTIONAL,
 *     &displayEnhancement          CHOICE {
 *         text                      MMSString,
 *         number                    INTEGER,
 *         none                      NULL } OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface EVENT_ENROLLMENT {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "EVENT-ENROLLMENT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof EVENT_ENROLLMENT]: $.ASN1Decoder<EVENT_ENROLLMENT[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof EVENT_ENROLLMENT]: $.ASN1Encoder<EVENT_ENROLLMENT[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * ObjectName unique in VMD/Domain/AA scope. ISO 9506-1:2003 §21.1.1.1.
     *
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating attribute change, delete, and ACL change. ISO 9506-1:2003
     * §21.1.1.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &eeClass
     * @description
     *
     * modifier or notification. ISO 9506-1:2003 §21.1.1.3.
     *
     */
    readonly "&eeClass"?: EE_Class;
    /**
     * @summary &eventCondition
     * @description
     *
     * Event Condition that drives Event-Transition Processing; undefined if
     * that object becomes unavailable. ISO 9506-1:2003 §21.1.1.4.
     *
     */
    readonly "&eventCondition"?: Identifier;
    /**
     * @summary &ecTransitions
     * @description
     *
     * Monitored: non-empty set of transitions. Network- triggered: empty
     * (TriggerEvent / autonomous). ISO 9506-1:2003 §21.1.1.5.
     *
     */
    readonly "&ecTransitions"?: Transitions;
    /**
     * @summary &aAssociation
     * @description
     *
     * AA used for EventNotifications (notification class). Not reported by MMS.
     * ISO 9506-1:2003 §21.1.1.6.
     *
     */
    readonly "&aAssociation"?: INTEGER;
    /**
     * @summary &invokeID
     * @description
     *
     * modifier class: Transaction invokeID of the modified service. ISO
     * 9506-1:2003 §21.1.1.7.
     *
     */
    readonly "&invokeID"?: INTEGER;
    /**
     * @summary &remainingDelay
     * @description
     *
     * modifier class: seconds the client will wait, or forever. ISO 9506-1:2003
     * §21.1.1.8.
     *
     */
    readonly "&remainingDelay"?: ({ time: INTEGER } | { forever: NULL });
    /**
     * @summary &notificationLost
     * @description
     *
     * notification class: true if a notification was dropped (resources or AA
     * failure for permanent enrollments). ISO 9506-1:2003 §21.1.1.9.
     *
     */
    readonly "&notificationLost"?: BOOLEAN;
    /**
     * @summary &eventAction
     * @description
     *
     * notification class: Event Action to run, or undefined (notification
     * only). ISO 9506-1:2003 §21.1.1.10.
     *
     */
    readonly "&eventAction"?: ObjectName;
    /**
     * @summary &duration
     * @description
     *
     * notification class: current or permanent. ISO 9506-1:2003 §21.1.1.11.
     *
     */
    readonly "&duration"?: EE_Duration;
    /**
     * @summary &clientApplication
     * @description
     *
     * notification class: enrolled client. ISO 9506-1:2003 §21.1.1.12.
     *
     */
    readonly "&clientApplication"?: ApplicationReference;
    /**
     * @summary &aaRule
     * @description
     *
     * notification + monitored: acknowledgement rule. ISO 9506-1:2003
     * §21.1.1.13.
     *
     */
    readonly "&aaRule"?: AlarmAckRule;
    /**
     * @summary &timeActiveAck
     * @description
     *
     * Time the last active-transition ack was received, or undefined (aaRule ≠
     * none). ISO 9506-1:2003 §21.1.1.14.
     *
     */
    readonly "&timeActiveAck"?: EventTime;
    /**
     * @summary &timeIdleAck
     * @description
     *
     * Time the last idle-transition ack was received, or undefined (aaRule ≠
     * none). ISO 9506-1:2003 §21.1.1.15.
     *
     */
    readonly "&timeIdleAck"?: EventTime;
    /**
     * @summary &ackState
     * @description
     *
     * acked / noAckA / noAckI for alarm-ack tracking. ISO 9506-1:2003 §21.1.1.
     *
     */
    readonly "&ackState"?: EVENT_ENROLLMENT_ackState;
    /**
     * @summary &lastState
     * @description
     *
     * Last observed EC-State. ISO 9506-1:2003 §21.1.1.
     *
     */
    readonly "&lastState"?: EC_State;
    /**
     * @summary &displayEnhancement
     * @description
     *
     * cspi: text (des), number (dei), or none. ISO 9506-1:2003 §21.1.1.
     *
     */
    readonly "&displayEnhancement"?: ({ text: MMSString } | { number_: INTEGER } | { none: NULL });
}

/**
 * @summary EVENT_ENROLLMENT_ackState
 * @description
 *
 * Request to be notified of Event
 * Condition transitions, or to delay a confirmed service until those
 * transitions (modifier class). notification enrollments persist;
 * modifier enrollments are one-shot. ISO 9506-1:2003 §21.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EVENT-ENROLLMENT.&ackState ::= ENUMERATED {
 *     acked,
 *     noAckA,
 *     noAckI }
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_EVENT_ENROLLMENT_ackState {
    acked = 0,
    noAckA = 1,
    noAckI = 2,
}

/**
 * @summary EVENT_ENROLLMENT_ackState
 * @enum {number}
 */
export
type EVENT_ENROLLMENT_ackState = _enum_for_EVENT_ENROLLMENT_ackState;

/**
 * @summary EVENT_ENROLLMENT_ackState
 * @enum {number}
 */
export
const EVENT_ENROLLMENT_ackState = _enum_for_EVENT_ENROLLMENT_ackState;

/**
 * @summary EVENT_ENROLLMENT_ackState_acked
 * @constant
 * @type {number}
 */
export
const EVENT_ENROLLMENT_ackState_acked: EVENT_ENROLLMENT_ackState = EVENT_ENROLLMENT_ackState.acked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary EVENT_ENROLLMENT_ackState_noAckA
 * @constant
 * @type {number}
 */
export
const EVENT_ENROLLMENT_ackState_noAckA: EVENT_ENROLLMENT_ackState = EVENT_ENROLLMENT_ackState.noAckA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary EVENT_ENROLLMENT_ackState_noAckI
 * @constant
 * @type {number}
 */
export
const EVENT_ENROLLMENT_ackState_noAckI: EVENT_ENROLLMENT_ackState = EVENT_ENROLLMENT_ackState.noAckI; /* LONG_NAMED_ENUMERATED_VALUE */

/* eslint-enable */
