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
 * Confirmed M-CANCEL-GET (ROSE local:10). Argument is
 * the invoke identifier of the outstanding `m-Get`. On
 * success the performer stops linked replies and issues
 * an M-GET response with `operationCancelled`. No result
 * sequence. Requires the `cancelGet` functional unit and
 * M-GET. ITU-T Rec. X.711 (10/97)
 * [§6.4.5](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * Table 4, §8.1 h).
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
