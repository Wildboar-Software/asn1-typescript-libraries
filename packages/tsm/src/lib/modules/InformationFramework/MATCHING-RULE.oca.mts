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
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
// export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary MATCHING_RULE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MATCHING-RULE ::= CLASS {
 *   &ParentMatchingRules    MATCHING-RULE OPTIONAL,
 *   &AssertionType          OPTIONAL,
 *   &uniqueMatchIndicator   ATTRIBUTE OPTIONAL,
 *   &ldapSyntax             SYNTAX-NAME.&id OPTIONAL,
 *   &ldapName               SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc               UTF8String OPTIONAL,
 *   &id                     OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [PARENT                 &ParentMatchingRules]
 *   [SYNTAX                 &AssertionType]
 *   [UNIQUE-MATCH-INDICATOR &uniqueMatchIndicator]
 *   [LDAP-SYNTAX            &ldapSyntax]
 *   [LDAP-NAME              &ldapName]
 *   [LDAP-DESC              &ldapDesc]
 *   ID                      &id }
 * ```
 * 
 * @interface
 */
export
interface MATCHING_RULE<
    AssertionType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "MATCHING-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof MATCHING_RULE<AssertionType>]: $.ASN1Decoder<MATCHING_RULE<AssertionType>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof MATCHING_RULE<AssertionType>]: $.ASN1Encoder<MATCHING_RULE<AssertionType>[_K]>;
    }>;
    /**
     * @summary &ParentMatchingRules
     */
    readonly "&ParentMatchingRules"?: MATCHING_RULE[];
    /**
     * @summary &AssertionType
     */
    readonly "&AssertionType": AssertionType;
    /**
     * @summary &uniqueMatchIndicator
     */
    readonly "&uniqueMatchIndicator"?: ATTRIBUTE;
    /**
     * @summary &ldapSyntax
     */
    readonly "&ldapSyntax"?: OBJECT_IDENTIFIER;
    /**
     * @summary &ldapName
     */
    readonly "&ldapName"?: UTF8String[];
    /**
     * @summary &ldapDesc
     */
    readonly "&ldapDesc"?: UTF8String;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
