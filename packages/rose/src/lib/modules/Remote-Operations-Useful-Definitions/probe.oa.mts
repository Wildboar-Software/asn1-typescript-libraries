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
  probe_ArgumentType,
  _decode_probe_ArgumentType,
  _encode_probe_ArgumentType,
} from '../Remote-Operations-Useful-Definitions/probe-ArgumentType.ta.mjs';
import {
  probe_ResultType,
  _enum_for_probe_ResultType,
  _decode_probe_ResultType,
  _encode_probe_ResultType,
} from '../Remote-Operations-Useful-Definitions/probe-ResultType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION probe */
/**
 * @summary probe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * probe OPERATION ::= {
 *   ARGUMENT    SEQUENCE {invokeId  [0]  InvokeId}
 *   RESULT      ENUMERATED {running(0), finished(1), unknown(2), ...
 *                           }
 *   IDEMPOTENT  TRUE
 *   CODE        local:-2
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<probe_ArgumentType, probe_ResultType>}
 * @implements {OPERATION<probe_ArgumentType, probe_ResultType>}
 */
export const probe: OPERATION<probe_ArgumentType, probe_ResultType> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_probe_ArgumentType,
    '&ResultType': _decode_probe_ResultType,
  },
  encoderFor: {
    '&ArgumentType': _encode_probe_ArgumentType,
    '&ResultType': _encode_probe_ResultType,
  },
  '&idempotent': false /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: -2,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION probe */

/* eslint-enable */
