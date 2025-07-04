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
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose';
import type { ERROR } from '@wildboar/rose';
import {
  InvalidArgumentValue,
  _decode_InvalidArgumentValue,
  _encode_InvalidArgumentValue,
} from '../CMIP-1/InvalidArgumentValue.ta.mjs';

/**
 * @summary invalidArgumentValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalidArgumentValue ERROR ::= {
 *   PARAMETER  InvalidArgumentValue
 *   PRIORITY   {1}
 *   CODE       local:15
 * }
 * ```
 *
 * @constant
 * @type {ERROR<InvalidArgumentValue>}
 * @implements {ERROR<InvalidArgumentValue>}
 */
export const invalidArgumentValue: ERROR<InvalidArgumentValue> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_InvalidArgumentValue,
  },
  encoderFor: {
    '&ParameterType': _encode_InvalidArgumentValue,
  },
  '&errorCode': {
    local: 15,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
