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
} from 'asn1-ts';
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

/* eslint-enable */
