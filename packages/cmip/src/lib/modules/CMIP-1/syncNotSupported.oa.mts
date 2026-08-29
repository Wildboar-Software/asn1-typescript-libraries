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
  CMISSync,
  _enum_for_CMISSync,
  _decode_CMISSync,
  _encode_CMISSync,
} from '../CMIP-1/CMISSync.ta.mjs';

/**
 * @summary syncNotSupported
 * @description
 *
 * ROSE error local:3. Parameter is the unsupported
 * `CMISSync`. Used by confirmed M-GET, M-SET, M-ACTION,
 * and M-DELETE. ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * syncNotSupported ERROR ::= {
 *   PARAMETER  CMISSync
 *   PRIORITY   {1}
 *   CODE       local:3
 * }
 * ```
 *
 * @constant
 * @type {ERROR<CMISSync>}
 * @implements {ERROR<CMISSync>}
 */
export const syncNotSupported: ERROR<CMISSync> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_CMISSync,
  },
  encoderFor: {
    '&ParameterType': _encode_CMISSync,
  },
  '&errorCode': {
    local: 3,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
