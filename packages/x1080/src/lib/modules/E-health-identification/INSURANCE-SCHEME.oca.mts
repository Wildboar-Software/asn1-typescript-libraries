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
 * @summary INSURANCE_SCHEME
 * @description
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
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &name
     */
    readonly '&name'?: SchemeName;
    /**
     * @summary &Company
     */
    readonly '&Company': Company;
    /**
     * @summary &InsuranceType
     */
    readonly '&InsuranceType': InsuranceType;
    /**
     * @summary &Certification
     */
    readonly '&Certification': Certification;
}

/* eslint-enable */
