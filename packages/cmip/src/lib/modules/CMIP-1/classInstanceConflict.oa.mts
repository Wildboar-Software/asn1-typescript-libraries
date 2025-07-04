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
  BaseManagedObjectId,
  _decode_BaseManagedObjectId,
  _encode_BaseManagedObjectId,
} from '../CMIP-1/BaseManagedObjectId.ta.mjs';

/**
 * @summary classInstanceConflict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * classInstanceConflict ERROR ::= {
 *   PARAMETER  BaseManagedObjectId
 *   PRIORITY   {1}
 *   CODE       local:19
 * }
 * ```
 *
 * @constant
 * @type {ERROR<BaseManagedObjectId>}
 * @implements {ERROR<BaseManagedObjectId>}
 */
export const classInstanceConflict: ERROR<BaseManagedObjectId> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': _decode_BaseManagedObjectId,
  },
  encoderFor: {
    '&ParameterType': _encode_BaseManagedObjectId,
  },
  '&errorCode': {
    local: 19,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
