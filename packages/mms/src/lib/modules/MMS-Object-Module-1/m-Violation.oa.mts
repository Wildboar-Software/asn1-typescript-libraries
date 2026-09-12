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
import { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
// export { normalPriority } from "../MMS-Object-Module-1/normalPriority.va.mjs";
import { normalSeverity } from "../MMS-Object-Module-1/normalSeverity.va.mjs";
// export { normalSeverity } from "../MMS-Object-Module-1/normalSeverity.va.mjs";
import { type EVENT_CONDITION } from "../MMS-Object-Module-1/EVENT-CONDITION.oca.mjs";


/**
 * @summary m_Violation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * m-Violation EVENT-CONDITION ::= {
 *     &name           vmd-specific:"M_Violation",
 *     &accessControl  "M_Never",
 *     &ecClass        network-triggered,
 *     &ecState        active,
 *     &priority       normalPriority,
 *     &severity       normalSeverity
 * }
 * ```
 * 
 * @constant
 * @type {EVENT_CONDITION}
 * @implements {EVENT_CONDITION}
 */
export
const m_Violation: EVENT_CONDITION = {
    class: "EVENT-CONDITION",
    decoderFor: {
    },
    encoderFor: {
    },
    "&name": { vmd_specific: "M_Violation" } /* OBJECT_FIELD_SETTING */,
    "&accessControl": "M_Never" /* OBJECT_FIELD_SETTING */,
    "&ecClass": network_triggered /* OBJECT_FIELD_SETTING */,
    "&ecState": active /* OBJECT_FIELD_SETTING */,
    "&priority": normalPriority /* OBJECT_FIELD_SETTING */,
    "&severity": normalSeverity /* OBJECT_FIELD_SETTING */,
    "&EventEnrollments": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ReferencingEventConditionLists": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
