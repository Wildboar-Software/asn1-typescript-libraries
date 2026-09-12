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
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
import { DomainState, _decode_DomainState, _encode_DomainState } from "../MMS-Object-Module-1/DomainState.ta.mjs";
// export { DomainState, DomainState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_loading /* IMPORTED_LONG_NAMED_INTEGER */, loading /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_ready /* IMPORTED_LONG_NAMED_INTEGER */, ready /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_in_use /* IMPORTED_LONG_NAMED_INTEGER */, in_use /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_complete /* IMPORTED_LONG_NAMED_INTEGER */, complete /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_incomplete /* IMPORTED_LONG_NAMED_INTEGER */, incomplete /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d1 /* IMPORTED_LONG_NAMED_INTEGER */, d1 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d2 /* IMPORTED_LONG_NAMED_INTEGER */, d2 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d3 /* IMPORTED_LONG_NAMED_INTEGER */, d3 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d4 /* IMPORTED_LONG_NAMED_INTEGER */, d4 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d5 /* IMPORTED_LONG_NAMED_INTEGER */, d5 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d6 /* IMPORTED_LONG_NAMED_INTEGER */, d6 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d7 /* IMPORTED_LONG_NAMED_INTEGER */, d7 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d8 /* IMPORTED_LONG_NAMED_INTEGER */, d8 /* IMPORTED_SHORT_NAMED_INTEGER */, DomainState_d9 /* IMPORTED_LONG_NAMED_INTEGER */, d9 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DomainState, _encode_DomainState } from "../MMS-Object-Module-1/DomainState.ta.mjs";
import { NAMED_VARIABLE } from "../MMS-Object-Module-1/NAMED-VARIABLE.oca.mjs";
// export { NAMED_VARIABLE } from "../MMS-Object-Module-1/NAMED-VARIABLE.oca.mjs";
import { NAMED_VARIABLE_LIST } from "../MMS-Object-Module-1/NAMED-VARIABLE-LIST.oca.mjs";
// export { NAMED_VARIABLE_LIST } from "../MMS-Object-Module-1/NAMED-VARIABLE-LIST.oca.mjs";
import { NAMED_TYPE } from "../MMS-Object-Module-1/NAMED-TYPE.oca.mjs";
// export { NAMED_TYPE } from "../MMS-Object-Module-1/NAMED-TYPE.oca.mjs";
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


/**
 * @summary DOMAIN
 * @description
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
     */
    readonly "&name"?: Identifier;
    /**
     * @summary &Capabilities
     */
    readonly "&Capabilities"?: MMSString;
    /**
     * @summary &state
     */
    readonly "&state"?: DomainState;
    /**
     * @summary &aAssociation
     */
    readonly "&aAssociation"?: INTEGER;
    /**
     * @summary &accessControl
     */
    readonly "&accessControl"?: Identifier;
    /**
     * @summary &sharable
     */
    readonly "&sharable"?: BOOLEAN;
    /**
     * @summary &ProgramInvocations
     */
    readonly "&ProgramInvocations"?: Identifier;
    /**
     * @summary &uploadsInProgress
     */
    readonly "&uploadsInProgress"?: INTEGER;
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
};

/* eslint-enable */
