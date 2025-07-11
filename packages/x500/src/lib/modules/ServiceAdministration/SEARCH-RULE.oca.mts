/* eslint-disable */
import { INTEGER, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FamilyGrouping } from "../DirectoryAbstractService/FamilyGrouping.ta.mjs";
import { FamilyReturn } from "../DirectoryAbstractService/FamilyReturn.ta.mjs";
import { AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
import { AllowedSubset } from "../ServiceAdministration/AllowedSubset.ta.mjs";
import { AttributeCombination } from "../ServiceAdministration/AttributeCombination.ta.mjs";
import { ControlOptions } from "../ServiceAdministration/ControlOptions.ta.mjs";
import { EntryLimit } from "../ServiceAdministration/EntryLimit.ta.mjs";
import { ImposedSubset } from "../ServiceAdministration/ImposedSubset.ta.mjs";
import { RelaxationPolicy } from "../ServiceAdministration/RelaxationPolicy.ta.mjs";
import { type REQUEST_ATTRIBUTE } from "../ServiceAdministration/REQUEST-ATTRIBUTE.oca.mjs";
import { type RESULT_ATTRIBUTE } from "../ServiceAdministration/RESULT-ATTRIBUTE.oca.mjs";
/**
 * @summary SEARCH_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEARCH-RULE ::= CLASS {
 *   &dmdId                 OBJECT IDENTIFIER,
 *   &serviceType           OBJECT IDENTIFIER               OPTIONAL,
 *   &userClass             INTEGER                         OPTIONAL,
 *   &InputAttributeTypes   REQUEST-ATTRIBUTE               OPTIONAL,
 *   &combination           AttributeCombination            OPTIONAL,
 *   &OutputAttributeTypes  RESULT-ATTRIBUTE                OPTIONAL,
 *   &defaultControls       ControlOptions                  OPTIONAL,
 *   &mandatoryControls     ControlOptions                  OPTIONAL,
 *   &searchRuleControls    ControlOptions                  OPTIONAL,
 *   &familyGrouping        FamilyGrouping                  OPTIONAL,
 *   &familyReturn          FamilyReturn                    OPTIONAL,
 *   &additionalControl     AttributeType                   OPTIONAL,
 *   &relaxation            RelaxationPolicy                OPTIONAL,
 *   &allowedSubset         AllowedSubset                   DEFAULT '111'B,
 *   &imposedSubset         ImposedSubset                   OPTIONAL,
 *   &entryLimit            EntryLimit                      OPTIONAL,
 *   &id                    INTEGER                         UNIQUE }
 * WITH SYNTAX {
 *   DMD ID                 &dmdId
 *   [SERVICE-TYPE          &serviceType]
 *   [USER-CLASS            &userClass]
 *   [INPUT ATTRIBUTES      &InputAttributeTypes]
 *   [COMBINATION           &combination]
 *   [OUTPUT ATTRIBUTES     &OutputAttributeTypes]
 *   [DEFAULT CONTROL       &defaultControls]
 *   [MANDATORY CONTROL     &mandatoryControls]
 *   [SEARCH-RULE CONTROL   &searchRuleControls]
 *   [FAMILY-GROUPING       &familyGrouping]
 *   [FAMILY-RETURN         &familyReturn]
 *   [ADDITIONAL CONTROL    &additionalControl]
 *   [RELAXATION            &relaxation]
 *   [ALLOWED SUBSET        &allowedSubset]
 *   [IMPOSED SUBSET        &imposedSubset]
 *   [ENTRY LIMIT           &entryLimit]
 *   ID                     &id }
 * ```
 *
 * @interface
 */
export interface SEARCH_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SEARCH-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SEARCH_RULE]: $.ASN1Decoder<SEARCH_RULE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SEARCH_RULE]: $.ASN1Encoder<SEARCH_RULE[_K]>;
        }
    >;
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
     * @summary &allowedSubset
     */
    readonly "&allowedSubset"?: AllowedSubset;
    /**
     * @summary &imposedSubset
     */
    readonly "&imposedSubset"?: ImposedSubset;
    /**
     * @summary &entryLimit
     */
    readonly "&entryLimit"?: EntryLimit;
    /**
     * @summary &id
     */
    readonly "&id"?: INTEGER;
}

/* eslint-enable */
