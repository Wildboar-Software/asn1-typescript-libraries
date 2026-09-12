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
import { EE_Class, EE_Class_modifier /* IMPORTED_LONG_NAMED_INTEGER */, modifier /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Class_notification /* IMPORTED_LONG_NAMED_INTEGER */, notification /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Class, _encode_EE_Class } from "../MMS-Object-Module-1/EE-Class.ta.mjs";
// export { EE_Class, EE_Class_modifier /* IMPORTED_LONG_NAMED_INTEGER */, modifier /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Class_notification /* IMPORTED_LONG_NAMED_INTEGER */, notification /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Class, _encode_EE_Class } from "../MMS-Object-Module-1/EE-Class.ta.mjs";
import { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
// export { Transitions, Transitions_idle_to_disabled /* IMPORTED_LONG_NAMED_BIT */, idle_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_disabled /* IMPORTED_LONG_NAMED_BIT */, active_to_disabled /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_idle /* IMPORTED_LONG_NAMED_BIT */, disabled_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_active_to_idle /* IMPORTED_LONG_NAMED_BIT */, active_to_idle /* IMPORTED_SHORT_NAMED_BIT */, Transitions_disabled_to_active /* IMPORTED_LONG_NAMED_BIT */, disabled_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_idle_to_active /* IMPORTED_LONG_NAMED_BIT */, idle_to_active /* IMPORTED_SHORT_NAMED_BIT */, Transitions_any_to_deleted /* IMPORTED_LONG_NAMED_BIT */, any_to_deleted /* IMPORTED_SHORT_NAMED_BIT */, _decode_Transitions, _encode_Transitions } from "../MMS-Object-Module-1/Transitions.ta.mjs";
import { EE_Duration, EE_Duration_current /* IMPORTED_LONG_NAMED_INTEGER */, current /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Duration_permanent /* IMPORTED_LONG_NAMED_INTEGER */, permanent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
// export { EE_Duration, EE_Duration_current /* IMPORTED_LONG_NAMED_INTEGER */, current /* IMPORTED_SHORT_NAMED_INTEGER */, EE_Duration_permanent /* IMPORTED_LONG_NAMED_INTEGER */, permanent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EE_Duration, _encode_EE_Duration } from "../MMS-Object-Module-1/EE-Duration.ta.mjs";
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { AlarmAckRule, AlarmAckRule_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_active /* IMPORTED_LONG_NAMED_INTEGER */, ack_active /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_all /* IMPORTED_LONG_NAMED_INTEGER */, ack_all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
// export { AlarmAckRule, AlarmAckRule_none /* IMPORTED_LONG_NAMED_INTEGER */, none /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_simple /* IMPORTED_LONG_NAMED_INTEGER */, simple /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_active /* IMPORTED_LONG_NAMED_INTEGER */, ack_active /* IMPORTED_SHORT_NAMED_INTEGER */, AlarmAckRule_ack_all /* IMPORTED_LONG_NAMED_INTEGER */, ack_all /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlarmAckRule, _encode_AlarmAckRule } from "../MMS-Object-Module-1/AlarmAckRule.ta.mjs";
import { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
import { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary EVENT_ENROLLMENT
 * @description
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
     */
    readonly "&name"?: ObjectName;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &eeClass
     */
    readonly "&eeClass"?: EE_Class;
    /**
     * @summary &eventCondition
     */
    readonly "&eventCondition"?: Identifier;
    /**
     * @summary &ecTransitions
     */
    readonly "&ecTransitions"?: Transitions;
    /**
     * @summary &aAssociation
     */
    readonly "&aAssociation"?: INTEGER;
    /**
     * @summary &invokeID
     */
    readonly "&invokeID"?: INTEGER;
    /**
     * @summary &remainingDelay
     */
    readonly "&remainingDelay"?: ({ time: INTEGER } | { forever: NULL });
    /**
     * @summary &notificationLost
     */
    readonly "&notificationLost"?: BOOLEAN;
    /**
     * @summary &eventAction
     */
    readonly "&eventAction"?: ObjectName;
    /**
     * @summary &duration
     */
    readonly "&duration"?: EE_Duration;
    /**
     * @summary &clientApplication
     */
    readonly "&clientApplication"?: ApplicationReference;
    /**
     * @summary &aaRule
     */
    readonly "&aaRule"?: AlarmAckRule;
    /**
     * @summary &timeActiveAck
     */
    readonly "&timeActiveAck"?: EventTime;
    /**
     * @summary &timeIdleAck
     */
    readonly "&timeIdleAck"?: EventTime;
    // FIXME: &ackState;
    /**
     * @summary &lastState
     */
    readonly "&lastState"?: EC_State;
    /**
     * @summary &displayEnhancement
     */
    readonly "&displayEnhancement"?: ({ text: MMSString } | { number_: INTEGER } | { none: NULL });
};

/* eslint-enable */
