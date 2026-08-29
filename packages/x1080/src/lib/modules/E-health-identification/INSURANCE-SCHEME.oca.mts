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
 * @summary INSURANCE_SCHEME
 * @description
 *
 * Medical-insurance scheme: unique `&id`, optional `&name`,
 * `&Company` (issuer: name, HQ, company number, contact),
 * `&InsuranceType` relative to that company, and `&Certification`
 * (reference number + person issued to; signed by the company,
 * contains a PKC). Scheme establishment is out of scope. ITU-T
 * X.1080.1 (05/2018) §8.11.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * INSURANCE-SCHEME ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &name         SchemeName OPTIONAL,
 *   &Company,
 *   &InsuranceType,
 *   &Certification }
 * WITH SYNTAX {
 *   SCHEME [NAME &name] IDENTIFIED BY &id FOR &Company
 *   USING &InsuranceType CERTIFIED WITH &Certification }
 * ```
 *
 * @interface
 */
export interface INSURANCE_SCHEME<
    Company = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    InsuranceType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Certification = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'INSURANCE-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof INSURANCE_SCHEME<
                Company,
                InsuranceType,
                Certification
            >]: $.ASN1Decoder<
                INSURANCE_SCHEME<Company, InsuranceType, Certification>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof INSURANCE_SCHEME<
                Company,
                InsuranceType,
                Certification
            >]: $.ASN1Encoder<
                INSURANCE_SCHEME<Company, InsuranceType, Certification>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of the insurance identification scheme.
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
     * @summary &Company
     * @description
     *
     * Company that issued the medical insurance. Typically name, HQ
     * location, company number, and contact details.
     */
    readonly '&Company': Company;
    /**
     * @summary &InsuranceType
     * @description
     *
     * Type of medical insurance relative to that company.
     */
    readonly '&InsuranceType': InsuranceType;
    /**
     * @summary &Certification
     * @description
     *
     * Reference number of the insurance plus identification of the
     * person it was issued to. Signed by the company, so this type
     * contains a public-key certificate.
     */
    readonly '&Certification': Certification;
}

/* eslint-enable */
