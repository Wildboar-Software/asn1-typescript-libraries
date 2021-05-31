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
import { SYMBOLS } from '../E-health-quantities-and-units/SYMBOLS.oca';
export { SYMBOLS } from '../E-health-quantities-and-units/SYMBOLS.oca';

// Because of a mistake in the specification.
type RELATIVE_IRI = RELATIVE_OID_IRI;

/* START_OF_SYMBOL_DEFINITION UNIT */
/**
 * @summary UNIT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UNIT ::= CLASS {
 *   &name              PrintableString,
 *   &symbols           SYMBOLS,
 *   &id                OBJECT IDENTIFIER UNIQUE,
 *   &relative-oid-iri  RELATIVE-OID-IRI,
 *   &Units1            UNIT OPTIONAL,
 *   &Units2            UNIT OPTIONAL,
 *   &multipleBaseUnit  UNIT OPTIONAL,
 *   &multipleFactor    REAL
 *                            (WITH COMPONENTS {
 *                               ...,
 *                               mantissa  (1),
 *                               base      (10)
 *                             }) OPTIONAL
 * }
 * WITH SYNTAX {
 *   &name
 *   USING SYMBOLS &symbols
 *   IDENTIFIED BY &id
 *   AND &relative-oid-iri
 *   [DERIVED BY
 *    [PRODUCT OF &Units1]
 *    [DIVIDED BY &Units2]]
 *   [MULTIPLE OF &multipleBaseUnit
 *    WITH FACTOR &multipleFactor]
 * }
 * ```
 *
 * @interface
 */
export interface UNIT {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'UNIT';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof UNIT]: $.ASN1Decoder<UNIT[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof UNIT]: $.ASN1Encoder<UNIT[_K]>;
        }
    >;
    /**
     * @summary &name
     */
    readonly '&name'?: PrintableString;
    /**
     * @summary &symbols
     */
    readonly '&symbols'?: SYMBOLS;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &relative-oid-iri
     */
    readonly '&relative-oid-iri'?: RELATIVE_IRI;
    /**
     * @summary &Units1
     */
    readonly '&Units1'?: UNIT[];
    /**
     * @summary &Units2
     */
    readonly '&Units2'?: UNIT[];
    /**
     * @summary &multipleBaseUnit
     */
    readonly '&multipleBaseUnit'?: UNIT;
    /**
     * @summary &multipleFactor
     */
    readonly '&multipleFactor'?: REAL;
}
/* END_OF_SYMBOL_DEFINITION UNIT */

/* eslint-enable */
