/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    PrintableString,
    UniversalString,
    RELATIVE_OID_IRI,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ENUMERATED,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { type SYMBOLS } from '../E-health-quantities-and-units/SYMBOLS.oca.mjs';
import { type UNIT } from '../E-health-quantities-and-units/UNIT.oca.mjs';
// Because of a mistake in the specification.
type RELATIVE_IRI = RELATIVE_OID_IRI;


/**
 * @summary QUANTITY
 * @description
 *
 * Named physiological quantity with optional French name, symbols,
 * units, a TMM modality OID, optional IN/OUT direction, unique id
 * and relative-OID-IRI. Used with TMM IN/OUT modalities (X.1082).
 * Quantity tables for TANGO/VIDEO/AUDIO/CHEMO/RADIO/CALOR are in
 * X.1082 clauses 6–11, not compiled here. 2011 module; 2018 Rec
 * still requires identification of quantities, units and values
 * (intro / §6). ITU-T X.1080.1 (05/2018).
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QUANTITY ::= CLASS {
 *   &name              PrintableString,
 *   &frenchName        UniversalString OPTIONAL,
 *   &symbols           SYMBOLS,
 *   &Units             UNIT,
 *   &Modalities        OBJECT IDENTIFIER,
 *   &direction         ENUMERATED {in, out} OPTIONAL,
 *   &id                OBJECT IDENTIFIER UNIQUE,
 *   &relative-oid-iri  RELATIVE-OID-IRI
 * }
 * WITH SYNTAX {
 *   &name
 *   [FRENCH &frenchName]
 *   USING SYMBOLS &symbols
 *   MEASURED IN &Units
 *   FOR MODALITIES &Modalities
 *   [DIRECTION &direction]
 *   IDENTIFIED BY &id
 *   AND &relative-oid-iri
 * }
 * ```
 *
 * @interface
 */
export interface QUANTITY {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'QUANTITY';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof QUANTITY]: $.ASN1Decoder<QUANTITY[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof QUANTITY]: $.ASN1Encoder<QUANTITY[_K]>;
        }
    >;
    /**
     * @summary &name
     * @description
     *
     * Name of the quantity (PrintableString).
     */
    readonly '&name'?: PrintableString;
    /**
     * @summary &frenchName
     * @description
     *
     * Optional French name of the quantity.
     */
    readonly '&frenchName'?: UniversalString;
    /**
     * @summary &symbols
     * @description
     *
     * Letter symbol(s) for the quantity (`SYMBOLS` object).
     */
    readonly '&symbols'?: SYMBOLS;
    /**
     * @summary &Units
     * @description
     *
     * Unit(s) in which the quantity is measured.
     */
    readonly '&Units'?: UNIT[];
    /**
     * @summary &Modalities
     * @description
     *
     * TMM modality OID (`id-tango` … `id-calor`, etc.) for which this
     * quantity applies. X.1082 intro, §3.5.
     */
    readonly '&Modalities'?: OBJECT_IDENTIFIER;
    /**
     * @summary &direction
     * @description
     *
     * Optional `in` (environment → body) or `out` (body → environment).
     * X.1082 §3.2.3–§3.2.4.
     */
    readonly '&direction'?: ENUMERATED;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of this quantity (typically under `id-quantities-*`).
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &relative-oid-iri
     * @description
     *
     * Relative OID-IRI for this quantity.
     */
    readonly '&relative-oid-iri'?: RELATIVE_IRI;
}

/* eslint-enable */
