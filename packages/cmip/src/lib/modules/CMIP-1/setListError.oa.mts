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
  SetListError,
  _decode_SetListError,
  _encode_SetListError,
} from '../CMIP-1/SetListError.ta.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
/* START_OF_SYMBOL_DEFINITION setListError */
/**
 * @summary setListError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * setListError ERROR ::= {
 *   PARAMETER  SetListError
 *   PRIORITY   {1}
 *   CODE       local:8
 * }
 * ```
 *
 * @constant
 * @type {ERROR<SetListError>}
 * @implements {ERROR<SetListError>}
 */
export const setListError: ERROR<SetListError> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_SetListError,
  },
  encoderFor: {
    '&ParameterType': _encode_SetListError,
  },
  '&errorCode': {
    local: 8,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION setListError */

/* eslint-enable */
