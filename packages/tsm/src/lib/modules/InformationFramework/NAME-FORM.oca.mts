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
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";


/**
 * @summary NAME_FORM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAME-FORM ::= CLASS {
 *   &namedObjectClass     OBJECT-CLASS,
 *   &MandatoryAttributes  ATTRIBUTE,
 *   &OptionalAttributes   ATTRIBUTE OPTIONAL,
 *   &ldapName             SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc             UTF8String OPTIONAL,
 *   &id                   OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   NAMES                 &namedObjectClass
 *   WITH ATTRIBUTES       &MandatoryAttributes
 *   [AND OPTIONALLY       &OptionalAttributes]
 *   [LDAP-NAME            &ldapName]
 *   [LDAP-DESC            &ldapDesc]
 *   ID                    &id }
 * ```
 * 
 * @interface
 */
export
interface NAME_FORM {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAME-FORM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof NAME_FORM]: $.ASN1Decoder<NAME_FORM[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof NAME_FORM]: $.ASN1Encoder<NAME_FORM[_K]>;
    }>;
    /**
     * @summary &namedObjectClass
     */
    readonly "&namedObjectClass"?: OBJECT_CLASS;
    /**
     * @summary &MandatoryAttributes
     */
    readonly "&MandatoryAttributes"?: ATTRIBUTE[];
    /**
     * @summary &OptionalAttributes
     */
    readonly "&OptionalAttributes"?: ATTRIBUTE[];
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
