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
    dl_administrator_annotation_Type,
    _decode_dl_administrator_annotation_Type,
    _encode_dl_administrator_annotation_Type,
} from '../MHSDirectoryObjectsAndAttributes/dl-administrator-annotation-Type.ta.js';
export {
    dl_administrator_annotation_Type,
    _decode_dl_administrator_annotation_Type,
    _encode_dl_administrator_annotation_Type,
} from '../MHSDirectoryObjectsAndAttributes/dl-administrator-annotation-Type.ta.js';
import { id_con_dl_administrator_annotation } from '../MHSObjectIdentifiers/id-con-dl-administrator-annotation.va.js';
export { id_con_dl_administrator_annotation } from '../MHSObjectIdentifiers/id-con-dl-administrator-annotation.va.js';
import { CONTEXT } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTEXT.oca.js';
export { CONTEXT } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTEXT.oca.js';

/* START_OF_SYMBOL_DEFINITION dl_administrator_annotation */
/**
 * @summary dl_administrator_annotation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-administrator-annotation CONTEXT ::= {
 *   WITH SYNTAX
 *     CHOICE {bmpstring        BMPString,
 *             universalstring  UniversalString}
 *   ID           id-con-dl-administrator-annotation
 * }
 * ```
 *
 * @constant
 * @type {CONTEXT<dl_administrator_annotation_Type>}
 * @implements {CONTEXT<dl_administrator_annotation_Type>}
 */
export const dl_administrator_annotation: CONTEXT<dl_administrator_annotation_Type> = {
    class: 'CONTEXT',
    decoderFor: {
        '&Type': _decode_dl_administrator_annotation_Type,
        '&Assertion': undefined,
    },
    encoderFor: {
        '&Type': _encode_dl_administrator_annotation_Type,
        '&Assertion': undefined,
    },
    '&id': id_con_dl_administrator_annotation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&Assertion': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&absentMatch': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dl_administrator_annotation */

/* eslint-enable */
