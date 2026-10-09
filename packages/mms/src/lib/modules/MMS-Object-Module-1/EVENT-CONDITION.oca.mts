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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { EC_Class, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
import { EC_State, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary EVENT_CONDITION
 * @description
 * 
 * MMS-visible event. network-triggered
 * is raised by TriggerEvent or autonomous server action; monitored
 * tracks a boolean variable (or unspecified local condition) via
 * Event-Transition Processing. ISO 9506-1:2003 §19.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EVENT-CONDITION ::= CLASS {
 *     &name                             ObjectName,
 *     -- shall be unique within its range of specification (VMD, Domain, AA)
 *     &accessControl                    Identifier,
 *     &ecClass                          EC-Class,
 *     &ecState                          EC-State,
 *     &priority                         Priority,
 *     &severity                         Severity,
 *     &EventEnrollments                 ObjectName OPTIONAL,
 *     -- The following fields shall be present
 *     -- if and only if the value of &ecClass is monitored.
 *     &enabled                          BOOLEAN OPTIONAL,
 *     &alarmSummaryReports              BOOLEAN OPTIONAL,
 *     &monitoredVariable                CHOICE {
 *         named                            ObjectName,
 *         unnamed                          Address,
 *         unspecified                       NULL } OPTIONAL,
 *     &evaluationInterval               INTEGER OPTIONAL,
 *     &timeToActive                     EventTime OPTIONAL,
 *     &timeToIdle                       EventTime OPTIONAL,
 *     &displayEnhancement                CHOICE {
 *         text                              MMSString,
 *         number                            INTEGER,
 *         none                              NULL
 *     } OPTIONAL,
 *     &group-Priority-Override          CHOICE {
 *         priority                          Priority,
 *         undefined                         NULL
 *     } OPTIONAL,
 *     &ReferencingEventConditionLists Identifier OPTIONAL
 *     -- EVENT-CONDITION-LIST.&name
 * }
 * ```
 * 
 * @interface
 */
export
interface EVENT_CONDITION {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "EVENT-CONDITION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof EVENT_CONDITION]: $.ASN1Decoder<EVENT_CONDITION[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof EVENT_CONDITION]: $.ASN1Encoder<EVENT_CONDITION[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * ObjectName unique in VMD/Domain/AA scope. ISO 9506-1:2003 §19.1.1.1.
     *
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating monitoring changes, TriggerEvent (network- triggered), ACL
     * change, and delete. ISO 9506-1:2003 §19.1.1.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &ecClass
     * @description
     *
     * network-triggered or monitored. ISO 9506-1:2003 §19.1.1.3.
     *
     */
    readonly "&ecClass"?: EC_Class;
    /**
     * @summary &ecState
     * @description
     *
     * disabled, idle, or active. Always disabled if network- triggered. ISO
     * 9506-1:2003 §19.1.1.4.
     *
     */
    readonly "&ecState"?: EC_State;
    /**
     * @summary &priority
     * @description
     *
     * 0..127 relative to other ECs (0 highest, 64 normal). ISO 9506-1:2003
     * §19.1.1.5.
     *
     */
    readonly "&priority"?: Priority;
    /**
     * @summary &severity
     * @description
     *
     * 0..127 effect on the process (0 most severe, 64 normal). ISO 9506-1:2003
     * §19.1.1.6.
     *
     */
    readonly "&severity"?: Severity;
    /**
     * @summary &EventEnrollments
     * @description
     *
     * Enrollments that refer to this condition. ISO 9506-1:2003 §19.1.1.7.
     *
     */
    readonly "&EventEnrollments"?: ObjectName;
    /**
     * @summary &enabled
     * @description
     *
     * Monitored only: whether monitored-variable changes invoke
     * Event-Transition Processing. ISO 9506-1:2003 §19.1.1.8.
     *
     */
    readonly "&enabled"?: BOOLEAN;
    /**
     * @summary &alarmSummaryReports
     * @description
     *
     * Monitored only: if true, include in GetAlarmSummary regardless of
     * state/aaRule; if false, only if some enrollment has aaRule ≠ none. ISO
     * 9506-1:2003 §19.1.1.9.
     *
     */
    readonly "&alarmSummaryReports"?: BOOLEAN;
    /**
     * @summary &monitoredVariable
     * @description
     *
     * Monitored only: boolean Named/Unnamed variable, or unspecified
     * (local/CreateProgramInvocation conditions). ISO 9506-1:2003 §19.1.1.10.
     *
     */
    readonly "&monitoredVariable"?: ({ named: ObjectName } | { unnamed: Address } | { unspecified: NULL });
    /**
     * @summary &evaluationInterval
     * @description
     *
     * Monitored only: max ms between successive &ecState evaluations. ISO
     * 9506-1:2003 §19.1.1.11.
     *
     */
    readonly "&evaluationInterval"?: INTEGER;
    /**
     * @summary &timeToActive
     * @description
     *
     * Monitored only: time of last transition to active, or undefined. ISO
     * 9506-1:2003 §19.1.1.12.
     *
     */
    readonly "&timeToActive"?: EventTime;
    /**
     * @summary &timeToIdle
     * @description
     *
     * Monitored only: time of last transition to idle, or undefined. ISO
     * 9506-1:2003 §19.1.1.
     *
     */
    readonly "&timeToIdle"?: EventTime;
    /**
     * @summary &displayEnhancement
     * @description
     *
     * cspi: text (des), number (dei), or none. ISO 9506-1:2003 §19.1.1.
     *
     */
    readonly "&displayEnhancement"?: ({ text: MMSString } | { number_: INTEGER } | { none: NULL });
    /**
     * @summary &group-Priority-Override
     * @description
     *
     * cspi: Priority override from an Event Condition List, or undefined. ISO
     * 9506-1:2003 §19.1.1.
     *
     */
    readonly "&group-Priority-Override"?: ({ priority: Priority } | { undefined: NULL });
    /**
     * @summary &ReferencingEventConditionLists
     * @description
     *
     * cspi: Event Condition Lists that include this EC. ISO 9506-1:2003
     * §19.1.1.
     *
     */
    readonly "&ReferencingEventConditionLists"?: Identifier;
};

/* eslint-enable */
