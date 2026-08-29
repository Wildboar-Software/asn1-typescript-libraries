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
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';

/**
 * @summary noSuchAttribute
 * @description
 *
 * ROSE error local:5. Parameter is the unknown
 * `AttributeId`. Used by M-CREATE. ITU-T Rec. X.711
 * (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noSuchAttribute ERROR ::= {
 *   PARAMETER  AttributeId
 *   PRIORITY   {1}
 *   CODE       local:5
 * }
 * ```
 *
 * @constant
 * @type {ERROR<AttributeId>}
 * @implements {ERROR<AttributeId>}
 */
export const noSuchAttribute: ERROR<AttributeId> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_AttributeId,
  },
  encoderFor: {
    '&ParameterType': _encode_AttributeId,
  },
  '&errorCode': {
    local: 5,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
