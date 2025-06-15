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
  DeleteArgument,
  _decode_DeleteArgument,
  _encode_DeleteArgument,
} from '../CMIP-1/DeleteArgument.ta.mjs';
import {
  DeleteResult,
  _decode_DeleteResult,
  _encode_DeleteResult,
} from '../CMIP-1/DeleteResult.ta.mjs';
import { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa.mjs';
import { complexityLimitation } from '../CMIP-1/complexityLimitation.oa.mjs';
import { invalidFilter } from '../CMIP-1/invalidFilter.oa.mjs';
import { invalidScope } from '../CMIP-1/invalidScope.oa.mjs';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.mjs';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.mjs';
import { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';
import { syncNotSupported } from '../CMIP-1/syncNotSupported.oa.mjs';
import { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa.mjs';
import { accessDenied } from '../CMIP-1/accessDenied.oa.mjs';


/**
 * @summary m_Delete
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-Delete OPERATION ::= {
 *   ARGUMENT  DeleteArgument
 *   RESULT    DeleteResult
 *   OPTIONAL  TRUE -- this result is conditional;
 *   -- for conditions see 8.3.5.2.8 of ITU-T Rec. X.710
 *   ERRORS
 *     {accessDenied | classInstanceConflict | complexityLimitation |
 *       invalidFilter | invalidScope | noSuchObjectClass | noSuchObjectInstance |
 *       processingFailure | syncNotSupported}
 *   LINKED    {m-Linked-Reply}
 *   CODE      local:9
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<DeleteArgument, DeleteResult>}
 * @implements {OPERATION<DeleteArgument, DeleteResult>}
 */
export const m_Delete: OPERATION<DeleteArgument, DeleteResult> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_DeleteArgument,
    '&ResultType': _decode_DeleteResult,
  },
  encoderFor: {
    '&ArgumentType': _encode_DeleteArgument,
    '&ResultType': _encode_DeleteResult,
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
    syncNotSupported,
  ] /* OBJECT_FIELD_SETTING */,
  '&Linked': [m_Linked_Reply] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 9,
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
