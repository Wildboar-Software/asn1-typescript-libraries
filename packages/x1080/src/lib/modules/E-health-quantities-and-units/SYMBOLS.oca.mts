/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    StringAttributes,
    _decode_StringAttributes,
    _encode_StringAttributes,
} from '../E-health-quantities-and-units/StringAttributes.ta.mjs';
// Because of a mistake in the specification.
type RELATIVE_IRI = RELATIVE_OID_IRI;


/**
 * @summary SYMBOLS
 * @description
 *
 * Letter symbol as `UniversalString`, optional display attributes
 * (italic, between parenthesis), unique id and relative-OID-IRI.
 * 2011 module. Distinct from X.1082 Amd.1 Human_Physiology/Symbols
 * arcs. ITU-T X.1080.1 (05/2018).
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
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
     * @description
     *
     * The symbol characters.
     */
    readonly '&String'?: UniversalString;
    /**
     * @summary &attributes
     * @description
     *
     * Optional italic / between-parenthesis rendering bits.
     */
    readonly '&attributes'?: StringAttributes;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of this symbol (typically under TMM `id-symbols`).
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &relative-oid-iri
     * @description
     *
     * Relative OID-IRI for this symbol.
     */
    readonly '&relative-oid-iri'?: RELATIVE_IRI;
}

/* eslint-enable */
