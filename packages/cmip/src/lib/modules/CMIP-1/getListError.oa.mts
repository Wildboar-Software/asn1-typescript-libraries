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
  GetListError,
  _decode_GetListError,
  _encode_GetListError,
} from '../CMIP-1/GetListError.ta.mjs';

/**
 * @summary getListError
 * @description
 *
 * ROSE error local:7. Parameter `GetListError` reports
 * per-attribute get failures (`GetInfoStatus`). Used by
 * M-GET, including as a linked-reply alternative. ITU-T
 * Rec. X.711 (10/97)
 * [§6.4.3](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * §7.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * getListError ERROR ::= {
 *   PARAMETER  GetListError
 *   PRIORITY   {1}
 *   CODE       local:7
 * }
 * ```
 *
 * @constant
 * @type {ERROR<GetListError>}
 * @implements {ERROR<GetListError>}
 */
export const getListError: ERROR<GetListError> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_GetListError,
  },
  encoderFor: {
    '&ParameterType': _encode_GetListError,
  },
  '&errorCode': {
    local: 7,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
