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
 * Health-professional scheme covering medical staff (§8.4),
 * observers (§8.5), and pharmaceutical staff (§8.6). Unique `&id`,
 * optional `&name`, `&Identification`, `&Qualifications` (typically
 * signed by authorities, often with X.509 certs), and `&Observer`.
 * Scheme establishment is out of scope. ITU-T X.1080.1 (05/2018)
 * §8.4.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
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
     * @description
     *
     * Unique OID of the health-professional identification scheme.
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
     * Identification of the health professional within the scheme.
     * Typically unique number, name, and category or role.
     */
    readonly '&Identification': Identification;
    /**
     * @summary &Qualifications
     * @description
     *
     * Professional qualifications recognized in the scheme. Typically
     * qualifications issued and signed by known authorities, so the
     * type often includes X.509 public-key certificates. Definition
     * of qualifications is out of scope of X.1080.1.
     */
    readonly '&Qualifications': Qualifications;
    /**
     * @summary &Observer
     * @description
     *
     * Identification of observers in remote ITUEHP interactions.
     * Unlikely to be unique; normally role + name. X.1080.1 §8.5.
     */
    readonly '&Observer': Observer;
}

/* eslint-enable */
