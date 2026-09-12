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
import { _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";
// export { AccessCondition, _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";
import { _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { type ACCESS_CONTROL_LIST } from "../MMS-Object-Module-1/ACCESS-CONTROL-LIST.oca.mjs";


/**
 * @summary m_NonDeletable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * m-NonDeletable ACCESS-CONTROL-LIST ::= {
 *     &name                   "M_NonDeletable",
 *     &accessControl          "M_Never",
 *     &deleteAccessCondition  never: NULL,
 *     &NamedVariables         { vmd-specific: "M_DAYTIME" }
 * }
 * ```
 * 
 * @constant
 * @type {ACCESS_CONTROL_LIST}
 * @implements {ACCESS_CONTROL_LIST}
 */
export
const m_NonDeletable: ACCESS_CONTROL_LIST = {
    class: "ACCESS-CONTROL-LIST",
    decoderFor: {
    },
    encoderFor: {
    },
    "&name": "M_NonDeletable" /* OBJECT_FIELD_SETTING */,
    "&accessControl": "M_Never" /* OBJECT_FIELD_SETTING */,
    "&deleteAccessCondition": { never: null } /* OBJECT_FIELD_SETTING */,
    "&AccessControlLists": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&Domains": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ProgramInvocations": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&UnitControls": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&UnnamedVariables": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&NamedVariables": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&NamedVariableLists": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&NamedTypes": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&DataExchanges": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&Semaphores": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&OperatorStations": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&EventConditions": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&EventActions": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&EventEnrollments": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&Journals": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&EventConditionLists": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
