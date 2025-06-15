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
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import {
  _decode_Priority,
  _encode_Priority,
} from '../Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
import { cancelFailed } from '../Remote-Operations-Useful-Definitions/cancelFailed.oa.mjs';

/**
 * @summary cancel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancel OPERATION ::= {
 *   ARGUMENT    InvokeId
 *   ERRORS      {cancelFailed}
 *   IDEMPOTENT  TRUE
 *   CODE        local:-4
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<InvokeId>}
 * @implements {OPERATION<InvokeId>}
 */
export const cancel: OPERATION<InvokeId> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_InvokeId,
    '&ResultType': undefined,
  },
  encoderFor: {
    '&ArgumentType': _encode_InvokeId,
    '&ResultType': undefined,
  },
  '&Errors': [cancelFailed] /* OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: -4,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
