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
 * @summary MEDICAL_STAFF_SCHEME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MEDICAL-STAFF-SCHEME ::= CLASS {
 *   &id              OBJECT IDENTIFIER UNIQUE,
 *   &name            SchemeName OPTIONAL,
 *   &Identification,
 *   &Qualifications,
 *   &Observer }
 * WITH SYNTAX {
 *   SCHEME [NAME &name] IDENTIFIED BY &id USING &Identification
 *   WITH &Qualifications AND &Observer }
 * ```
 *
 * @interface
 */
export interface MEDICAL_STAFF_SCHEME<
    Identification = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Qualifications = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Observer = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'MEDICAL-STAFF-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MEDICAL_STAFF_SCHEME<
                Identification,
                Qualifications,
                Observer
            >]: $.ASN1Decoder<
                MEDICAL_STAFF_SCHEME<
                    Identification,
                    Qualifications,
                    Observer
                >[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MEDICAL_STAFF_SCHEME<
                Identification,
                Qualifications,
                Observer
            >]: $.ASN1Encoder<
                MEDICAL_STAFF_SCHEME<
                    Identification,
                    Qualifications,
                    Observer
                >[_K]
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
     * @summary &Identification
     */
    readonly '&Identification': Identification;
    /**
     * @summary &Qualifications
     */
    readonly '&Qualifications': Qualifications;
    /**
     * @summary &Observer
     */
    readonly '&Observer': Observer;
}

/* eslint-enable */
