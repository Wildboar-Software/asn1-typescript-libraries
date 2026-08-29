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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from '../E-health-identification/SchemeName.ta.mjs';

/**
 * @summary PATIENT_SCHEME
 * @description
 *
 * Patient identification scheme: unique `&id`, optional `&name`, and
 * `&Identification` type (typically unique number + name). Scheme
 * establishment is out of scope of X.1080.1. ITU-T X.1080.1 (05/2018)
 * §8.3.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PATIENT-SCHEME ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &name         SchemeName OPTIONAL,
 *   &Identification }
 * WITH SYNTAX {
 *   SCHEME [NAME &name] IDENTIFIED BY &id USING &Identification }
 * ```
 *
 * @interface
 */
export interface PATIENT_SCHEME<
    Identification = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'PATIENT-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof PATIENT_SCHEME<Identification>]: $.ASN1Decoder<
                PATIENT_SCHEME<Identification>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof PATIENT_SCHEME<Identification>]: $.ASN1Encoder<
                PATIENT_SCHEME<Identification>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of the patient identification scheme.
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &name
     * @description
     *
     * Optional `SchemeName`: ISO646String (not necessarily unique) or
     * OID.
     */
    readonly '&name'?: SchemeName;
    /**
     * @summary &Identification
     * @description
     *
     * Identification of the patient within the scheme. Typically at
     * least a unique number and the patient's name. Defined when a
     * `PATIENT-SCHEME` object is established.
     */
    readonly '&Identification': Identification;
}

/* eslint-enable */
