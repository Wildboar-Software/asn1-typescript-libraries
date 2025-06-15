/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    REAL,
    PrintableString,
    RELATIVE_OID_IRI,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { SYMBOLS } from '../E-health-quantities-and-units/SYMBOLS.oca.mjs';
// Because of a mistake in the specification.
type RELATIVE_IRI = RELATIVE_OID_IRI;


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

/* eslint-enable */
