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
import { Scope, _decode_Scope, _encode_Scope } from '../CMIP-1/Scope.ta.mjs';

/**
 * @summary invalidScope
 * @description
 *
 * ROSE error local:16. Parameter is the rejected
 * `Scope`. Used by confirmed M-GET, M-SET, M-ACTION,
 * and M-DELETE. ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalidScope ERROR ::= {PARAMETER  Scope
 *                         PRIORITY   {1}
 *                         CODE       local:16
 * }
 * ```
 *
 * @constant
 * @type {ERROR<Scope>}
 * @implements {ERROR<Scope>}
 */
export const invalidScope: ERROR<Scope> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_Scope,
  },
  encoderFor: {
    '&ParameterType': _encode_Scope,
  },
  '&errorCode': {
    local: 16,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
