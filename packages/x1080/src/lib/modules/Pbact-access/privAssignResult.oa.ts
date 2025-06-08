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
import {
    PrivAssignResult,
    _decode_PrivAssignResult,
    _encode_PrivAssignResult,
} from '../Pbact-access/PrivAssignResult.ta';
export {
    PrivAssignResult,
    _decode_PrivAssignResult,
    _encode_PrivAssignResult,
} from '../Pbact-access/PrivAssignResult.ta';
import { id_privAssignResult } from '../Pbact-access/id-privAssignResult.va';
export { id_privAssignResult } from '../Pbact-access/id-privAssignResult.va';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';

/* START_OF_SYMBOL_DEFINITION privAssignResult */
/**
 * @summary privAssignResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privAssignResult CONTENT-TYPE ::= {
 *               PrivAssignResult
 * IDENTIFIED BY id-privAssignResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<PrivAssignResult>}
 * @implements {CONTENT_TYPE<PrivAssignResult>}
 */
export const privAssignResult: CONTENT_TYPE<PrivAssignResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_PrivAssignResult,
    },
    encoderFor: {
        '&Type': _encode_PrivAssignResult,
    },
    '&id': id_privAssignResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION privAssignResult */

/* eslint-enable */
