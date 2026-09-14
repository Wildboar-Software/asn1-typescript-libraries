/* eslint-disable */
import {
    BOOLEAN,
    BIT_STRING,
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
import { VMDState, _decode_VMDState, _encode_VMDState } from "../MMS-Object-Module-1/VMDState.ta.mjs";
// export { VMDState, VMDState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_loaded /* IMPORTED_LONG_NAMED_INTEGER */, loaded /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_ready /* IMPORTED_LONG_NAMED_INTEGER */, ready /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_executing /* IMPORTED_LONG_NAMED_INTEGER */, executing /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_motion_paused /* IMPORTED_LONG_NAMED_INTEGER */, motion_paused /* IMPORTED_SHORT_NAMED_INTEGER */, VMDState_manualInterventionRequired /* IMPORTED_LONG_NAMED_INTEGER */, manualInterventionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_VMDState, _encode_VMDState } from "../MMS-Object-Module-1/VMDState.ta.mjs";


/**
 * @summary VMD
 * @description
 * 
 * Abstract representation of a real manufacturing device
 * and the mapping of that representation onto physical/functional aspects
 * of the device. Each VMD has one Executive Function and may contain
 * Domains, Program Invocations, and other named objects. Clients see one
 * VMD independently of any others. ISO 9506-1:2003 §7.1–§7.2.
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
     * @description
     *
     * Identifies the VMD (ApplicationReference). A fully functional executive
     * corresponds to VMD existence. ISO 9506-1:2003 §7.2.1.1.
     *
     */
    readonly "&executiveFunction"?: ApplicationReference;
    /**
     * @summary &vendorName
     * @description
     *
     * Vendor of the system supporting this VMD. ISO 9506-1:2003 §7.2.1.2.
     *
     */
    readonly "&vendorName"?: MMSString;
    /**
     * @summary &modelName
     * @description
     *
     * Model of the supporting system; normally assigned by the vendor. ISO
     * 9506-1:2003 §7.2.1.3.
     *
     */
    readonly "&modelName"?: MMSString;
    /**
     * @summary &revision
     * @description
     *
     * Revision level of the supporting system; normally assigned by the vendor.
     * ISO 9506-1:2003 §7.2.1.4.
     *
     */
    readonly "&revision"?: MMSString;
    /**
     * @summary &AbstractSyntaxes
     * @description
     *
     * Abstract syntaxes this VMD can use in the MMS Application Context,
     * including encodings for Load Data and Execution Argument. Shall not
     * include the ISO 9506-2:2003 MMS abstract syntax. ISO 9506-1:2003
     * §7.2.1.5.
     *
     */
    readonly "&AbstractSyntaxes"?: ABSTRACT_SYNTAX[];
    /**
     * @summary &EATransactions
     * @description
     *
     * Transactions not tied to an AA — those from Event Action processing. ISO
     * 9506-1:2003 §7.2.1.6, §7.3.1.
     *
     */
    readonly "&EATransactions"?: TRANSACTION[];
    /**
     * @summary &Associations
     * @description
     *
     * Associations to MMS clients. At least one is required to use MMS
     * services. ISO 9506-1:2003 §7.2.1.7, clause 8.
     *
     */
    readonly "&Associations"?: APPLICATION_ASSOCIATION[];
    /**
     * @summary &accessControl
     * @description
     *
     * ACL that is necessary (not sufficient) for any service. Object-level ACLs
     * may add conditions. Default Standardized Name: `M_NonDeletable`. ISO
     * 9506-1:2003 §7.2.1.8, clause 9.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &logicalStatus
     * @description
     *
     * One of four levels of MMS functionality offered by the VMD. ISO
     * 9506-1:2003 §7.2.1.9.
     *
     */
    readonly "&logicalStatus"?: LogicalStatus;
    /**
     * @summary &Capabilities
     * @description
     *
     * Locally defined resources (physical or logical), each a character string.
     * No MMS object model; allocation to Domains is an executive-function
     * matter. ISO 9506-1:2003 §7.2.1.10.
     *
     */
    readonly "&Capabilities"?: MMSString;
    /**
     * @summary &physicalStatus
     * @description
     *
     * Gross operational state of all capabilities together (hardware, not
     * communications). ISO 9506-1:2003 §7.2.1.11.
     *
     */
    readonly "&physicalStatus"?: PhysicalStatus;
    /**
     * @summary &local-detail
     * @description
     *
     * Vendor-specified extra status; max 128 bits. Contents are a local matter.
     * ISO 9506-1:2003 §7.2.1.12.
     *
     */
    readonly "&local-detail"?: BIT_STRING;
    /**
     * @summary &AccessControlLists
     * @description
     *
     * ACLs whose name scope is VMD-specific. ISO 9506-1:2003 §7.2.1.13, clause
     * 9.
     *
     */
    readonly "&AccessControlLists"?: ACCESS_CONTROL_LIST[];
    /**
     * @summary &Domains
     * @description
     *
     * Domains: instances of VMD capability use; also Domain- specific name
     * spaces. ISO 9506-1:2003 §7.2.1.14, clause 11.
     *
     */
    readonly "&Domains"?: DOMAIN[];
    /**
     * @summary &ProgramInvocations
     * @description
     *
     * Program Invocations: Domains plus execution control. ISO 9506-1:2003
     * §7.2.1.15, clause 12.
     *
     */
    readonly "&ProgramInvocations"?: PROGRAM_INVOCATION[];
    /**
     * @summary &UnitControls
     * @description
     *
     * Unit Controls (always VMD-specific names). ISO 9506-1:2003 §7.2.1.16,
     * clause 13.
     *
     */
    readonly "&UnitControls"?: UNIT_CONTROL[];
    /**
     * @summary &UnnamedVariables
     * @description
     *
     * Direct memory-space access. Present only if vadr was negotiated. ISO
     * 9506-1:2003 §7.2.1.17, clause 14.
     *
     */
    readonly "&UnnamedVariables"?: UNNAMED_VARIABLE[];
    /**
     * @summary &NamedVariables
     * @description
     *
     * Named Variables with VMD-specific scope. Requires vnam. ISO 9506-1:2003
     * §7.2.1.18, clause 14.
     *
     */
    readonly "&NamedVariables"?: NAMED_VARIABLE[];
    /**
     * @summary &NamedVariableLists
     * @description
     *
     * Named Variable Lists with VMD-specific scope. Requires vnam and vlis. ISO
     * 9506-1:2003 §7.2.1.19, clause 14.
     *
     */
    readonly "&NamedVariableLists"?: NAMED_VARIABLE_LIST[];
    /**
     * @summary &NamedTypes
     * @description
     *
     * Named Types with VMD-specific scope. Requires vnam. ISO 9506-1:2003
     * §7.2.1.20, clause 14.
     *
     */
    readonly "&NamedTypes"?: NAMED_TYPE[];
    /**
     * @summary &DataExchanges
     * @description
     *
     * Data Exchange objects (VMD-specific). ISO 9506-1:2003 §7.2.1.21, clause
     * 15.
     *
     */
    readonly "&DataExchanges"?: DATA_EXCHANGE[];
    /**
     * @summary &Semaphores
     * @description
     *
     * Semaphores (VMD-specific). ISO 9506-1:2003 §7.2.1.22, clause 16.
     *
     */
    readonly "&Semaphores"?: SEMAPHORE[];
    /**
     * @summary &OperatorStations
     * @description
     *
     * Operator Stations (VMD-specific). ISO 9506-1:2003 §7.2.1.23, clause 17.
     *
     */
    readonly "&OperatorStations"?: OPERATOR_STATION[];
    /**
     * @summary &EventConditions
     * @description
     *
     * Event Conditions (VMD-specific). ISO 9506-1:2003 §7.2.1.24, clauses
     * 18–19.
     *
     */
    readonly "&EventConditions"?: EVENT_CONDITION[];
    /**
     * @summary &EventActions
     * @description
     *
     * Event Actions (VMD-specific). ISO 9506-1:2003 §7.2.1.25, clauses 18, 20.
     *
     */
    readonly "&EventActions"?: EVENT_ACTION[];
    /**
     * @summary &EventEnrollments
     * @description
     *
     * Event Enrollments (VMD-specific). ISO 9506-1:2003 §7.2.1.26, clauses 18,
     * 21.
     *
     */
    readonly "&EventEnrollments"?: EVENT_ENROLLMENT[];
    /**
     * @summary &EventConditionLists
     * @description
     *
     * Event Condition Lists (VMD-specific). ISO 9506-1:2003 §7.2.1.27, clauses
     * 18, 22.
     *
     */
    readonly "&EventConditionLists"?: EVENT_CONDITION_LIST[];
    /**
     * @summary &Journals
     * @description
     *
     * Journals (VMD-specific). ISO 9506-1:2003 §7.2.1.28, clause 23.
     *
     */
    readonly "&Journals"?: JOURNAL[];
    /**
     * @summary &operationState
     * @description
     *
     * csr CBB: operational state of a single complex machine. ISO 9506-1:2003
     * §7.2.1.29.
     *
     */
    readonly "&operationState"?: VMDState;
    /**
     * @summary &safety-Interlocks-Violated
     * @description
     *
     * csr CBB (robots etc.): true if safety interlocks were violated since last
     * reset. Reset method is local. ISO 9506-1:2003 §7.2.1.30.
     *
     */
    readonly "&safety-Interlocks-Violated"?: BOOLEAN;
    /**
     * @summary &any-Resource-Power-On
     * @description
     *
     * csr CBB: true if any physical resource has power. Logical OR of
     * per-resource attributes. ISO 9506-1:2003 §7.2.1.31.
     *
     */
    readonly "&any-Resource-Power-On"?: BOOLEAN;
    /**
     * @summary &all-Resources-Calibrated
     * @description
     *
     * csr CBB: true if every physical resource that has a calibration attribute
     * is calibrated. ISO 9506-1:2003 §7.2.1.32.
     *
     */
    readonly "&all-Resources-Calibrated"?: BOOLEAN;
    /**
     * @summary &local-Control
     * @description
     *
     * csr CBB: true if a local agent (operator or automatic) controls any
     * physical resource, inhibiting remote control. Interrelated with operation
     * state and logical status (Table 6). ISO 9506-1:2003 §7.2.1.33.
     *
     */
    readonly "&local-Control"?: BOOLEAN;
    /**
     * @summary &selected-Program-Invocation
     * @description
     *
     * csr CBB: PI selected to control the system (Select); that PI has &control
     * = controlling. ISO 9506-1:2003 §7.2.1.34.
     *
     */
    readonly "&selected-Program-Invocation"?: Identifier;
};

/* eslint-enable */
