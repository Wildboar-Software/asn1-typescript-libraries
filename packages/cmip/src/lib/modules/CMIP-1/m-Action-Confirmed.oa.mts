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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.mjs';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
export {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  Code,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
export {
  Code,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  ActionArgument,
  _decode_ActionArgument,
  _encode_ActionArgument,
} from '../CMIP-1/ActionArgument.ta.mjs';
export {
  ActionArgument,
  _decode_ActionArgument,
  _encode_ActionArgument,
} from '../CMIP-1/ActionArgument.ta.mjs';
import {
  ActionResult,
  _decode_ActionResult,
  _encode_ActionResult,
} from '../CMIP-1/ActionResult.ta.mjs';
export {
  ActionResult,
  _decode_ActionResult,
  _encode_ActionResult,
} from '../CMIP-1/ActionResult.ta.mjs';
import { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa.mjs';
export { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa.mjs';
import { complexityLimitation } from '../CMIP-1/complexityLimitation.oa.mjs';
export { complexityLimitation } from '../CMIP-1/complexityLimitation.oa.mjs';
import { invalidScope } from '../CMIP-1/invalidScope.oa.mjs';
export { invalidScope } from '../CMIP-1/invalidScope.oa.mjs';
import { invalidFilter } from '../CMIP-1/invalidFilter.oa.mjs';
export { invalidFilter } from '../CMIP-1/invalidFilter.oa.mjs';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.mjs';
export { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.mjs';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.mjs';
export { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.mjs';
import { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';
export { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';
import { syncNotSupported } from '../CMIP-1/syncNotSupported.oa.mjs';
export { syncNotSupported } from '../CMIP-1/syncNotSupported.oa.mjs';
import { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa.mjs';
export { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa.mjs';
import { accessDenied } from '../CMIP-1/accessDenied.oa.mjs';
import { invalidArgumentValue } from '../CMIP-1/invalidArgumentValue.oa.mjs';
import { noSuchAction } from '../CMIP-1/noSuchAction.oa.mjs';
import { noSuchArgument } from '../CMIP-1/noSuchArgument.oa.mjs';

/* START_OF_SYMBOL_DEFINITION m_Action_Confirmed */
/**
 * @summary m_Action_Confirmed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-Action-Confirmed OPERATION ::= {
 *   ARGUMENT  ActionArgument
 *   RESULT    ActionResult
 *   OPTIONAL  TRUE -- this result is conditional;
 *   -- for conditions see 8.3.3.2.9 of ITU-T Rec. X.710
 *   ERRORS
 *     {accessDenied | classInstanceConflict | complexityLimitation | invalidScope
 *       | invalidArgumentValue | invalidFilter | noSuchAction | noSuchArgument |
 *       noSuchObjectClass | noSuchObjectInstance | processingFailure |
 *       syncNotSupported}
 *   LINKED    {m-Linked-Reply}
 *   CODE      local:7
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<ActionArgument, ActionResult>}
 * @implements {OPERATION<ActionArgument, ActionResult>}
 */
export const m_Action_Confirmed: OPERATION<ActionArgument, ActionResult> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_ActionArgument,
    '&ResultType': _decode_ActionResult,
  },
  encoderFor: {
    '&ArgumentType': _encode_ActionArgument,
    '&ResultType': _encode_ActionResult,
  },
  '&resultTypeOptional': false /* OBJECT_FIELD_SETTING */,
  '&Errors': [
    accessDenied,
    classInstanceConflict,
    complexityLimitation,
    invalidScope,
    invalidArgumentValue,
    invalidFilter,
    noSuchAction,
    noSuchArgument,
    noSuchObjectClass,
    noSuchObjectInstance,
    processingFailure,
    syncNotSupported,
  ] /* OBJECT_FIELD_SETTING */,
  '&Linked': [m_Linked_Reply] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 7,
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
/* END_OF_SYMBOL_DEFINITION m_Action_Confirmed */

/* eslint-enable */
