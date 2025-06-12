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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AddResult,
    _decode_AddResult,
    _encode_AddResult,
} from '../Pbact-access/AddResult.ta.mjs';
export {
    AddResult,
    _decode_AddResult,
    _encode_AddResult,
} from '../Pbact-access/AddResult.ta.mjs';
import { id_addResult } from '../Pbact-access/id-addResult.va.mjs';
export { id_addResult } from '../Pbact-access/id-addResult.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/* START_OF_SYMBOL_DEFINITION addResult */
/**
 * @summary addResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addResult CONTENT-TYPE ::= {
 *               AddResult
 * IDENTIFIED BY id-addResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AddResult>}
 * @implements {CONTENT_TYPE<AddResult>}
 */
export const addResult: CONTENT_TYPE<AddResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_AddResult,
    },
    encoderFor: {
        '&Type': _encode_AddResult,
    },
    '&id': id_addResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION addResult */

/* eslint-enable */
