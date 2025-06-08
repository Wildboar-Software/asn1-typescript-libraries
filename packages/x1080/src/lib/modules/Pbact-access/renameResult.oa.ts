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
    RenameResult,
    _decode_RenameResult,
    _encode_RenameResult,
} from '../Pbact-access/RenameResult.ta';
export {
    RenameResult,
    _decode_RenameResult,
    _encode_RenameResult,
} from '../Pbact-access/RenameResult.ta';
import { id_renameResult } from '../Pbact-access/id-renameResult.va';
export { id_renameResult } from '../Pbact-access/id-renameResult.va';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';
export { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca';

/* START_OF_SYMBOL_DEFINITION renameResult */
/**
 * @summary renameResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * renameResult CONTENT-TYPE ::= {
 *               RenameResult
 * IDENTIFIED BY id-renameResult }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<RenameResult>}
 * @implements {CONTENT_TYPE<RenameResult>}
 */
export const renameResult: CONTENT_TYPE<RenameResult> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_RenameResult,
    },
    encoderFor: {
        '&Type': _encode_RenameResult,
    },
    '&id': id_renameResult /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION renameResult */

/* eslint-enable */
