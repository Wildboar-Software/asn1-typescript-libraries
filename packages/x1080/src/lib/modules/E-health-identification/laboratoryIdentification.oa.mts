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
import { id_lab } from '../E-health-identification/id-lab.va.mjs';
import {
    LaboratoryIdentification,
    _decode_LaboratoryIdentification,
    _encode_LaboratoryIdentification,
} from '../E-health-identification/LaboratoryIdentification.ta.mjs';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION laboratoryIdentification */
/**
 * @summary laboratoryIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * laboratoryIdentification IDENTIFICATION ::= {
 *   CATEGORY        id-lab
 *   IDENTIFIED WITH LaboratoryIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<LaboratoryIdentification>}
 * @implements {IDENTIFICATION<LaboratoryIdentification>}
 */
export const laboratoryIdentification: IDENTIFICATION<LaboratoryIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_LaboratoryIdentification,
    },
    encoderFor: {
        '&Identification': _encode_LaboratoryIdentification,
    },
    '&category': id_lab /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION laboratoryIdentification */

/* eslint-enable */
