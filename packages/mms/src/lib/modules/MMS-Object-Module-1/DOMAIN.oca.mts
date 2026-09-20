/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { DomainState, _decode_DomainState, _encode_DomainState } from "../MMS-Object-Module-1/DomainState.ta.mjs";
import { NAMED_VARIABLE } from "../MMS-Object-Module-1/NAMED-VARIABLE.oca.mjs";
import { NAMED_VARIABLE_LIST } from "../MMS-Object-Module-1/NAMED-VARIABLE-LIST.oca.mjs";
import { NAMED_TYPE } from "../MMS-Object-Module-1/NAMED-TYPE.oca.mjs";
import { EVENT_CONDITION } from "../MMS-Object-Module-1/EVENT-CONDITION.oca.mjs";
import { EVENT_ACTION } from "../MMS-Object-Module-1/EVENT-ACTION.oca.mjs";
import { EVENT_ENROLLMENT } from "../MMS-Object-Module-1/EVENT-ENROLLMENT.oca.mjs";
import { EVENT_CONDITION_LIST } from "../MMS-Object-Module-1/EVENT-CONDITION-LIST.oca.mjs";
import { JOURNAL } from "../MMS-Object-Module-1/JOURNAL.oca.mjs";


/**
 * @summary DOMAIN
 * @description
 * 
 * A subset of VMD capabilities used for a specific
 * purpose; also a Domain-specific name space. Created by download, by a
 * Program Invocation, locally, or predefined. State covers loading
 * through in-use; lost AA during download deletes the Domain.
 * ISO 9506-1:2003 §11.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOMAIN ::= CLASS {
 *     &name                   Identifier,
 *     -- shall be unique among the names of all Domains within the VMD
 *     &Capabilities           MMSString,
 *     &state                  DomainState,
 *     &aAssociation           INTEGER OPTIONAL,
 *     -- This field shall be present if and only if
 *     -- the &state field has a value of
 *     -- loading, complete, incomplete, d1, d2, d3 or d9
 *     &accessControl          Identifier,
 *     &sharable               BOOLEAN,
 *     &ProgramInvocations     Identifier OPTIONAL,
 *     &uploadsInProgress      INTEGER,
 *     -- The following items reflect the Domain content
 *     -- All the items listed have Domain-specific names.
 *     &NamedVariables         NAMED-VARIABLE OPTIONAL,
 *     &NamedVariableLists     NAMED-VARIABLE-LIST OPTIONAL,
 *     &NamedTypes             NAMED-TYPE OPTIONAL,
 *     &EventConditions        EVENT-CONDITION OPTIONAL,
 *     &EventActions           EVENT-ACTION OPTIONAL,
 *     &EventEnrollments       EVENT-ENROLLMENT OPTIONAL,
 *     &EventConditionLists    EVENT-CONDITION-LIST OPTIONAL,
 *     &Journals               JOURNAL OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface DOMAIN {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DOMAIN";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof DOMAIN]: $.ASN1Decoder<DOMAIN[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof DOMAIN]: $.ASN1Encoder<DOMAIN[_K]>;
    }>;
    /**
     * @summary &name
     * @description
     *
     * Unique Domain name within the VMD. ISO 9506-1:2003 §11.1.1.1.
     *
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &Capabilities
     * @description
     *
     * Implementation-specific resource strings (memory, processors, I/O
     * bindings). ISO 9506-1:2003 §11.1.1.2.
     *
     */
    readonly "&Capabilities"?: MMSString;
    /**
     * @summary &state
     * @description
     *
     * Domain lifecycle state. ISO 9506-1:2003 §11.1.1.3.
     *
     */
    readonly "&state"?: DomainState;
    /**
     * @summary &aAssociation
     * @description
     *
     * AA used for download. Present iff state is loading, complete, incomplete,
     * d1, d2, d3, or d9. Lost AA before ready deletes the Domain. Not reported
     * by MMS. ISO 9506-1:2003 §11.1.1.4.
     *
     */
    readonly "&aAssociation"?: INTEGER;
    /**
     * @summary &accessControl
     * @description
     *
     * ACL gating upload, delete, and ACL/name change. ISO 9506-1:2003
     * §11.1.1.5.
     *
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &sharable
     * @description
     *
     * Whether more than one PI may use this Domain at once. Sharable does not
     * imply read-only. ISO 9506-1:2003 §11.1.1.6.
     *
     */
    readonly "&sharable"?: BOOLEAN;
    /**
     * @summary &ProgramInvocations
     * @description
     *
     * PIs currently using this Domain. At most one if not sharable; non-empty
     * if in-use. ISO 9506-1:2003 §11.1.1.7.
     *
     */
    readonly "&ProgramInvocations"?: Identifier;
    /**
     * @summary &uploadsInProgress
     * @description
     *
     * Count of ULSMs for this Domain; 0 = none. ISO 9506-1:2003 §11.1.1.8.
     *
     */
    readonly "&uploadsInProgress"?: INTEGER;
    /**
     * @summary &NamedVariables
     * @description
     *
     * Domain-specific Named Variables (vnam). ISO 9506-1:2003 §11.1.1.9.
     *
     */
    readonly "&NamedVariables"?: NAMED_VARIABLE[];
    /**
     * @summary &NamedVariableLists
     * @description
     *
     * Domain-specific Named Variable Lists (vnam+vlis). ISO 9506-1:2003
     * §11.1.1.10.
     *
     */
    readonly "&NamedVariableLists"?: NAMED_VARIABLE_LIST[];
    /**
     * @summary &NamedTypes
     * @description
     *
     * Domain-specific Named Types (vnam). ISO 9506-1:2003 §11.1.1.11.
     *
     */
    readonly "&NamedTypes"?: NAMED_TYPE[];
    /**
     * @summary &EventConditions
     * @description
     *
     * Domain-specific Event Conditions. ISO 9506-1:2003 §11.1.1.12.
     *
     */
    readonly "&EventConditions"?: EVENT_CONDITION[];
    /**
     * @summary &EventActions
     * @description
     *
     * Domain-specific Event Actions. ISO 9506-1:2003 §11.1.1.13.
     *
     */
    readonly "&EventActions"?: EVENT_ACTION[];
    /**
     * @summary &EventEnrollments
     * @description
     *
     * Domain-specific Event Enrollments. ISO 9506-1:2003 §11.1.1.14.
     *
     */
    readonly "&EventEnrollments"?: EVENT_ENROLLMENT[];
    /**
     * @summary &EventConditionLists
     * @description
     *
     * Domain-specific Event Condition Lists (cspi). ISO 9506-1:2003 §11.1.1.15.
     *
     */
    readonly "&EventConditionLists"?: EVENT_CONDITION_LIST[];
    /**
     * @summary &Journals
     * @description
     *
     * Domain-specific Journals. ISO 9506-1:2003 §11.1.1.16.
     *
     */
    readonly "&Journals"?: JOURNAL[];
};

/* eslint-enable */
