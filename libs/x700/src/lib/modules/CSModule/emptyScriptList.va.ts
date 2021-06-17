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
    AvailableScriptList,
    _decode_AvailableScriptList,
    _encode_AvailableScriptList,
} from '../CSModule/AvailableScriptList.ta';
export {
    AvailableScriptList,
    _decode_AvailableScriptList,
    _encode_AvailableScriptList,
} from '../CSModule/AvailableScriptList.ta';
import {
    ScriptList,
    _decode_ScriptList,
    _encode_ScriptList,
} from '../CSModule/ScriptList.ta';
export {
    ScriptList,
    _decode_ScriptList,
    _encode_ScriptList,
} from '../CSModule/ScriptList.ta';

/* START_OF_SYMBOL_DEFINITION emptyScriptList */
/**
 * @summary emptyScriptList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * emptyScriptList AvailableScriptList ::= {}
 * ```
 *
 * @constant
 */
export const emptyScriptList: AvailableScriptList = [];
/* END_OF_SYMBOL_DEFINITION emptyScriptList */

/* eslint-enable */
