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
} from '../Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';
import { type ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca.mjs';

/**
 * @summary refuse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * refuse ERROR ::= {CODE  local:-1
 * }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const refuse: ERROR = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': undefined,
  },
  encoderFor: {
    '&ParameterType': undefined,
  },
  '&errorCode': {
    local: -1,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
