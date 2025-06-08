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
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
import {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
export {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
import {
  Code,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
export {
  Code,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
import {
  EventReportArgument,
  _decode_EventReportArgument,
  _encode_EventReportArgument,
} from '../CMIP-1/EventReportArgument.ta';
export {
  EventReportArgument,
  _decode_EventReportArgument,
  _encode_EventReportArgument,
} from '../CMIP-1/EventReportArgument.ta';
import {
  EventReportResult,
  _decode_EventReportResult,
  _encode_EventReportResult,
} from '../CMIP-1/EventReportResult.ta';
export {
  EventReportResult,
  _decode_EventReportResult,
  _encode_EventReportResult,
} from '../CMIP-1/EventReportResult.ta';
import { noSuchEventType } from '../CMIP-1/noSuchEventType.oa';
export { noSuchEventType } from '../CMIP-1/noSuchEventType.oa';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa';
export { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa';
export { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa';
import { processingFailure } from '../CMIP-1/processingFailure.oa';
export { processingFailure } from '../CMIP-1/processingFailure.oa';
import { accessDenied } from '../CMIP-1/accessDenied.oa';
import { invalidArgumentValue } from '../CMIP-1/invalidArgumentValue.oa';
import { noSuchAction } from '../CMIP-1/noSuchAction.oa';
import { noSuchArgument } from '../CMIP-1/noSuchArgument.oa';

/* START_OF_SYMBOL_DEFINITION m_EventReport_Confirmed */
/**
 * @summary m_EventReport_Confirmed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-EventReport-Confirmed OPERATION ::= {
 *   ARGUMENT  EventReportArgument
 *   RESULT    EventReportResult
 *   OPTIONAL  TRUE
 *   ERRORS
 *     {invalidArgumentValue | noSuchArgument | noSuchEventType |
 *       noSuchObjectClass | noSuchObjectInstance | processingFailure}
 *   CODE      local:1
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<EventReportArgument, EventReportResult>}
 * @implements {OPERATION<EventReportArgument, EventReportResult>}
 */
export const m_EventReport_Confirmed: OPERATION<
  EventReportArgument,
  EventReportResult
> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_EventReportArgument,
    '&ResultType': _decode_EventReportResult,
  },
  encoderFor: {
    '&ArgumentType': _encode_EventReportArgument,
    '&ResultType': _encode_EventReportResult,
  },
  '&resultTypeOptional': false /* OBJECT_FIELD_SETTING */,
  '&Errors': [
    invalidArgumentValue,
    noSuchArgument,
    noSuchEventType,
    noSuchObjectClass,
    noSuchObjectInstance,
    processingFailure,
  ] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 1,
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
/* END_OF_SYMBOL_DEFINITION m_EventReport_Confirmed */

/* eslint-enable */
