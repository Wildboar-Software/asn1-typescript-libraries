/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { id_drug_manufac } from '../E-health-identification/id-drug-manufac.va';
export { id_drug_manufac } from '../E-health-identification/id-drug-manufac.va';
import {
    ManufacturerIdentification,
    _decode_ManufacturerIdentification,
    _encode_ManufacturerIdentification,
} from '../E-health-identification/ManufacturerIdentification.ta';
export {
    ManufacturerIdentification,
    _decode_ManufacturerIdentification,
    _encode_ManufacturerIdentification,
} from '../E-health-identification/ManufacturerIdentification.ta';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca';
export { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca';

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
