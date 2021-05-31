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
import {
    StringAttributes,
    StringAttributes_italic /* IMPORTED_LONG_NAMED_BIT */,
    italic /* IMPORTED_SHORT_NAMED_BIT */,
    StringAttributes_betweenParenthesis /* IMPORTED_LONG_NAMED_BIT */,
    betweenParenthesis /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_StringAttributes,
    _encode_StringAttributes,
} from '../E-health-quantities-and-units/StringAttributes.ta';
export {
    StringAttributes,
    StringAttributes_italic /* IMPORTED_LONG_NAMED_BIT */,
    italic /* IMPORTED_SHORT_NAMED_BIT */,
    StringAttributes_betweenParenthesis /* IMPORTED_LONG_NAMED_BIT */,
    betweenParenthesis /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_StringAttributes,
    _encode_StringAttributes,
} from '../E-health-quantities-and-units/StringAttributes.ta';

// Because of a mistake in the specification.
type RELATIVE_IRI = RELATIVE_OID_IRI;

/* START_OF_SYMBOL_DEFINITION SYMBOLS */
/**
 * @summary SYMBOLS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SYMBOLS ::= CLASS {
 *   &String            UniversalString,
 *   &attributes        StringAttributes OPTIONAL,
 *   &id                OBJECT IDENTIFIER UNIQUE,
 *   &relative-oid-iri  RELATIVE-OID-IRI
 * }
 * WITH SYNTAX {
 *   &String
 *   [WITH ATTRIBUTES &attributes]
 *   IDENTIFIED BY &id
 *   AND &relative-oid-iri
 * }
 * ```
 *
 * @interface
 */
export interface SYMBOLS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'SYMBOLS';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SYMBOLS]: $.ASN1Decoder<SYMBOLS[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SYMBOLS]: $.ASN1Encoder<SYMBOLS[_K]>;
        }
    >;
    /**
     * @summary &String
     */
    readonly '&String'?: UniversalString;
    /**
     * @summary &attributes
     */
    readonly '&attributes'?: StringAttributes;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &relative-oid-iri
     */
    readonly '&relative-oid-iri'?: RELATIVE_IRI;
}
/* END_OF_SYMBOL_DEFINITION SYMBOLS */

/* eslint-enable */
