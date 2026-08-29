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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { type SYMBOLS } from '../E-health-quantities-and-units/SYMBOLS.oca.mjs';
// Because of a mistake in the specification.
type RELATIVE_IRI = RELATIVE_OID_IRI;


/**
 * @summary UNIT
 * @description
 *
 * Named unit with symbols, unique id and IRI. Optional product
 * (`&Units1`) / quotient (`&Units2`) of units, and optional SI-style
 * multiple of a base unit (`mantissa` 1, `base` 10). 2011 module;
 * semantics from X.1082 (SI / ISQ). ITU-T X.1080.1 (05/2018).
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
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
     * @description
     *
     * Name of the unit.
     */
    readonly '&name'?: PrintableString;
    /**
     * @summary &symbols
     * @description
     *
     * Letter symbol(s) for the unit.
     */
    readonly '&symbols'?: SYMBOLS;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of this unit (typically under `id-units`).
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &relative-oid-iri
     * @description
     *
     * Relative OID-IRI for this unit.
     */
    readonly '&relative-oid-iri'?: RELATIVE_IRI;
    /**
     * @summary &Units1
     * @description
     *
     * Optional product-of-units factor (`DERIVED BY PRODUCT OF`).
     */
    readonly '&Units1'?: UNIT[];
    /**
     * @summary &Units2
     * @description
     *
     * Optional quotient-of-units factor (`DERIVED BY … DIVIDED BY`).
     */
    readonly '&Units2'?: UNIT[];
    /**
     * @summary &multipleBaseUnit
     * @description
     *
     * Optional SI-style base unit of which this is a multiple.
     */
    readonly '&multipleBaseUnit'?: UNIT;
    /**
     * @summary &multipleFactor
     * @description
     *
     * Optional multiple factor: REAL constrained to mantissa 1 and
     * base 10 (powers of ten).
     */
    readonly '&multipleFactor'?: REAL;
}

/* eslint-enable */
