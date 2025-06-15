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
} from 'asn1-ts';
import { id_pharm_staff } from '../E-health-identification/id-pharm-staff.va.mjs';
import {
    PharmaceuticalStaffIdentification,
    _decode_PharmaceuticalStaffIdentification,
    _encode_PharmaceuticalStaffIdentification,
} from '../E-health-identification/PharmaceuticalStaffIdentification.ta.mjs';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';

/**
 * @summary pharmaceuticalStaffIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pharmaceuticalStaffIdentification IDENTIFICATION ::= {
 *   CATEGORY        id-pharm-staff
 *   IDENTIFIED WITH PharmaceuticalStaffIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<PharmaceuticalStaffIdentification>}
 * @implements {IDENTIFICATION<PharmaceuticalStaffIdentification>}
 */
export const pharmaceuticalStaffIdentification: IDENTIFICATION<PharmaceuticalStaffIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_PharmaceuticalStaffIdentification,
    },
    encoderFor: {
        '&Identification': _encode_PharmaceuticalStaffIdentification,
    },
    '&category': id_pharm_staff /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
