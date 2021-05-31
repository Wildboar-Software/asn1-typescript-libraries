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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION INTERACTIVE_MESSAGE */
/**
 * @summary INTERACTIVE_MESSAGE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * INTERACTIVE-MESSAGE ::= CLASS {
 *   &id                 INTEGER(0..MAX) UNIQUE,
 *   &direction          ENUMERATED {command, response},
 *   &Type               ,
 *   &expected-response  INTERACTIVE-MESSAGE OPTIONAL,
 *   -- only for a command
 *   &next               SEQUENCE OF INTERACTIVE-MESSAGE.&id OPTIONAL
 * }
 * WITH SYNTAX {
 *   STEP &id
 *   DIRECTION &direction
 *   USING &Type
 *   [RESPONSE &expected-response]
 *   [FOLLOWED BY &next]
 * }
 * ```
 *
 * @interface
 */
export interface INTERACTIVE_MESSAGE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'INTERACTIVE-MESSAGE';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof INTERACTIVE_MESSAGE<Type>]: $.ASN1Decoder<
                INTERACTIVE_MESSAGE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof INTERACTIVE_MESSAGE<Type>]: $.ASN1Encoder<
                INTERACTIVE_MESSAGE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: INTEGER;
    // FIXME: &direction;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
    /**
     * @summary &expected-response
     */
    readonly '&expected-response'?: INTERACTIVE_MESSAGE;
    /**
     * @summary &next
     */
    readonly '&next'?: INTEGER[];
}
/* END_OF_SYMBOL_DEFINITION INTERACTIVE_MESSAGE */

/* eslint-enable */
