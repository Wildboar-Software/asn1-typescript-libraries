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
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
import {
    ModifyErrorParameter,
    _decode_ModifyErrorParameter,
    _encode_ModifyErrorParameter,
} from '../MSAbstractService/ModifyErrorParameter.ta.js';
export {
    ModifyErrorParameter,
    _decode_ModifyErrorParameter,
    _encode_ModifyErrorParameter,
} from '../MSAbstractService/ModifyErrorParameter.ta.js';
import { err_modify_error } from '../MSAccessProtocol/err-modify-error.va.js';
export { err_modify_error } from '../MSAccessProtocol/err-modify-error.va.js';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.js';
export { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.js';

/* START_OF_SYMBOL_DEFINITION modify_error */
/**
 * @summary modify_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modify-error ABSTRACT-ERROR ::= {
 *   PARAMETER  ModifyErrorParameter
 *   CODE       err-modify-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<ModifyErrorParameter>}
 * @implements {ABSTRACT_ERROR<ModifyErrorParameter>}
 */
export const modify_error: ABSTRACT_ERROR<ModifyErrorParameter> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_ModifyErrorParameter,
    },
    encoderFor: {
        '&ParameterType': _encode_ModifyErrorParameter,
    },
    '&errorCode': err_modify_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION modify_error */

/* eslint-enable */
