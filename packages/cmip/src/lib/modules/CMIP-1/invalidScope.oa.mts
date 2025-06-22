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
import { Scope, _decode_Scope, _encode_Scope } from '../CMIP-1/Scope.ta.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';

/**
 * @summary invalidScope
 * @description
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
