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
} from '@wildboar/asn1';
import {
  type OPERATION,
  _decode_Priority,
  _encode_Priority,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose';
import {
  InvokeIDType,
  _decode_InvokeIDType,
  _encode_InvokeIDType,
} from '../CMIP-1/InvokeIDType.ta.mjs';
import { mistypedOperation } from '../CMIP-1/mistypedOperation.oa.mjs';
import { noSuchInvokeId } from '../CMIP-1/noSuchInvokeId.oa.mjs';
import { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';

/**
 * @summary m_CancelGet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-CancelGet OPERATION ::= {
 *   ARGUMENT       InvokeIDType
 *   RETURN RESULT  TRUE
 *   ERRORS         {mistypedOperation | noSuchInvokeId | processingFailure}
 *   CODE           local:10
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<InvokeIDType>}
 * @implements {OPERATION<InvokeIDType>}
 */
export const m_CancelGet: OPERATION<InvokeIDType> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_InvokeIDType,
    '&ResultType': undefined,
  },
  encoderFor: {
    '&ArgumentType': _encode_InvokeIDType,
    '&ResultType': undefined,
  },
  '&returnResult': true /* OBJECT_FIELD_SETTING */,
  '&Errors': [
    mistypedOperation,
    noSuchInvokeId,
    processingFailure,
  ] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 10,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
