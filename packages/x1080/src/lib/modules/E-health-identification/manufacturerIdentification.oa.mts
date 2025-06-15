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
import { id_drug_manufac } from '../E-health-identification/id-drug-manufac.va.mjs';
import {
    ManufacturerIdentification,
    _decode_ManufacturerIdentification,
    _encode_ManufacturerIdentification,
} from '../E-health-identification/ManufacturerIdentification.ta.mjs';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION manufacturerIdentification */
/**
 * @summary manufacturerIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * manufacturerIdentification IDENTIFICATION ::= {
 *   CATEGORY        id-drug-manufac
 *   IDENTIFIED WITH ManufacturerIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<ManufacturerIdentification>}
 * @implements {IDENTIFICATION<ManufacturerIdentification>}
 */
export const manufacturerIdentification: IDENTIFICATION<ManufacturerIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_ManufacturerIdentification,
    },
    encoderFor: {
        '&Identification': _encode_ManufacturerIdentification,
    },
    '&category': id_drug_manufac /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION manufacturerIdentification */

/* eslint-enable */
