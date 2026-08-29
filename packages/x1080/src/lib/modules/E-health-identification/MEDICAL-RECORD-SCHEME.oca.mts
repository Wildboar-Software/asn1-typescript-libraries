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
 * @summary MEDICAL_RECORD_SCHEME
 * @description
 *
 * Medical-record scheme (incl. dental and DNA): unique `&id`,
 * optional `&name`, `&Organisation` (typically a government dept or
 * SDO), `&RecordType` relative to that org, and `&Record` (an
 * instance). Typically extra encryption/integrity inside the record
 * type even though ITUEHP already offers CMS. Scheme establishment
 * is out of scope. ITU-T X.1080.1 (05/2018) §8.12.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MEDICAL-RECORD-SCHEME ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &name         SchemeName OPTIONAL,
 *   &Organisation,
 *   &RecordType,
 *   &Record }
 * WITH SYNTAX {
 *   SCHEME
 *   [NAME         &name]
 *   IDENTIFIED BY &id
 *   FOR           &Organisation
 *   USING         &RecordType
 *   WITH FORMAT   &Record }
 * ```
 *
 * @interface
 */
export interface MEDICAL_RECORD_SCHEME<
    Organisation = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    RecordType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Record = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'MEDICAL-RECORD-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MEDICAL_RECORD_SCHEME<
                Organisation,
                RecordType,
                Record
            >]: $.ASN1Decoder<
                MEDICAL_RECORD_SCHEME<Organisation, RecordType, Record>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MEDICAL_RECORD_SCHEME<
                Organisation,
                RecordType,
                Record
            >]: $.ASN1Encoder<
                MEDICAL_RECORD_SCHEME<Organisation, RecordType, Record>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of the medical-format identification scheme.
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
     * @summary &Organisation
     * @description
     *
     * Organization that defined the record format. Typically a
     * government department or an international SDO.
     */
    readonly '&Organisation': Organisation;
    /**
     * @summary &RecordType
     * @description
     *
     * Type of medical record relative to the defining organization.
     */
    readonly '&RecordType': RecordType;
    /**
     * @summary &Record
     * @description
     *
     * An instance of that record type. Typically encrypted, with
     * certificates and a security block, as an extra layer beyond
     * ITUEHP CMS.
     */
    readonly '&Record': Record;
}

/* eslint-enable */
