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
import { _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { network_triggered /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
// export { EC_Class, EC_Class_network_triggered /* IMPORTED_LONG_NAMED_INTEGER */, network_triggered /* IMPORTED_SHORT_NAMED_INTEGER */, EC_Class_monitored /* IMPORTED_LONG_NAMED_INTEGER */, monitored /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_Class, _encode_EC_Class } from "../MMS-Object-Module-1/EC-Class.ta.mjs";
import { active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
// export { EC_State, EC_State_disabled /* IMPORTED_LONG_NAMED_INTEGER */, disabled /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, EC_State_active /* IMPORTED_LONG_NAMED_INTEGER */, active /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EC_State, _encode_EC_State } from "../MMS-Object-Module-1/EC-State.ta.mjs";
import { _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
import { _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
// export { Severity, _decode_Severity, _encode_Severity } from "../MMS-Object-Module-1/Severity.ta.mjs";
import { _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
// export { EventTime, _decode_EventTime, _encode_EventTime } from "../MMS-Object-Module-1/EventTime.ta.mjs";
import { _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
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
    "&name": { vmd_specific: { notChar: "M_Violation" } } /* OBJECT_FIELD_SETTING */,
    "&accessControl": { notChar: "M_Never" } /* OBJECT_FIELD_SETTING */,
    "&ecClass": network_triggered /* OBJECT_FIELD_SETTING */,
    "&ecState": active /* OBJECT_FIELD_SETTING */,
    "&priority": normalPriority /* OBJECT_FIELD_SETTING */,
    "&severity": normalSeverity /* OBJECT_FIELD_SETTING */,
    "&EventEnrollments": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ReferencingEventConditionLists": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
