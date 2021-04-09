/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca';
export { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca';
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
import {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '../Remote-Operations-Information-Objects/Priority.ta';
export {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '../Remote-Operations-Information-Objects/Priority.ta';
import {
  Code,
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta';
export {
  Code,
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta';
import {
  LinkedReplyArgument,
  _decode_LinkedReplyArgument,
  _encode_LinkedReplyArgument,
} from '../CMIP-1/LinkedReplyArgument.ta';
export {
  LinkedReplyArgument,
  _decode_LinkedReplyArgument,
  _encode_LinkedReplyArgument,
} from '../CMIP-1/LinkedReplyArgument.ta';

/* START_OF_SYMBOL_DEFINITION m_Linked_Reply */
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
  '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION m_Linked_Reply */

/* eslint-enable */
