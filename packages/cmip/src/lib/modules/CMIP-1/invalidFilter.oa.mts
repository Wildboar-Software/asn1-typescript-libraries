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
} from 'asn1-ts';
import {
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  CMISFilter,
  _decode_CMISFilter,
  _encode_CMISFilter,
} from '../CMIP-1/CMISFilter.ta.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';

/**
 * @summary invalidFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * invalidFilter ERROR ::= {
 *   PARAMETER  CMISFilter
 *   PRIORITY   {1}
 *   CODE       local:4
 * }
 * ```
 *
 * @constant
 * @type {ERROR<CMISFilter>}
 * @implements {ERROR<CMISFilter>}
 */
export const invalidFilter: ERROR<CMISFilter> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_CMISFilter,
  },
  encoderFor: {
    '&ParameterType': _encode_CMISFilter,
  },
  '&errorCode': {
    local: 4,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
