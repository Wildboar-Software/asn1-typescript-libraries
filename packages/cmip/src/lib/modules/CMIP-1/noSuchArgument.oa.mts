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
  NoSuchArgument,
  _decode_NoSuchArgument,
  _encode_NoSuchArgument,
} from '../CMIP-1/NoSuchArgument.ta.mjs';

/**
 * @summary noSuchArgument
 * @description
 *
 * ROSE error local:14. Parameter identifies the unknown
 * action or event argument. Used by confirmed M-ACTION
 * and M-EVENT-REPORT. ITU-T Rec. X.711 (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noSuchArgument ERROR ::= {
 *   PARAMETER  NoSuchArgument
 *   PRIORITY   {1}
 *   CODE       local:14
 * }
 * ```
 *
 * @constant
 * @type {ERROR<NoSuchArgument>}
 * @implements {ERROR<NoSuchArgument>}
 */
export const noSuchArgument: ERROR<NoSuchArgument> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_NoSuchArgument,
  },
  encoderFor: {
    '&ParameterType': _encode_NoSuchArgument,
  },
  '&errorCode': {
    local: 14,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
