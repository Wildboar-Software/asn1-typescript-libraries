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
  InvokeIDType,
  _decode_InvokeIDType,
  _encode_InvokeIDType,
} from '../CMIP-1/InvokeIDType.ta.mjs';

/**
 * @summary noSuchInvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noSuchInvokeId ERROR ::= {
 *   PARAMETER  InvokeIDType
 *   PRIORITY   {1}
 *   CODE       local:22
 * }
 * ```
 *
 * @constant
 * @type {ERROR<InvokeIDType>}
 * @implements {ERROR<InvokeIDType>}
 */
export const noSuchInvokeId: ERROR<InvokeIDType> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_InvokeIDType,
  },
  encoderFor: {
    '&ParameterType': _encode_InvokeIDType,
  },
  '&errorCode': {
    local: 22,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
