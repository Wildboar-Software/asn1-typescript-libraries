/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { REQUEST_ATTRIBUTE } from "../InformationFramework/REQUEST-ATTRIBUTE.oca.mjs";
// export { REQUEST_ATTRIBUTE } from "../InformationFramework/REQUEST-ATTRIBUTE.oca.mjs";
import { AttributeCombination } from "../InformationFramework/AttributeCombination.ta.mjs";
// export { AttributeCombination, _decode_AttributeCombination, _encode_AttributeCombination } from "../InformationFramework/AttributeCombination.ta.mjs";
import { RESULT_ATTRIBUTE } from "../InformationFramework/RESULT-ATTRIBUTE.oca.mjs";
// export { RESULT_ATTRIBUTE } from "../InformationFramework/RESULT-ATTRIBUTE.oca.mjs";
import { ControlOptions } from "../InformationFramework/ControlOptions.ta.mjs";
// export { ControlOptions, _decode_ControlOptions, _encode_ControlOptions } from "../InformationFramework/ControlOptions.ta.mjs";
import { FamilyGrouping } from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";
// export { FamilyGrouping, _enum_for_FamilyGrouping, FamilyGrouping_entryOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, entryOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_compoundEntry /* IMPORTED_LONG_ENUMERATION_ITEM */, compoundEntry /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_strands /* IMPORTED_LONG_ENUMERATION_ITEM */, strands /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyGrouping_multiStrand /* IMPORTED_LONG_ENUMERATION_ITEM */, multiStrand /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FamilyGrouping, _encode_FamilyGrouping } from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";
import { FamilyReturn } from "../DirectoryAbstractService/FamilyReturn.ta.mjs";
// export { FamilyReturn, _decode_FamilyReturn, _encode_FamilyReturn } from "../DirectoryAbstractService/FamilyReturn.ta.mjs";
import { AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { RelaxationPolicy } from "../InformationFramework/RelaxationPolicy.ta.mjs";
// export { RelaxationPolicy, _decode_RelaxationPolicy, _encode_RelaxationPolicy } from "../InformationFramework/RelaxationPolicy.ta.mjs";
import { EntryLimit } from "../InformationFramework/EntryLimit.ta.mjs";
// export { EntryLimit, _decode_EntryLimit, _encode_EntryLimit } from "../InformationFramework/EntryLimit.ta.mjs";
import { AllowedSubset } from "../InformationFramework/AllowedSubset.ta.mjs";
// export { AllowedSubset, AllowedSubset_baseObject /* IMPORTED_LONG_NAMED_BIT */, AllowedSubset_oneLevel /* IMPORTED_LONG_NAMED_BIT */, AllowedSubset_wholeSubtree /* IMPORTED_LONG_NAMED_BIT */, _decode_AllowedSubset, _encode_AllowedSubset } from "../InformationFramework/AllowedSubset.ta.mjs";
import { ImposedSubset } from "../InformationFramework/ImposedSubset.ta.mjs";
// export { ImposedSubset, _enum_for_ImposedSubset, ImposedSubset_baseObject /* IMPORTED_LONG_ENUMERATION_ITEM */, ImposedSubset_oneLevel /* IMPORTED_LONG_ENUMERATION_ITEM */, ImposedSubset_wholeSubtree /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ImposedSubset, _encode_ImposedSubset } from "../InformationFramework/ImposedSubset.ta.mjs";


/**
 * @summary SEARCH_RULE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SEARCH-RULE ::= CLASS {
 *   &dmdId                 OBJECT IDENTIFIER,
 *   &serviceType           OBJECT IDENTIFIER OPTIONAL,
 *   &userClass             INTEGER OPTIONAL,
 *   &InputAttributeTypes   REQUEST-ATTRIBUTE OPTIONAL,
 *   &combination           AttributeCombination OPTIONAL,
 *   &OutputAttributeTypes  RESULT-ATTRIBUTE OPTIONAL,
 *   &defaultControls       ControlOptions OPTIONAL,
 *   &mandatoryControls     ControlOptions OPTIONAL,
 *   &searchRuleControls    ControlOptions OPTIONAL,
 *   &familyGrouping        FamilyGrouping OPTIONAL,
 *   &familyReturn          FamilyReturn OPTIONAL,
 *   &additionalControl     AttributeType OPTIONAL,
 *   &relaxation            RelaxationPolicy OPTIONAL,
 *   &entryLimit            EntryLimit OPTIONAL,
 *   &allowedSubset         AllowedSubset DEFAULT '111'B,
 *   &imposedSubset         ImposedSubset OPTIONAL,
 *   &id                    INTEGER UNIQUE
 * }
 * WITH SYNTAX {
 *   DMD ID &dmdId
 *   [SERVICE-TYPE &serviceType]
 *   [USER-CLASS &userClass]
 *   [INPUT ATTRIBUTES &InputAttributeTypes]
 *   [COMBINATION &combination]
 *   [OUTPUT ATTRIBUTES &OutputAttributeTypes]
 *   [DEFAULT CONTROL &defaultControls]
 *   [MANDATORY CONTROL &mandatoryControls]
 *   [SEARCH-RULE CONTROL &searchRuleControls]
 *   [FAMILY-GROUPING &familyGrouping]
 *   [FAMILY-RETURN &familyReturn]
 *   [ADDITIONAL CONTROL &additionalControl]
 *   [RELAXATION &relaxation]
 *   [ALLOWED SUBSET &allowedSubset]
 *   [IMPOSED SUBSET &imposedSubset]
 *   [ENTRY LIMIT &entryLimit]
 *   ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface SEARCH_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SEARCH-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SEARCH_RULE]: $.ASN1Decoder<SEARCH_RULE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SEARCH_RULE]: $.ASN1Encoder<SEARCH_RULE[_K]>;
    }>;
    /**
     * @summary &dmdId
     */
    readonly "&dmdId"?: OBJECT_IDENTIFIER;
    /**
     * @summary &serviceType
     */
    readonly "&serviceType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &userClass
     */
    readonly "&userClass"?: INTEGER;
    /**
     * @summary &InputAttributeTypes
     */
    readonly "&InputAttributeTypes"?: REQUEST_ATTRIBUTE[];
    /**
     * @summary &combination
     */
    readonly "&combination"?: AttributeCombination;
    /**
     * @summary &OutputAttributeTypes
     */
    readonly "&OutputAttributeTypes"?: RESULT_ATTRIBUTE[];
    /**
     * @summary &defaultControls
     */
    readonly "&defaultControls"?: ControlOptions;
    /**
     * @summary &mandatoryControls
     */
    readonly "&mandatoryControls"?: ControlOptions;
    /**
     * @summary &searchRuleControls
     */
    readonly "&searchRuleControls"?: ControlOptions;
    /**
     * @summary &familyGrouping
     */
    readonly "&familyGrouping"?: FamilyGrouping;
    /**
     * @summary &familyReturn
     */
    readonly "&familyReturn"?: FamilyReturn;
    /**
     * @summary &additionalControl
     */
    readonly "&additionalControl"?: AttributeType;
    /**
     * @summary &relaxation
     */
    readonly "&relaxation"?: RelaxationPolicy;
    /**
     * @summary &entryLimit
     */
    readonly "&entryLimit"?: EntryLimit;
    /**
     * @summary &allowedSubset
     */
    readonly "&allowedSubset"?: AllowedSubset;
    /**
     * @summary &imposedSubset
     */
    readonly "&imposedSubset"?: ImposedSubset;
    /**
     * @summary &id
     */
    readonly "&id"?: INTEGER;
};

/* eslint-enable */
