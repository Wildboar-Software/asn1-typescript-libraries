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
  GetArgument,
  _decode_GetArgument,
  _encode_GetArgument,
} from '../CMIP-1/GetArgument.ta.mjs';
import {
  GetResult,
  _decode_GetResult,
  _encode_GetResult,
} from '../CMIP-1/GetResult.ta.mjs';
import { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa.mjs';
import { complexityLimitation } from '../CMIP-1/complexityLimitation.oa.mjs';
import { getListError } from '../CMIP-1/getListError.oa.mjs';
import { invalidFilter } from '../CMIP-1/invalidFilter.oa.mjs';
import { invalidScope } from '../CMIP-1/invalidScope.oa.mjs';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.mjs';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.mjs';
import { operationCancelled } from '../CMIP-1/operationCancelled.oa.mjs';
import { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';
import { syncNotSupported } from '../CMIP-1/syncNotSupported.oa.mjs';
import { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa.mjs';
import { accessDenied } from '../CMIP-1/accessDenied.oa.mjs';


/**
 * @summary m_Get
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-Get OPERATION ::= {
 *   ARGUMENT  GetArgument
 *   RESULT    GetResult
 *   OPTIONAL  TRUE -- this result is conditional;
 *   -- for conditions see 8.3.1.2.8 of ITU-T Rec. X.710
 *   ERRORS
 *     {accessDenied | classInstanceConflict | complexityLimitation | getListError
 *       | invalidFilter | invalidScope | noSuchObjectClass | noSuchObjectInstance
 *       | operationCancelled | processingFailure | syncNotSupported}
 *   LINKED    {m-Linked-Reply}
 *   CODE      local:3
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<GetArgument, GetResult>}
 * @implements {OPERATION<GetArgument, GetResult>}
 */
export const m_Get: OPERATION<GetArgument, GetResult> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_GetArgument,
    '&ResultType': _decode_GetResult,
  },
  encoderFor: {
    '&ArgumentType': _encode_GetArgument,
    '&ResultType': _encode_GetResult,
  },
  '&resultTypeOptional': false /* OBJECT_FIELD_SETTING */,
  '&Errors': [
    accessDenied,
    classInstanceConflict,
    complexityLimitation,
    getListError,
    invalidFilter,
    invalidScope,
    noSuchObjectClass,
    noSuchObjectInstance,
    operationCancelled,
    processingFailure,
    syncNotSupported,
  ] /* OBJECT_FIELD_SETTING */,
  '&Linked': [m_Linked_Reply] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 3,
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
