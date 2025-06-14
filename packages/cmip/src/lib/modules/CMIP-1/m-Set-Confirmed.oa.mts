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
  SetArgument,
  _decode_SetArgument,
  _encode_SetArgument,
} from '../CMIP-1/SetArgument.ta.mjs';
import {
  SetResult,
  _decode_SetResult,
  _encode_SetResult,
} from '../CMIP-1/SetResult.ta.mjs';
import { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa.mjs';
import { complexityLimitation } from '../CMIP-1/complexityLimitation.oa.mjs';
import { invalidFilter } from '../CMIP-1/invalidFilter.oa.mjs';
import { invalidScope } from '../CMIP-1/invalidScope.oa.mjs';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.mjs';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.mjs';
import { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';
import { setListError } from '../CMIP-1/setListError.oa.mjs';
import { syncNotSupported } from '../CMIP-1/syncNotSupported.oa.mjs';
import { m_Linked_Reply } from '../CMIP-1/m-Linked-Reply.oa.mjs';
import { accessDenied } from '../CMIP-1/accessDenied.oa.mjs';

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
  '&resultTypeOptional': true /* OBJECT_FIELD_SETTING */,
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
  '&returnResult': true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION m_Set_Confirmed */

/* eslint-enable */
