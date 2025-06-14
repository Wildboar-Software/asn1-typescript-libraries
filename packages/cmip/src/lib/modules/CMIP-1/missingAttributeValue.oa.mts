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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  AttributeId,
  _decode_AttributeId,
  _encode_AttributeId,
} from '../CMIP-1/AttributeId.ta.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
/* START_OF_SYMBOL_DEFINITION missingAttributeValue */
/**
 * @summary missingAttributeValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * missingAttributeValue ERROR ::= {
 *   PARAMETER  SET OF AttributeId
 *   PRIORITY   {1}
 *   CODE       local:18
 * }
 * ```
 *
 * @constant
 * @type {ERROR<AttributeId[]>}
 * @implements {ERROR<AttributeId[]>}
 */
export const missingAttributeValue: ERROR<AttributeId[]> = {
  class: 'ERROR',
  decoderFor: {
    '&ParameterType': $._decodeSetOf<AttributeId>(() => _decode_AttributeId),
  },
  encoderFor: {
    '&ParameterType': $._encodeSetOf<AttributeId>(
      () => _encode_AttributeId,
      $.BER
    ),
  },
  '&errorCode': {
    local: 18,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION missingAttributeValue */

/* eslint-enable */
