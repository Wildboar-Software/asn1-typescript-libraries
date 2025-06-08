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
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
import {
    RefusedOperation,
    _decode_RefusedOperation,
    _encode_RefusedOperation,
} from '../MTSAbstractService/RefusedOperation.ta';
export {
    RefusedOperation,
    _decode_RefusedOperation,
    _encode_RefusedOperation,
} from '../MTSAbstractService/RefusedOperation.ta';
import { err_operation_refused } from '../MTSAccessProtocol/err-operation-refused.va';
export { err_operation_refused } from '../MTSAccessProtocol/err-operation-refused.va';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca';
export { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca';

/* START_OF_SYMBOL_DEFINITION operation_refused */
/**
 * @summary operation_refused
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operation-refused ABSTRACT-ERROR ::= {
 *   PARAMETER  RefusedOperation
 *   CODE       err-operation-refused
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<RefusedOperation>}
 * @implements {ABSTRACT_ERROR<RefusedOperation>}
 */
export const operation_refused: ABSTRACT_ERROR<RefusedOperation> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_RefusedOperation,
    },
    encoderFor: {
        '&ParameterType': _encode_RefusedOperation,
    },
    '&errorCode': err_operation_refused /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION operation_refused */

/* eslint-enable */
