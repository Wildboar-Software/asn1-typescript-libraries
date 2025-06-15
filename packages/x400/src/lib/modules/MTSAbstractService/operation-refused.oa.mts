/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    RefusedOperation,
    _decode_RefusedOperation,
    _encode_RefusedOperation,
} from '../MTSAbstractService/RefusedOperation.ta.mjs';
import { err_operation_refused } from '../MTSAccessProtocol/err-operation-refused.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
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

/* eslint-enable */
