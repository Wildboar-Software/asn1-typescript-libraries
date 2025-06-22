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
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  cancelFailed_ParameterType,
  _decode_cancelFailed_ParameterType,
  _encode_cancelFailed_ParameterType,
} from '../TCAP-Tools/cancelFailed-ParameterType.ta.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
/**
 * @summary cancelFailed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancelFailed ERROR ::= {
 *   PARAMETER
 *     SET {problem   [0]  CancelProblem,
 *          invokeId  [1]  present < TCInvokeIdSet}
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
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
