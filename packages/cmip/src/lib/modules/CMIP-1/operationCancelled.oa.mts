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
 * @summary operationCancelled
 * @description
 *
 * ROSE error local:23. No parameter. After a successful
 * `m-CancelGet`, the performer issues an M-GET response
 * with this error and stops linked replies. ITU-T Rec.
 * X.711 (10/97)
 * [§6.4.5.3](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * §7.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationCancelled ERROR ::= {PRIORITY  {1}
 *                               CODE      local:23
 * }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const operationCancelled: ERROR = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': undefined,
  },
  encoderFor: {
    '&ParameterType': undefined,
  },
  '&errorCode': {
    local: 23,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
