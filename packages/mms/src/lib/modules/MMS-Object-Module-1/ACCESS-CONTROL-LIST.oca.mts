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
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { AccessCondition, _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";
// export { AccessCondition, _decode_AccessCondition, _encode_AccessCondition } from "../MMS-Object-Module-1/AccessCondition.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary ACCESS_CONTROL_LIST
 * @description
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
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &readAccessCondition
     */
    readonly "&readAccessCondition"?: AccessCondition;
    /**
     * @summary &storeAccessCondition
     */
    readonly "&storeAccessCondition"?: AccessCondition;
    /**
     * @summary &writeAccessCondition
     */
    readonly "&writeAccessCondition"?: AccessCondition;
    /**
     * @summary &loadAccessCondition
     */
    readonly "&loadAccessCondition"?: AccessCondition;
    /**
     * @summary &executeAccessCondition
     */
    readonly "&executeAccessCondition"?: AccessCondition;
    /**
     * @summary &deleteAccessCondition
     */
    readonly "&deleteAccessCondition"?: AccessCondition;
    /**
     * @summary &editAccessCondition
     */
    readonly "&editAccessCondition"?: AccessCondition;
    /**
     * @summary &AccessControlLists
     */
    readonly "&AccessControlLists"?: Identifier;
    /**
     * @summary &Domains
     */
    readonly "&Domains"?: Identifier;
    /**
     * @summary &ProgramInvocations
     */
    readonly "&ProgramInvocations"?: Identifier;
    /**
     * @summary &UnitControls
     */
    readonly "&UnitControls"?: Identifier;
    /**
     * @summary &UnnamedVariables
     */
    readonly "&UnnamedVariables"?: Address;
    /**
     * @summary &NamedVariables
     */
    readonly "&NamedVariables"?: ObjectName;
    /**
     * @summary &NamedVariableLists
     */
    readonly "&NamedVariableLists"?: ObjectName;
    /**
     * @summary &NamedTypes
     */
    readonly "&NamedTypes"?: ObjectName;
    /**
     * @summary &DataExchanges
     */
    readonly "&DataExchanges"?: ObjectName;
    /**
     * @summary &Semaphores
     */
    readonly "&Semaphores"?: Identifier;
    /**
     * @summary &OperatorStations
     */
    readonly "&OperatorStations"?: Identifier;
    /**
     * @summary &EventConditions
     */
    readonly "&EventConditions"?: ObjectName;
    /**
     * @summary &EventActions
     */
    readonly "&EventActions"?: ObjectName;
    /**
     * @summary &EventEnrollments
     */
    readonly "&EventEnrollments"?: ObjectName;
    /**
     * @summary &Journals
     */
    readonly "&Journals"?: ObjectName;
    /**
     * @summary &EventConditionLists
     */
    readonly "&EventConditionLists"?: ObjectName;
};

/* eslint-enable */
