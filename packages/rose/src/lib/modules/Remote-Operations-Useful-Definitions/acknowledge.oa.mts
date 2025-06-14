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
import {
  acknowledge_ResultType,
  _enum_for_acknowledge_ResultType,
  _decode_acknowledge_ResultType,
  _encode_acknowledge_ResultType,
} from '../Remote-Operations-Useful-Definitions/acknowledge-ResultType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION acknowledge */
/**
 * @summary acknowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acknowledge OPERATION ::= {
 *   ARGUMENT    InvokeId
 *   RESULT      ENUMERATED {acknowledged(0), unknown(1), ...
 *                           }
 *   IDEMPOTENT  TRUE
 *   CODE        local:-3
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<InvokeId, acknowledge_ResultType>}
 * @implements {OPERATION<InvokeId, acknowledge_ResultType>}
 */
export const acknowledge: OPERATION<InvokeId, acknowledge_ResultType> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_InvokeId,
    '&ResultType': _decode_acknowledge_ResultType,
  },
  encoderFor: {
    '&ArgumentType': _encode_InvokeId,
    '&ResultType': _encode_acknowledge_ResultType,
  },
  '&idempotent': false /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: -3,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION acknowledge */

/* eslint-enable */
