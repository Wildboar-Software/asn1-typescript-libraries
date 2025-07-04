/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { id_med_rec } from '../E-health-identification/id-med-rec.va.mjs';
import {
    MedicalRecordIdentification,
    _decode_MedicalRecordIdentification,
    _encode_MedicalRecordIdentification,
} from '../E-health-identification/MedicalRecordIdentification.ta.mjs';
import { type IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';

/**
 * @summary medicalRecordIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * medicalRecordIdentification IDENTIFICATION ::= {
 *   CATEGORY        id-med-rec
 *   IDENTIFIED WITH MedicalRecordIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<MedicalRecordIdentification>}
 * @implements {IDENTIFICATION<MedicalRecordIdentification>}
 */
export const medicalRecordIdentification: IDENTIFICATION<MedicalRecordIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_MedicalRecordIdentification,
    },
    encoderFor: {
        '&Identification': _encode_MedicalRecordIdentification,
    },
    '&category': id_med_rec /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
