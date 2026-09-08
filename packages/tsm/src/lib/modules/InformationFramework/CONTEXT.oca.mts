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



/**
 * @summary CONTEXT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CONTEXT ::= CLASS {
 *   &Type,
 *   &defaultValue   &Type OPTIONAL,
 *   &Assertion      OPTIONAL,
 *   &absentMatch    BOOLEAN DEFAULT TRUE,
 *   &id             OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   WITH SYNTAX     &Type
 *   [DEFAULT-VALUE  &defaultValue]
 *   [ASSERTED AS    &Assertion]
 *   [ABSENT-MATCH   &absentMatch]
 *   ID              &id }
 * ```
 * 
 * @interface
 */
export
interface CONTEXT<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Assertion = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CONTEXT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof CONTEXT<Type,Assertion>]: $.ASN1Decoder<CONTEXT<Type,Assertion>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof CONTEXT<Type,Assertion>]: $.ASN1Encoder<CONTEXT<Type,Assertion>[_K]>;
    }>;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &defaultValue
     */
    readonly "&defaultValue"?: CONTEXT["&Type"];
    /**
     * @summary &Assertion
     */
    readonly "&Assertion": Assertion;
    /**
     * @summary &absentMatch
     */
    readonly "&absentMatch"?: BOOLEAN;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
