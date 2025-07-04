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
import { id_med_insur } from '../E-health-identification/id-med-insur.va.mjs';
import {
    InsuranceIdentification,
    _decode_InsuranceIdentification,
    _encode_InsuranceIdentification,
} from '../E-health-identification/InsuranceIdentification.ta.mjs';
import { type IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';

/**
 * @summary insuranceIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * insuranceIdentification    IDENTIFICATION ::= {
 *   CATEGORY        id-med-insur
 *   IDENTIFIED WITH InsuranceIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<InsuranceIdentification>}
 * @implements {IDENTIFICATION<InsuranceIdentification>}
 */
export const insuranceIdentification: IDENTIFICATION<InsuranceIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_InsuranceIdentification,
    },
    encoderFor: {
        '&Identification': _encode_InsuranceIdentification,
    },
    '&category': id_med_insur /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
