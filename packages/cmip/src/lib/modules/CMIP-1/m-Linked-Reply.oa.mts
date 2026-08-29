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
  LinkedReplyArgument,
  _decode_LinkedReplyArgument,
  _encode_LinkedReplyArgument,
} from '../CMIP-1/LinkedReplyArgument.ta.mjs';

/**
 * @summary m_Linked_Reply
 * @description
 *
 * Linked child of confirmed M-GET, M-SET, M-ACTION, and
 * M-DELETE (ROSE local:2). Each response primitive that
 * carries a `linkedId` is sent as RO-INVOKE of this
 * operation; the parent finishes with a response that has
 * no `linkedId`. ITU-T Rec. X.711 (10/97)
 * [§6.4.3](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * Table 4, §7.4.
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
