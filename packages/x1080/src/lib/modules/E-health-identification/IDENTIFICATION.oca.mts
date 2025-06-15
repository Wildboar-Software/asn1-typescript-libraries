/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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


/**
 * @summary IDENTIFICATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDENTIFICATION ::= CLASS {
 *   &category       OBJECT IDENTIFIER UNIQUE,
 *   &Identification }
 * WITH SYNTAX {
 *   CATEGORY        &category
 *   IDENTIFIED WITH &Identification }
 * ```
 *
 * @interface
 */
export interface IDENTIFICATION<
    Identification = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'IDENTIFICATION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof IDENTIFICATION<Identification>]: $.ASN1Decoder<
                IDENTIFICATION<Identification>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof IDENTIFICATION<Identification>]: $.ASN1Encoder<
                IDENTIFICATION<Identification>[_K]
            >;
        }
    >;
    /**
     * @summary &category
     */
    readonly '&category'?: OBJECT_IDENTIFIER;
    /**
     * @summary &Identification
     */
    readonly '&Identification': Identification;
}

/* eslint-enable */
