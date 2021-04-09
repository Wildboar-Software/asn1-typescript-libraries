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
  SetArgument,
  _decode_SetArgument,
  _encode_SetArgument,
} from '../CMIP-1/SetArgument.ta';
export {
  SetArgument,
  _decode_SetArgument,
  _encode_SetArgument,
} from '../CMIP-1/SetArgument.ta';
import {
  SetResult,
  _decode_SetResult,
  _encode_SetResult,
} from '../CMIP-1/SetResult.ta';
export {
  SetResult,
  _decode_SetResult,
  _encode_SetResult,
} from '../CMIP-1/SetResult.ta';
import { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa';
export { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa';
import { complexityLimitation } from '../CMIP-1/complexityLimitation.oa';
export { complexityLimitation } from '../CMIP-1/complexityLimitation.oa';
import { invalidFilter } from '../CMIP-1/invalidFilter.oa';
export { invalidFilter } from '../CMIP-1/invalidFilter.oa';
import { invalidScope } from '../CMIP-1/invalidScope.oa';
export { invalidScope } from '../CMIP-1/invalidScope.oa';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa';
export { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa';
export { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa';
import { processingFailure } from '../CMIP-1/processingFailure.oa';
export { processingFailure } from '../CMIP-1/processingFailure.oa';
import { setListError } from '../CMIP-1/setListError.oa';
export { setListError } from '../CMIP-1/setListError.oa';
import { syncNotSupported } from '../CMIP-1/syncNotSupported.oa';
export { syncNotSupported } from '../CMIP-1/syncNotSupported.oa';
import { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa';
export { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa';

/* START_OF_SYMBOL_DEFINITION m_Set_Confirmed */
/**
 * @summary m_Set_Confirmed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-Set-Confirmed OPERATION ::= {
 *   ARGUMENT  SetArgument
 *   RESULT    SetResult
 *   OPTIONAL  TRUE -- this result is conditional;
 *   -- for conditions see 8.3.2.2.9 of ITU-T Rec. X.710
 *   ERRORS
 *     {accessDenied | classInstanceConflict | complexityLimitation |
 *       invalidFilter | invalidScope | noSuchObjectClass | noSuchObjectInstance |
 *       processingFailure | setListError | syncNotSupported}
 *   LINKED    {m-Linked-Reply}
 *   CODE      local:5
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<SetArgument, SetResult>}
 * @implements {OPERATION<SetArgument, SetResult>}
 */
export const m_Set_Confirmed: OPERATION<SetArgument, SetResult> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_SetArgument,
    '&ResultType': _decode_SetResult,
  },
  encoderFor: {
    '&ArgumentType': _encode_SetArgument,
    '&ResultType': _encode_SetResult,
  },
  '&resultTypeOptional': false /* OBJECT_FIELD_SETTING */,
  '&Errors': [
    accessDenied,
    classInstanceConflict,
    complexityLimitation,
    invalidFilter,
    invalidScope,
    noSuchObjectClass,
    noSuchObjectInstance,
    processingFailure,
    setListError,
    syncNotSupported,
  ] /* OBJECT_FIELD_SETTING */,
  '&Linked': [m_Linked_Reply] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 5,
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
/* END_OF_SYMBOL_DEFINITION m_Set_Confirmed */

/* eslint-enable */
