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



/* START_OF_SYMBOL_DEFINITION OTHER_REVOCATION_VAL */
/**
 * @summary OTHER_REVOCATION_VAL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OTHER-REVOCATION-VAL ::= CLASS {
 *     &Type,
 *     &id OBJECT IDENTIFIER UNIQUE
 * } WITH SYNTAX {
 *     WITH SYNTAX &Type
 *     ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface OTHER_REVOCATION_VAL<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OTHER-REVOCATION-VAL";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof OTHER_REVOCATION_VAL<Type>]: $.ASN1Decoder<OTHER_REVOCATION_VAL<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof OTHER_REVOCATION_VAL<Type>]: $.ASN1Encoder<OTHER_REVOCATION_VAL<Type>[_K]>;
    }>;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};
/* END_OF_SYMBOL_DEFINITION OTHER_REVOCATION_VAL */

/* eslint-enable */
