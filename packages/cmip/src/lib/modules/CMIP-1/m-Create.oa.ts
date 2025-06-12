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
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.js';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.js';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
import {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
export {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
import {
  Code,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
export {
  Code,
  _decode_Code,
  _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
import {
  CreateArgument,
  _decode_CreateArgument,
  _encode_CreateArgument,
} from '../CMIP-1/CreateArgument.ta.js';
export {
  CreateArgument,
  _decode_CreateArgument,
  _encode_CreateArgument,
} from '../CMIP-1/CreateArgument.ta.js';
import {
  CreateResult,
  _decode_CreateResult,
  _encode_CreateResult,
} from '../CMIP-1/CreateResult.ta.js';
export {
  CreateResult,
  _decode_CreateResult,
  _encode_CreateResult,
} from '../CMIP-1/CreateResult.ta.js';
import { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa.js';
export { classInstanceConflict } from '../CMIP-1/classInstanceConflict.oa.js';
import { duplicateManagedObjectInstance } from '../CMIP-1/duplicateManagedObjectInstance.oa.js';
export { duplicateManagedObjectInstance } from '../CMIP-1/duplicateManagedObjectInstance.oa.js';
import { invalidObjectInstance } from '../CMIP-1/invalidObjectInstance.oa.js';
export { invalidObjectInstance } from '../CMIP-1/invalidObjectInstance.oa.js';
import { missingAttributeValue } from '../CMIP-1/missingAttributeValue.oa.js';
export { missingAttributeValue } from '../CMIP-1/missingAttributeValue.oa.js';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.js';
export { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.js';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.js';
export { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.js';
import { noSuchReferenceObject } from '../CMIP-1/noSuchReferenceObject.oa.js';
export { noSuchReferenceObject } from '../CMIP-1/noSuchReferenceObject.oa.js';
import { processingFailure } from '../CMIP-1/processingFailure.oa.js';
export { processingFailure } from '../CMIP-1/processingFailure.oa.js';
import { accessDenied } from '../CMIP-1/accessDenied.oa.js';
import { invalidAttributeValue } from '../CMIP-1/invalidAttributeValue.oa.js';
import { noSuchAttribute } from '../CMIP-1/noSuchAttribute.oa.js';


/* START_OF_SYMBOL_DEFINITION m_Create */
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
  '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION m_Create */

/* eslint-enable */
