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
import { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
// export { ApplicationReference, _decode_ApplicationReference, _encode_ApplicationReference } from "../MMS-Environment-1/ApplicationReference.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { TRANSACTION } from "../MMS-Object-Module-1/TRANSACTION.oca.mjs";
// export { TRANSACTION } from "../MMS-Object-Module-1/TRANSACTION.oca.mjs";
import { APPLICATION_ASSOCIATION } from "../MMS-Object-Module-1/APPLICATION-ASSOCIATION.oca.mjs";
// export { APPLICATION_ASSOCIATION } from "../MMS-Object-Module-1/APPLICATION-ASSOCIATION.oca.mjs";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { LogicalStatus, _decode_LogicalStatus, _encode_LogicalStatus } from "../MMS-Object-Module-1/LogicalStatus.ta.mjs";
// export { LogicalStatus, _decode_LogicalStatus, _encode_LogicalStatus } from "../MMS-Object-Module-1/LogicalStatus.ta.mjs";
import { PhysicalStatus, _decode_PhysicalStatus, _encode_PhysicalStatus } from "../MMS-Object-Module-1/PhysicalStatus.ta.mjs";
// export { PhysicalStatus, _decode_PhysicalStatus, _encode_PhysicalStatus } from "../MMS-Object-Module-1/PhysicalStatus.ta.mjs";
import { ACCESS_CONTROL_LIST } from "../MMS-Object-Module-1/ACCESS-CONTROL-LIST.oca.mjs";
// export { ACCESS_CONTROL_LIST } from "../MMS-Object-Module-1/ACCESS-CONTROL-LIST.oca.mjs";
import { DOMAIN } from "../MMS-Object-Module-1/DOMAIN.oca.mjs";
// export { DOMAIN } from "../MMS-Object-Module-1/DOMAIN.oca.mjs";
import { PROGRAM_INVOCATION } from "../MMS-Object-Module-1/PROGRAM-INVOCATION.oca.mjs";
// export { PROGRAM_INVOCATION } from "../MMS-Object-Module-1/PROGRAM-INVOCATION.oca.mjs";
import { UNIT_CONTROL } from "../MMS-Object-Module-1/UNIT-CONTROL.oca.mjs";
// export { UNIT_CONTROL } from "../MMS-Object-Module-1/UNIT-CONTROL.oca.mjs";
import { UNNAMED_VARIABLE } from "../MMS-Object-Module-1/UNNAMED-VARIABLE.oca.mjs";
// export { UNNAMED_VARIABLE } from "../MMS-Object-Module-1/UNNAMED-VARIABLE.oca.mjs";
import { NAMED_VARIABLE } from "../MMS-Object-Module-1/NAMED-VARIABLE.oca.mjs";
// export { NAMED_VARIABLE } from "../MMS-Object-Module-1/NAMED-VARIABLE.oca.mjs";
import { NAMED_VARIABLE_LIST } from "../MMS-Object-Module-1/NAMED-VARIABLE-LIST.oca.mjs";
// export { NAMED_VARIABLE_LIST } from "../MMS-Object-Module-1/NAMED-VARIABLE-LIST.oca.mjs";
import { NAMED_TYPE } from "../MMS-Object-Module-1/NAMED-TYPE.oca.mjs";
// export { NAMED_TYPE } from "../MMS-Object-Module-1/NAMED-TYPE.oca.mjs";
import { DATA_EXCHANGE } from "../MMS-Object-Module-1/DATA-EXCHANGE.oca.mjs";
// export { DATA_EXCHANGE } from "../MMS-Object-Module-1/DATA-EXCHANGE.oca.mjs";
import { SEMAPHORE } from "../MMS-Object-Module-1/SEMAPHORE.oca.mjs";
// export { SEMAPHORE } from "../MMS-Object-Module-1/SEMAPHORE.oca.mjs";
import { OPERATOR_STATION } from "../MMS-Object-Module-1/OPERATOR-STATION.oca.mjs";
// export { OPERATOR_STATION } from "../MMS-Object-Module-1/OPERATOR-STATION.oca.mjs";
import { EVENT_CONDITION } from "../MMS-Object-Module-1/EVENT-CONDITION.oca.mjs";
// export { EVENT_CONDITION } from "../MMS-Object-Module-1/EVENT-CONDITION.oca.mjs";
import { EVENT_ACTION } from "../MMS-Object-Module-1/EVENT-ACTION.oca.mjs";
// export { EVENT_ACTION } from "../MMS-Object-Module-1/EVENT-ACTION.oca.mjs";
import { EVENT_ENROLLMENT } from "../MMS-Object-Module-1/EVENT-ENROLLMENT.oca.mjs";
// export { EVENT_ENROLLMENT } from "../MMS-Object-Module-1/EVENT-ENROLLMENT.oca.mjs";
import { EVENT_CONDITION_LIST } from "../MMS-Object-Module-1/EVENT-CONDITION-LIST.oca.mjs";
// export { EVENT_CONDITION_LIST } from "../MMS-Object-Module-1/EVENT-CONDITION-LIST.oca.mjs";
import { JOURNAL } from "../MMS-Object-Module-1/JOURNAL.oca.mjs";
// export { JOURNAL } from "../MMS-Object-Module-1/JOURNAL.oca.mjs";
import { VMDState, VMDState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_loaded /* IMPORTED_LONG_NAMED_INTEGER */, loaded /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_ready /* IMPORTED_LONG_NAMED_INTEGER */, ready /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_executing /* IMPORTED_LONG_NAMED_INTEGER */, executing /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_motion_paused /* IMPORTED_LONG_NAMED_INTEGER */, motion_paused /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_manualInterventionRequired /* IMPORTED_LONG_NAMED_INTEGER */, manualInterventionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_VMDState, _encode_VMDState } from "../MMS-Object-Module-1/VMDState.ta.mjs";
// export { VMDState, VMDState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_loaded /* IMPORTED_LONG_NAMED_INTEGER */, loaded /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_ready /* IMPORTED_LONG_NAMED_INTEGER */, ready /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_executing /* IMPORTED_LONG_NAMED_INTEGER */, executing /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_motion_paused /* IMPORTED_LONG_NAMED_INTEGER */, motion_paused /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_manualInterventionRequired /* IMPORTED_LONG_NAMED_INTEGER */, manualInterventionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_VMDState, _encode_VMDState } from "../MMS-Object-Module-1/VMDState.ta.mjs";


/**
 * @summary VMD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMD ::= CLASS {
 *     &executiveFunction                        ApplicationReference,
 *     &vendorName                               MMSString,
 *     &modelName                                MMSString,
 *     &revision                                 MMSString,
 *     &AbstractSyntaxes                         ABSTRACT-SYNTAX OPTIONAL,
 *     &EATransactions                           TRANSACTION OPTIONAL,
 *     &Associations                             APPLICATION-ASSOCIATION,
 *     &accessControl                            Identifier,
 *     &logicalStatus                            LogicalStatus,
 *     &Capabilities                             MMSString,
 *     &physicalStatus                           PhysicalStatus,
 *     &local-detail                             BIT STRING(SIZE (1..128)),
 *     &AccessControlLists                       ACCESS-CONTROL-LIST OPTIONAL,
 *     &Domains                                  DOMAIN OPTIONAL,
 *     &ProgramInvocations                       PROGRAM-INVOCATION OPTIONAL,
 *     &UnitControls                             UNIT-CONTROL OPTIONAL,
 *     &UnnamedVariables                         UNNAMED-VARIABLE OPTIONAL,
 *     &NamedVariables                           NAMED-VARIABLE OPTIONAL,
 *     &NamedVariableLists                       NAMED-VARIABLE-LIST OPTIONAL,
 *     &NamedTypes                               NAMED-TYPE OPTIONAL,
 *     &DataExchanges                            DATA-EXCHANGE OPTIONAL,
 *     &Semaphores                               SEMAPHORE OPTIONAL,
 *     &OperatorStations                         OPERATOR-STATION OPTIONAL,
 *     &EventConditions                          EVENT-CONDITION OPTIONAL,
 *     &EventActions                             EVENT-ACTION OPTIONAL,
 *     &EventEnrollments                         EVENT-ENROLLMENT OPTIONAL,
 *     &EventConditionLists                      EVENT-CONDITION-LIST OPTIONAL,
 *     &Journals                                 JOURNAL OPTIONAL,
 *     &operationState                           VMDState,
 *     &safety-Interlocks-Violated               BOOLEAN,
 *     &any-Resource-Power-On                    BOOLEAN,
 *     &all-Resources-Calibrated                 BOOLEAN,
 *     &local-Control                            BOOLEAN,
 *     &selected-Program-Invocation              Identifier
 * }
 * ```
 * 
 * @interface
 */
export
interface VMD {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "VMD";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof VMD]: $.ASN1Decoder<VMD[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof VMD]: $.ASN1Encoder<VMD[_K]>;
    }>;
    /**
     * @summary &executiveFunction
     */
    readonly "&executiveFunction"?: ApplicationReference;
    /**
     * @summary &vendorName
     */
    readonly "&vendorName"?: MMSString;
    /**
     * @summary &modelName
     */
    readonly "&modelName"?: MMSString;
    /**
     * @summary &revision
     */
    readonly "&revision"?: MMSString;
    /**
     * @summary &AbstractSyntaxes
     */
    readonly "&AbstractSyntaxes"?: ABSTRACT_SYNTAX[];
    /**
     * @summary &EATransactions
     */
    readonly "&EATransactions"?: TRANSACTION[];
    /**
     * @summary &Associations
     */
    readonly "&Associations"?: APPLICATION_ASSOCIATION[];
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &logicalStatus
     */
    readonly "&logicalStatus"?: LogicalStatus;
    /**
     * @summary &Capabilities
     */
    readonly "&Capabilities"?: MMSString;
    /**
     * @summary &physicalStatus
     */
    readonly "&physicalStatus"?: PhysicalStatus;
    /**
     * @summary &local-detail
     */
    readonly "&local-detail"?: BIT_STRING;
    /**
     * @summary &AccessControlLists
     */
    readonly "&AccessControlLists"?: ACCESS_CONTROL_LIST[];
    /**
     * @summary &Domains
     */
    readonly "&Domains"?: DOMAIN[];
    /**
     * @summary &ProgramInvocations
     */
    readonly "&ProgramInvocations"?: PROGRAM_INVOCATION[];
    /**
     * @summary &UnitControls
     */
    readonly "&UnitControls"?: UNIT_CONTROL[];
    /**
     * @summary &UnnamedVariables
     */
    readonly "&UnnamedVariables"?: UNNAMED_VARIABLE[];
    /**
     * @summary &NamedVariables
     */
    readonly "&NamedVariables"?: NAMED_VARIABLE[];
    /**
     * @summary &NamedVariableLists
     */
    readonly "&NamedVariableLists"?: NAMED_VARIABLE_LIST[];
    /**
     * @summary &NamedTypes
     */
    readonly "&NamedTypes"?: NAMED_TYPE[];
    /**
     * @summary &DataExchanges
     */
    readonly "&DataExchanges"?: DATA_EXCHANGE[];
    /**
     * @summary &Semaphores
     */
    readonly "&Semaphores"?: SEMAPHORE[];
    /**
     * @summary &OperatorStations
     */
    readonly "&OperatorStations"?: OPERATOR_STATION[];
    /**
     * @summary &EventConditions
     */
    readonly "&EventConditions"?: EVENT_CONDITION[];
    /**
     * @summary &EventActions
     */
    readonly "&EventActions"?: EVENT_ACTION[];
    /**
     * @summary &EventEnrollments
     */
    readonly "&EventEnrollments"?: EVENT_ENROLLMENT[];
    /**
     * @summary &EventConditionLists
     */
    readonly "&EventConditionLists"?: EVENT_CONDITION_LIST[];
    /**
     * @summary &Journals
     */
    readonly "&Journals"?: JOURNAL[];
    /**
     * @summary &operationState
     */
    readonly "&operationState"?: VMDState;
    /**
     * @summary &safety-Interlocks-Violated
     */
    readonly "&safety-Interlocks-Violated"?: BOOLEAN;
    /**
     * @summary &any-Resource-Power-On
     */
    readonly "&any-Resource-Power-On"?: BOOLEAN;
    /**
     * @summary &all-Resources-Calibrated
     */
    readonly "&all-Resources-Calibrated"?: BOOLEAN;
    /**
     * @summary &local-Control
     */
    readonly "&local-Control"?: BOOLEAN;
    /**
     * @summary &selected-Program-Invocation
     */
    readonly "&selected-Program-Invocation"?: Identifier;
};

/* eslint-enable */
