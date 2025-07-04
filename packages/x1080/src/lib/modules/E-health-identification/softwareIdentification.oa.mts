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
import { id_med_softw } from '../E-health-identification/id-med-softw.va.mjs';
import {
    SoftwareIdentification,
    _decode_SoftwareIdentification,
    _encode_SoftwareIdentification,
} from '../E-health-identification/SoftwareIdentification.ta.mjs';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';

/**
 * @summary softwareIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * softwareIdentification    IDENTIFICATION ::= {
 *   CATEGORY        id-med-softw
 *   IDENTIFIED WITH SoftwareIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<SoftwareIdentification>}
 * @implements {IDENTIFICATION<SoftwareIdentification>}
 */
export const softwareIdentification: IDENTIFICATION<SoftwareIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_SoftwareIdentification,
    },
    encoderFor: {
        '&Identification': _encode_SoftwareIdentification,
    },
    '&category': id_med_softw /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
