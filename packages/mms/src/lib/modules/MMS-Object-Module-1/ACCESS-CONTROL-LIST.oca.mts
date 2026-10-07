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
import * as $ from "@wildboar/asn1/functional";
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { AccessCondition, _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary ACCESS_CONTROL_LIST
 * @description
 * 
 * Specifies conditions under which
 * named MMS services on controlled objects are required to fail. Does
 * not require any service to succeed. Service-class conditions
 * (read/store/write/load/execute/delete/edit) are AccessCondition
 * values. Controlled-object lists record objects under this ACL.
 * ISO 9506-1:2003 §9.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACCESS-CONTROL-LIST ::= CLASS {
 *     &name                      Identifier,
 *     &accessControl             Identifier,
 *     &readAccessCondition       [0] AccessCondition OPTIONAL,
 *     &storeAccessCondition      [1] AccessCondition OPTIONAL,
 *     &writeAccessCondition      [2] AccessCondition OPTIONAL,
 *     &loadAccessCondition       [3] AccessCondition OPTIONAL,
 *     &executeAccessCondition    [4] AccessCondition OPTIONAL,
 *     &deleteAccessCondition     [5] AccessCondition OPTIONAL,
 *     &editAccessCondition       [6] AccessCondition OPTIONAL,
 *     --
 *     -- The following fields are used to record lists of objects placed
 *     -- under the control of this ACCESS-CONTROL-LIST object.
 *     -- They will be referred to collectively as the Controlled Object Lists
 *     --
 *     &AccessControlLists        Identifier OPTIONAL,
 *     &Domains                   Identifier OPTIONAL,
 *     &ProgramInvocations        Identifier OPTIONAL,
 *     &UnitControls              Identifier OPTIONAL,
 *     &UnnamedVariables          Address OPTIONAL,
 *     &NamedVariables            ObjectName OPTIONAL,
 *     &NamedVariableLists        ObjectName OPTIONAL,
 *     &NamedTypes                ObjectName OPTIONAL,
 *     &DataExchanges             ObjectName OPTIONAL,
 *     &Semaphores                Identifier OPTIONAL,
 *     &OperatorStations          Identifier OPTIONAL,
 *     &EventConditions           ObjectName OPTIONAL,
 *     &EventActions              ObjectName OPTIONAL,
 *     &EventEnrollments          ObjectName OPTIONAL,
 *     &Journals                  ObjectName OPTIONAL,
 *     &EventConditionLists       ObjectName OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface ACCESS_CONTROL_LIST {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ACCESS-CONTROL-LIST";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof ACCESS_CONTROL_LIST]: $.ASN1Decoder<ACCESS_CONTROL_LIST[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof ACCESS_CONTROL_LIST]: $.ASN1Encoder<ACCESS_CONTROL_LIST[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * VMD-specific Identifier of this ACL. ISO 9506-1:2003 §9.1.1.1.
     *
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL that governs access to this ACL object. ISO 9506-1:2003 §9.1.1.2.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &readAccessCondition
     * @description
     *
     * Condition for read-class services (Read, Output). ISO 9506-1:2003
     * §9.1.1.3.
     *
     */
    readonly "&readAccessCondition"?: AccessCondition;
    /**
     * @summary &storeAccessCondition
     * @description
     *
     * Condition for store-class services (upload/store Domain or Unit Control,
     * ReadJournal). ISO 9506-1:2003 §9.1.1.4.
     *
     */
    readonly "&storeAccessCondition"?: AccessCondition;
    /**
     * @summary &writeAccessCondition
     * @description
     *
     * Condition for write-class services (Write, Input, ExchangeData). ISO
     * 9506-1:2003 §9.1.1.5.
     *
     */
    readonly "&writeAccessCondition"?: AccessCondition;
    /**
     * @summary &loadAccessCondition
     * @description
     *
     * Condition for load-class services (define/create/alter objects,
     * TakeControl, TriggerEvent, …). Create-style services are also gated by
     * the VMD ACL. ISO 9506-1:2003 §9.1.1.6.
     *
     */
    readonly "&loadAccessCondition"?: AccessCondition;
    /**
     * @summary &executeAccessCondition
     * @description
     *
     * Condition for execute-class services (Start/Stop/Resume/ Reset/Kill,
     * Select, UnitControl start/stop, VMDStop/ VMDReset). ISO 9506-1:2003
     * §9.1.1.7.
     *
     */
    readonly "&executeAccessCondition"?: AccessCondition;
    /**
     * @summary &deleteAccessCondition
     * @description
     *
     * Condition for Delete* services. NEVER here makes MMS Deletable report
     * false. ISO 9506-1:2003 §9.1.1.8, §9.1.4.
     *
     */
    readonly "&deleteAccessCondition"?: AccessCondition;
    /**
     * @summary &editAccessCondition
     * @description
     *
     * Condition for changing access control (ChangeAccessControl). ISO
     * 9506-1:2003 §9.1.1.9.
     *
     */
    readonly "&editAccessCondition"?: AccessCondition;
    /**
     * @summary &AccessControlLists
     * @description
     *
     * Controlled ACL objects. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&AccessControlLists"?: Identifier;
    /**
     * @summary &Domains
     * @description
     *
     * Controlled Domain objects. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&Domains"?: Identifier;
    /**
     * @summary &ProgramInvocations
     * @description
     *
     * Controlled Program Invocations. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&ProgramInvocations"?: Identifier;
    /**
     * @summary &UnitControls
     * @description
     *
     * Controlled Unit Controls. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&UnitControls"?: Identifier;
    /**
     * @summary &UnnamedVariables
     * @description
     *
     * Controlled Unnamed Variables (vadr). ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&UnnamedVariables"?: Address;
    /**
     * @summary &NamedVariables
     * @description
     *
     * Controlled Named Variables (vnam). ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&NamedVariables"?: ObjectName;
    /**
     * @summary &NamedVariableLists
     * @description
     *
     * Controlled Named Variable Lists (vnam+vlis). ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&NamedVariableLists"?: ObjectName;
    /**
     * @summary &NamedTypes
     * @description
     *
     * Controlled Named Types (vnam). ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&NamedTypes"?: ObjectName;
    /**
     * @summary &DataExchanges
     * @description
     *
     * Controlled Data Exchanges. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&DataExchanges"?: ObjectName;
    /**
     * @summary &Semaphores
     * @description
     *
     * Controlled Semaphores. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&Semaphores"?: Identifier;
    /**
     * @summary &OperatorStations
     * @description
     *
     * Controlled Operator Stations. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&OperatorStations"?: Identifier;
    /**
     * @summary &EventConditions
     * @description
     *
     * Controlled Event Conditions. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&EventConditions"?: ObjectName;
    /**
     * @summary &EventActions
     * @description
     *
     * Controlled Event Actions. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&EventActions"?: ObjectName;
    /**
     * @summary &EventEnrollments
     * @description
     *
     * Controlled Event Enrollments. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&EventEnrollments"?: ObjectName;
    /**
     * @summary &Journals
     * @description
     *
     * Controlled Journals. ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&Journals"?: ObjectName;
    /**
     * @summary &EventConditionLists
     * @description
     *
     * Controlled Event Condition Lists (cspi). ISO 9506-1:2003 §9.1.1.
     *
     */
    readonly "&EventConditionLists"?: ObjectName;
};

/* eslint-enable */
