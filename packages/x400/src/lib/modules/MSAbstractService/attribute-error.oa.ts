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
    attribute_error_ParameterType,
    _decode_attribute_error_ParameterType,
    _encode_attribute_error_ParameterType,
} from '../MSAbstractService/attribute-error-ParameterType.ta.js';
export {
    attribute_error_ParameterType,
    _decode_attribute_error_ParameterType,
    _encode_attribute_error_ParameterType,
} from '../MSAbstractService/attribute-error-ParameterType.ta.js';
import { err_attribute_error } from '../MSAccessProtocol/err-attribute-error.va.js';
export { err_attribute_error } from '../MSAccessProtocol/err-attribute-error.va.js';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.js';
export { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.js';

/* START_OF_SYMBOL_DEFINITION attribute_error */
/**
 * @summary attribute_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attribute-error ABSTRACT-ERROR ::= {
 *   PARAMETER
 *     SET {problems
 *            [0]  SET SIZE (1..ub-per-entry) OF
 *                   SET {problem  [0]  AttributeProblem,
 *                        type     [1]  X413ATTRIBUTE.&id({AttributeTable}),
 *                        value
 *                          [2]  X413ATTRIBUTE.&Type({AttributeTable}{@.type})
 *                            OPTIONAL}}
 *   CODE       err-attribute-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<attribute_error_ParameterType>}
 * @implements {ABSTRACT_ERROR<attribute_error_ParameterType>}
 */
export const attribute_error: ABSTRACT_ERROR<attribute_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_attribute_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_attribute_error_ParameterType,
    },
    '&errorCode': err_attribute_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attribute_error */

/* eslint-enable */
