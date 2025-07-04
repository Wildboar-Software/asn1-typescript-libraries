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
  type OPERATION,
  _decode_Priority,
  _encode_Priority,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose';
import {
  ActionArgument,
  _decode_ActionArgument,
  _encode_ActionArgument,
} from '../CMIP-1/ActionArgument.ta.mjs';

/**
 * @summary m_Action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-Action OPERATION ::= {
 *   ARGUMENT         ActionArgument
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             local:6
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<ActionArgument>}
 * @implements {OPERATION<ActionArgument>}
 */
export const m_Action: OPERATION<ActionArgument> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_ActionArgument,
    '&ResultType': undefined,
  },
  encoderFor: {
    '&ArgumentType': _encode_ActionArgument,
    '&ResultType': undefined,
  },
  '&returnResult': false /* OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 6,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
