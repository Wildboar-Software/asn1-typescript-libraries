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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { EC_Class, EC_Class_network_triggered /* IMPORTED_LONG_NAMED_INTEGER */, network_triggered /* IMPORTED_SHORT_NAMED_INTEGER */, EC_Class_monitored /* IMPORTED_LONG_NAMED_INTEGER */, monitored /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
// export { EC_Class, EC_Class_network_triggered /* IMPORTED_LONG_NAMED_INTEGER */, network_triggered /* IMPORTED_SHORT_NAMED_INTEGER */, EC_Class_monitored /* IMPORTED_LONG_NAMED_INTEGER */, monitored /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
import { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
// export { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary EVENT_CONDITION
 * @description
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
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &ecClass
     */
    readonly "&ecClass"?: EC_Class;
    /**
     * @summary &ecState
     */
    readonly "&ecState"?: EC_State;
    /**
     * @summary &priority
     */
    readonly "&priority"?: Priority;
    /**
     * @summary &severity
     */
    readonly "&severity"?: Severity;
    /**
     * @summary &EventEnrollments
     */
    readonly "&EventEnrollments"?: ObjectName;
    /**
     * @summary &enabled
     */
    readonly "&enabled"?: BOOLEAN;
    /**
     * @summary &alarmSummaryReports
     */
    readonly "&alarmSummaryReports"?: BOOLEAN;
    /**
     * @summary &monitoredVariable
     */
    readonly "&monitoredVariable"?: ({ named: ObjectName } | { unnamed: Address } | { unspecified: NULL });
    /**
     * @summary &evaluationInterval
     */
    readonly "&evaluationInterval"?: INTEGER;
    /**
     * @summary &timeToActive
     */
    readonly "&timeToActive"?: EventTime;
    /**
     * @summary &timeToIdle
     */
    readonly "&timeToIdle"?: EventTime;
    /**
     * @summary &displayEnhancement
     */
    readonly "&displayEnhancement"?: ({ text: MMSString } | { number_: INTEGER } | { none: NULL });
    /**
     * @summary &group-Priority-Override
     */
    readonly "&group-Priority-Override"?: ({ priority: Priority } | { undefined: NULL });
    /**
     * @summary &ReferencingEventConditionLists
     */
    readonly "&ReferencingEventConditionLists"?: Identifier;
};

/* eslint-enable */
