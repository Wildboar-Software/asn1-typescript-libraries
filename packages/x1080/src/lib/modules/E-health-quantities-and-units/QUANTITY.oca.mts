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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import { SYMBOLS } from '../E-health-quantities-and-units/SYMBOLS.oca.mjs';
import { UNIT } from '../E-health-quantities-and-units/UNIT.oca.mjs';
// Because of a mistake in the specification.
type RELATIVE_IRI = RELATIVE_OID_IRI;


/**
 * @summary QUANTITY
 * @description
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
     */
    readonly '&name'?: PrintableString;
    /**
     * @summary &frenchName
     */
    readonly '&frenchName'?: UniversalString;
    /**
     * @summary &symbols
     */
    readonly '&symbols'?: SYMBOLS;
    /**
     * @summary &Units
     */
    readonly '&Units'?: UNIT[];
    /**
     * @summary &Modalities
     */
    readonly '&Modalities'?: OBJECT_IDENTIFIER;
    // FIXME: &direction;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &relative-oid-iri
     */
    readonly '&relative-oid-iri'?: RELATIVE_IRI;
}

/* eslint-enable */
