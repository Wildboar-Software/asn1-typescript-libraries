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
  CreateArgument,
  _decode_CreateArgument,
  _encode_CreateArgument,
} from '../CMIP-1/CreateArgument.ta.mjs';
import {
  CreateResult,
  _decode_CreateResult,
  _encode_CreateResult,
} from '../CMIP-1/CreateResult.ta.mjs';
import { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa.mjs';
import { duplicateManagedObjectInstance } from '../CMIP-1/duplicateManagedObjectInstance.oa.mjs';
import { invalidObjectInstance } from '../CMIP-1/invalidObjectInstance.oa.mjs';
import { missingAttributeValue } from '../CMIP-1/missingAttributeValue.oa.mjs';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.mjs';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.mjs';
import { noSuchReferenceObject } from '../CMIP-1/noSuchReferenceObject.oa.mjs';
import { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';
import { accessDenied } from '../CMIP-1/accessDenied.oa.mjs';
import { invalidAttributeValue } from '../CMIP-1/invalidAttributeValue.oa.mjs';
import { noSuchAttribute } from '../CMIP-1/noSuchAttribute.oa.mjs';



/**
 * @summary m_Create
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-Create OPERATION ::= {
 *   ARGUMENT  CreateArgument
 *   RESULT    CreateResult
 *   OPTIONAL  TRUE -- this result is conditional;
 *   -- for conditions see 8.3.4.1.3 of ITU-T Rec. X.710
 *   ERRORS
 *     {accessDenied | classInstanceConflict | duplicateManagedObjectInstance |
 *       invalidAttributeValue | invalidObjectInstance | missingAttributeValue |
 *       noSuchAttribute | noSuchObjectClass | noSuchObjectInstance |
 *       noSuchReferenceObject | processingFailure}
 *   CODE      local:8
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<CreateArgument, CreateResult>}
 * @implements {OPERATION<CreateArgument, CreateResult>}
 */
export const m_Create: OPERATION<CreateArgument, CreateResult> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_CreateArgument,
    '&ResultType': _decode_CreateResult,
  },
  encoderFor: {
    '&ArgumentType': _encode_CreateArgument,
    '&ResultType': _encode_CreateResult,
  },
  '&resultTypeOptional': false /* OBJECT_FIELD_SETTING */,
  '&Errors': [
    accessDenied,
    classInstanceConflict,
    duplicateManagedObjectInstance,
    invalidAttributeValue,
    invalidObjectInstance,
    missingAttributeValue,
    noSuchAttribute,
    noSuchObjectClass,
    noSuchObjectInstance,
    noSuchReferenceObject,
    processingFailure,
  ] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 8,
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
