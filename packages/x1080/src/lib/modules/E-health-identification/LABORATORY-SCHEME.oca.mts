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
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from '../E-health-identification/SchemeName.ta.mjs';

/**
 * @summary LABORATORY_SCHEME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LABORATORY-SCHEME ::= CLASS {
 *   &id        OBJECT IDENTIFIER UNIQUE,
 *   &name        SchemeName    OPTIONAL,
 *   &Qualifications }
 * WITH SYNTAX {
 *   SCHEME [NAME &name] IDENTIFIED BY &id WITH &Qualifications }
 * ```
 *
 * @interface
 */
export interface LABORATORY_SCHEME<
    Qualifications = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'LABORATORY-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof LABORATORY_SCHEME<Qualifications>]: $.ASN1Decoder<
                LABORATORY_SCHEME<Qualifications>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof LABORATORY_SCHEME<Qualifications>]: $.ASN1Encoder<
                LABORATORY_SCHEME<Qualifications>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &name
     */
    readonly '&name'?: SchemeName;
    /**
     * @summary &Qualifications
     */
    readonly '&Qualifications': Qualifications;
}

/* eslint-enable */
