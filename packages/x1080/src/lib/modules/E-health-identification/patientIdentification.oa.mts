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
import { id_patient } from '../E-health-identification/id-patient.va.mjs';
import {
    PatientIdentification,
    _decode_PatientIdentification,
    _encode_PatientIdentification,
} from '../E-health-identification/PatientIdentification.ta.mjs';
import { type IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';

/**
 * @summary patientIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * patientIdentification    IDENTIFICATION ::= {
 *   CATEGORY        id-patient
 *   IDENTIFIED WITH PatientIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<PatientIdentification>}
 * @implements {IDENTIFICATION<PatientIdentification>}
 */
export const patientIdentification: IDENTIFICATION<PatientIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_PatientIdentification,
    },
    encoderFor: {
        '&Identification': _encode_PatientIdentification,
    },
    '&category': id_patient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
