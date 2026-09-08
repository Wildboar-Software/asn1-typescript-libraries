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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary MAPPING_BASED_MATCHING
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAPPING-BASED-MATCHING
 *   {SelectedBy, BOOLEAN:combinable, MappingResult, OBJECT IDENTIFIER:matchingRule} ::= CLASS {
 *   &selectBy             SelectedBy OPTIONAL,
 *   &ApplicableTo         ATTRIBUTE,
 *   &subtypesIncluded     BOOLEAN DEFAULT TRUE,
 *   &combinable           BOOLEAN(combinable),
 *   &mappingResults       MappingResult OPTIONAL,
 *   &userControl          BOOLEAN DEFAULT FALSE,
 *   &exclusive            BOOLEAN DEFAULT TRUE,
 *   &matching-rule        MATCHING-RULE.&id(matchingRule),
 *   &id                   OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [SELECT BY            &selectBy]
 *   APPLICABLE TO         &ApplicableTo
 *   [SUBTYPES INCLUDED    &subtypesIncluded]
 *   COMBINABLE            &combinable
 *   [MAPPING RESULTS      &mappingResults]
 *   [USER CONTROL         &userControl]
 *   [EXCLUSIVE            &exclusive]
 *   MATCHING RULE         &matching-rule
 *   ID                    &id }
 * ```
 * 
 * @interface
 */
export
interface MAPPING_BASED_MATCHING<
    SelectedBy /* OBJECT_CLASS_ASSIGNMENT_PARAMETER */,
    MappingResult /* OBJECT_CLASS_ASSIGNMENT_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "MAPPING-BASED-MATCHING";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof MAPPING_BASED_MATCHING<SelectedBy,MappingResult>]: $.ASN1Decoder<MAPPING_BASED_MATCHING<SelectedBy,MappingResult>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof MAPPING_BASED_MATCHING<SelectedBy,MappingResult>]: $.ASN1Encoder<MAPPING_BASED_MATCHING<SelectedBy,MappingResult>[_K]>;
    }>;
    /**
     * @summary &selectBy
     */
    readonly "&selectBy"?: SelectedBy;
    /**
     * @summary &ApplicableTo
     */
    readonly "&ApplicableTo"?: ATTRIBUTE[];
    /**
     * @summary &subtypesIncluded
     */
    readonly "&subtypesIncluded"?: BOOLEAN;
    /**
     * @summary &combinable
     */
    readonly "&combinable"?: BOOLEAN;
    /**
     * @summary &mappingResults
     */
    readonly "&mappingResults"?: MappingResult;
    /**
     * @summary &userControl
     */
    readonly "&userControl"?: BOOLEAN;
    /**
     * @summary &exclusive
     */
    readonly "&exclusive"?: BOOLEAN;
    /**
     * @summary &matching-rule
     */
    readonly "&matching-rule"?: OBJECT_IDENTIFIER;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
