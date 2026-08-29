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
  NoSuchAction,
  _decode_NoSuchAction,
  _encode_NoSuchAction,
} from '../CMIP-1/NoSuchAction.ta.mjs';

/**
 * @summary noSuchAction
 * @description
 *
 * ROSE error local:9. Parameter names the class and
 * unknown action type. Used by confirmed M-ACTION.
 * ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noSuchAction ERROR ::= {
 *   PARAMETER  NoSuchAction
 *   PRIORITY   {1}
 *   CODE       local:9
 * }
 * ```
 *
 * @constant
 * @type {ERROR<NoSuchAction>}
 * @implements {ERROR<NoSuchAction>}
 */
export const noSuchAction: ERROR<NoSuchAction> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_NoSuchAction,
  },
  encoderFor: {
    '&ParameterType': _encode_NoSuchAction,
  },
  '&errorCode': {
    local: 9,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
