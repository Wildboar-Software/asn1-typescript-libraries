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
} from '../Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  cancelFailed_ParameterType,
  _decode_cancelFailed_ParameterType,
  _encode_cancelFailed_ParameterType,
} from '../Remote-Operations-Useful-Definitions/cancelFailed-ParameterType.ta.mjs';
import { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca.mjs';

/**
 * @summary cancelFailed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancelFailed ERROR ::= {
 *   PARAMETER  SET {problem    [0]  CancelProblem,
 *                   operation  [1]  InvokeId}
 *   CODE       local:-2
 * }
 * ```
 *
 * @constant
 * @type {ERROR<cancelFailed_ParameterType>}
 * @implements {ERROR<cancelFailed_ParameterType>}
 */
export const cancelFailed: ERROR<cancelFailed_ParameterType> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_cancelFailed_ParameterType,
  },
  encoderFor: {
    '&ParameterType': _encode_cancelFailed_ParameterType,
  },
  '&errorCode': {
    local: -2,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
