/* eslint-disable */
import {
    BOOLEAN,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";


/**
 * @summary ATTRIBUTE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ATTRIBUTE ::= CLASS {
 *   &derivation            ATTRIBUTE OPTIONAL,
 *   &Type                  OPTIONAL, -- either &Type or &derivation required
 *   &equality-match        MATCHING-RULE OPTIONAL,
 *   &ordering-match        MATCHING-RULE OPTIONAL,
 *   &substrings-match      MATCHING-RULE OPTIONAL,
 *   &single-valued         BOOLEAN DEFAULT FALSE,
 *   &collective            BOOLEAN DEFAULT FALSE,
 *   -- operational extensions
 *   &no-user-modification  BOOLEAN DEFAULT FALSE,
 *   &usage                 AttributeUsage DEFAULT userApplications,
 *   &id                    OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX {
 *   [SUBTYPE OF &derivation]
 *   [WITH SYNTAX &Type]
 *   [EQUALITY MATCHING RULE &equality-match]
 *   [ORDERING MATCHING RULE &ordering-match]
 *   [SUBSTRINGS MATCHING RULE &substrings-match]
 *   [SINGLE VALUE &single-valued]
 *   [COLLECTIVE &collective]
 *   [NO USER MODIFICATION &no-user-modification]
 *   [USAGE &usage]
 *   ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface ATTRIBUTE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof ATTRIBUTE<Type>]: $.ASN1Decoder<ATTRIBUTE<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof ATTRIBUTE<Type>]: $.ASN1Encoder<ATTRIBUTE<Type>[_K]>;
    }>;
    /**
     * @summary &derivation
     */
    readonly "&derivation"?: ATTRIBUTE;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &equality-match
     */
    readonly "&equality-match"?: MATCHING_RULE;
    /**
     * @summary &ordering-match
     */
    readonly "&ordering-match"?: MATCHING_RULE;
    /**
     * @summary &substrings-match
     */
    readonly "&substrings-match"?: MATCHING_RULE;
    /**
     * @summary &single-valued
     */
    readonly "&single-valued"?: BOOLEAN;
    /**
     * @summary &collective
     */
    readonly "&collective"?: BOOLEAN;
    /**
     * @summary &no-user-modification
     */
    readonly "&no-user-modification"?: BOOLEAN;
    /**
     * @summary &usage
     */
    readonly "&usage"?: AttributeUsage;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
