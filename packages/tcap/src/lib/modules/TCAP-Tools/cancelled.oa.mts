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

/**
 * @summary cancelled
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancelled ERROR ::= {}
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const cancelled: ERROR = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': undefined,
  },
  encoderFor: {
    '&ParameterType': undefined,
  },
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
