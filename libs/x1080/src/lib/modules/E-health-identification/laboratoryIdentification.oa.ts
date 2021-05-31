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
import { id_lab } from '../E-health-identification/id-lab.va';
export { id_lab } from '../E-health-identification/id-lab.va';
import {
    LaboratoryIdentification,
    _decode_LaboratoryIdentification,
    _encode_LaboratoryIdentification,
} from '../E-health-identification/LaboratoryIdentification.ta';
export {
    LaboratoryIdentification,
    _decode_LaboratoryIdentification,
    _encode_LaboratoryIdentification,
} from '../E-health-identification/LaboratoryIdentification.ta';
import { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca';
export { IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca';

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
