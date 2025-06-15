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
/* START_OF_SYMBOL_DEFINITION MEDICAL_RECORD_SCHEME */
/**
 * @summary MEDICAL_RECORD_SCHEME
 * @description
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
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &name
     */
    readonly '&name'?: SchemeName;
    /**
     * @summary &Organisation
     */
    readonly '&Organisation': Organisation;
    /**
     * @summary &RecordType
     */
    readonly '&RecordType': RecordType;
    /**
     * @summary &Record
     */
    readonly '&Record': Record;
}
/* END_OF_SYMBOL_DEFINITION MEDICAL_RECORD_SCHEME */

/* eslint-enable */
