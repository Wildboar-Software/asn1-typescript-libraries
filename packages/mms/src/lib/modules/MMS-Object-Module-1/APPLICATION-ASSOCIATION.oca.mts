/* eslint-disable */
import {
    INTEGER,
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
import { Authentication_value } from "../ACSE-1/Authentication-value.ta.mjs";
import { TRANSACTION } from "../MMS-Object-Module-1/TRANSACTION.oca.mjs";
import { NAMED_VARIABLE } from "../MMS-Object-Module-1/NAMED-VARIABLE.oca.mjs";
import { NAMED_VARIABLE_LIST } from "../MMS-Object-Module-1/NAMED-VARIABLE-LIST.oca.mjs";
import { NAMED_TYPE } from "../MMS-Object-Module-1/NAMED-TYPE.oca.mjs";
import { EVENT_CONDITION } from "../MMS-Object-Module-1/EVENT-CONDITION.oca.mjs";
import { EVENT_ACTION } from "../MMS-Object-Module-1/EVENT-ACTION.oca.mjs";
import { EVENT_ENROLLMENT } from "../MMS-Object-Module-1/EVENT-ENROLLMENT.oca.mjs";
import { EVENT_CONDITION_LIST } from "../MMS-Object-Module-1/EVENT-CONDITION-LIST.oca.mjs";
import { JOURNAL } from "../MMS-Object-Module-1/JOURNAL.oca.mjs";
import { ServiceSupportOptions, _decode_ServiceSupportOptions, _encode_ServiceSupportOptions } from "../MMS-Object-Module-1/ServiceSupportOptions.ta.mjs";
import { ParameterSupportOptions, _decode_ParameterSupportOptions, _encode_ParameterSupportOptions } from "../MMS-Object-Module-1/ParameterSupportOptions.ta.mjs";
import { ULSM } from "../MMS-Object-Module-1/ULSM.oca.mjs";
import { AdditionalSupportOptions, _decode_AdditionalSupportOptions, _encode_AdditionalSupportOptions } from "../MMS-Object-Module-1/AdditionalSupportOptions.ta.mjs";
import { AdditionalCBBOptions, _decode_AdditionalCBBOptions, _encode_AdditionalCBBOptions } from "../MMS-Object-Module-1/AdditionalCBBOptions.ta.mjs";


/**
 * @summary APPLICATION_ASSOCIATION
 * @description
 * 
 * One MMS application association
 * between this VMD and an MMS client. Created by Initiate. Holds
 * AA-scoped objects, negotiated service/parameter CBBs, and the
 * association's transactions. ISO 9506-1:2003 §8.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APPLICATION-ASSOCIATION ::= CLASS {
 *     &aaIdentifier           INTEGER UNIQUE,
 *     &client                 ApplicationReference,
 *     &abstractSyntax         ABSTRACT-SYNTAX,
 *     &authenticationValue    Authentication-value OPTIONAL,
 *     -- This field represents a 'user password'
 *     &Transactions           TRANSACTION OPTIONAL,
 *     &NamedVariables         NAMED-VARIABLE OPTIONAL,
 *     &NamedVariableLists     NAMED-VARIABLE-LIST OPTIONAL,
 *     &NamedTypes             NAMED-TYPE OPTIONAL,
 *     &EventConditions        EVENT-CONDITION OPTIONAL,
 *     &EventActions           EVENT-ACTION OPTIONAL,
 *     &EventEnrollments       EVENT-ENROLLMENT OPTIONAL,
 *     &EventConditionLists    EVENT-CONDITION-LIST OPTIONAL,
 *     &Journals               JOURNAL OPTIONAL,
 *     &services               ServiceSupportOptions,
 *     &parameters             ParameterSupportOptions,
 *     &nest                   INTEGER,
 *     &Ulsms                  ULSM OPTIONAL,
 *     &extendedServices       AdditionalSupportOptions,
 *     &extendedParameters     AdditionalCBBOptions
 *   }
 * ```
 * 
 * @interface
 */
export
interface APPLICATION_ASSOCIATION {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "APPLICATION-ASSOCIATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof APPLICATION_ASSOCIATION]: $.ASN1Decoder<APPLICATION_ASSOCIATION[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof APPLICATION_ASSOCIATION]: $.ASN1Encoder<APPLICATION_ASSOCIATION[_K]>;
    }>;
    /**
     * @summary &aaIdentifier
     * @description
     *
     * Identifies the AA. Never communicated; form is a local matter. ISO
     * 9506-1:2003 §8.1.3.1.
     *
     */
    readonly "&aaIdentifier"?: INTEGER;
    /**
     * @summary &client
     * @description
     *
     * MMS client of this association. ISO 9506-1:2003 §8.1.3.2.
     *
     */
    readonly "&client"?: ApplicationReference;
    /**
     * @summary &abstractSyntax
     * @description
     *
     * Abstract syntax in use on this association. ISO 9506-1:2003 §8.1.3.3.
     *
     */
    readonly "&abstractSyntax"?: ABSTRACT_SYNTAX;
    /**
     * @summary &authenticationValue
     * @description
     *
     * Authentication presented by the client at AA establishment (user
     * password). ISO 9506-1:2003 §8.1.3.4.
     *
     */
    readonly "&authenticationValue"?: Authentication_value;
    /**
     * @summary &Transactions
     * @description
     *
     * Transactions on this AA. Max count set by Initiate; may be empty. ISO
     * 9506-1:2003 §8.1.3.5.
     *
     */
    readonly "&Transactions"?: TRANSACTION[];
    /**
     * @summary &NamedVariables
     * @description
     *
     * AA-specific Named Variables (vnam). ISO 9506-1:2003 §8.1.3.6, clause 14.
     *
     */
    readonly "&NamedVariables"?: NAMED_VARIABLE[];
    /**
     * @summary &NamedVariableLists
     * @description
     *
     * AA-specific Named Variable Lists (vnam+vlis). ISO 9506-1:2003 §8.1.3.7,
     * clause 14.
     *
     */
    readonly "&NamedVariableLists"?: NAMED_VARIABLE_LIST[];
    /**
     * @summary &NamedTypes
     * @description
     *
     * AA-specific Named Types (vnam). ISO 9506-1:2003 §8.1.3.8, clause 14.
     *
     */
    readonly "&NamedTypes"?: NAMED_TYPE[];
    /**
     * @summary &EventConditions
     * @description
     *
     * AA-specific Event Conditions. ISO 9506-1:2003 §8.1.3.9, clauses 18–19.
     *
     */
    readonly "&EventConditions"?: EVENT_CONDITION[];
    /**
     * @summary &EventActions
     * @description
     *
     * AA-specific Event Actions. ISO 9506-1:2003 §8.1.3.10, clauses 18, 20.
     *
     */
    readonly "&EventActions"?: EVENT_ACTION[];
    /**
     * @summary &EventEnrollments
     * @description
     *
     * AA-specific Event Enrollments. ISO 9506-1:2003 §8.1.3.11, clauses 18, 21.
     *
     */
    readonly "&EventEnrollments"?: EVENT_ENROLLMENT[];
    /**
     * @summary &EventConditionLists
     * @description
     *
     * AA-specific Event Condition Lists. ISO 9506-1:2003 §8.1.3.12, clauses 18,
     * 22.
     *
     */
    readonly "&EventConditionLists"?: EVENT_CONDITION_LIST[];
    /**
     * @summary &Journals
     * @description
     *
     * AA-specific Journals. ISO 9506-1:2003 §8.1.3.13, clause 23.
     *
     */
    readonly "&Journals"?: JOURNAL[];
    /**
     * @summary &services
     * @description
     *
     * MMS services supported on this AA (Initiate). ISO 9506-1:2003 §8.1.3.14, §8.2.
     *
     */
    readonly "&services"?: ServiceSupportOptions;
    /**
     * @summary &parameters
     * @description
     *
     * Parameter CBBs negotiated at Initiate. ISO 9506-1:2003 §8.1.3.15, §8.2.
     *
     */
    readonly "&parameters"?: ParameterSupportOptions;
    /**
     * @summary &nest
     * @description
     *
     * Max non-leaf nodes of a type tree between root and deepest leaf. 0 if
     * neither str1 nor str2; otherwise > 0. ISO 9506-1:2003 §8.1.3.16.
     *
     */
    readonly "&nest"?: INTEGER;
    /**
     * @summary &Ulsms
     * @description
     *
     * Upload State Machines on this AA. ISO 9506-1:2003 §8.1.3.17, clause 11.
     *
     */
    readonly "&Ulsms"?: ULSM[];
    /**
     * @summary &extendedServices
     * @description
     *
     * Extended services (csr/csnc/csplc/cspi) negotiated at Initiate. ISO
     * 9506-1:2003 §8.1.3.18, §8.2.
     *
     */
    readonly "&extendedServices"?: AdditionalSupportOptions;
    /**
     * @summary &extendedParameters
     * @description
     *
     * Extended parameter CBBs (cspi) from Initiate. ISO 9506-1:2003 §8.1.3.19,
     * §8.2.
     *
     */
    readonly "&extendedParameters"?: AdditionalCBBOptions;
};

/* eslint-enable */
