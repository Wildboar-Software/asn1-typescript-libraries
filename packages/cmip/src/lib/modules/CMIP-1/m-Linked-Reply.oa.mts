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
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import {
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  LinkedReplyArgument,
  _decode_LinkedReplyArgument,
  _encode_LinkedReplyArgument,
} from '../CMIP-1/LinkedReplyArgument.ta.mjs';

/**
 * @summary m_Linked_Reply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-Linked-Reply OPERATION ::= {ARGUMENT  LinkedReplyArgument
 *                               CODE      local:2
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<LinkedReplyArgument>}
 * @implements {OPERATION<LinkedReplyArgument>}
 */
export const m_Linked_Reply: OPERATION<LinkedReplyArgument> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_LinkedReplyArgument,
    '&ResultType': undefined,
  },
  encoderFor: {
    '&ArgumentType': _encode_LinkedReplyArgument,
    '&ResultType': undefined,
  },
  '&operationCode': {
    local: 2,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&returnResult': true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
