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
  InvokeIDType,
  _decode_InvokeIDType,
  _encode_InvokeIDType,
} from '../CMIP-1/InvokeIDType.ta.mjs';
export {
  InvokeIDType,
  _decode_InvokeIDType,
  _encode_InvokeIDType,
} from '../CMIP-1/InvokeIDType.ta.mjs';
import { mistypedOperation } from '../CMIP-1/mistypedOperation.oa.mjs';
export { mistypedOperation } from '../CMIP-1/mistypedOperation.oa.mjs';
import { noSuchInvokeId } from '../CMIP-1/noSuchInvokeId.oa.mjs';
export { noSuchInvokeId } from '../CMIP-1/noSuchInvokeId.oa.mjs';
import { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';
export { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';

/* START_OF_SYMBOL_DEFINITION m_CancelGet */
/**
 * @summary m_CancelGet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-CancelGet OPERATION ::= {
 *   ARGUMENT       InvokeIDType
 *   RETURN RESULT  TRUE
 *   ERRORS         {mistypedOperation | noSuchInvokeId | processingFailure}
 *   CODE           local:10
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<InvokeIDType>}
 * @implements {OPERATION<InvokeIDType>}
 */
export const m_CancelGet: OPERATION<InvokeIDType> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_InvokeIDType,
    '&ResultType': undefined,
  },
  encoderFor: {
    '&ArgumentType': _encode_InvokeIDType,
    '&ResultType': undefined,
  },
  '&returnResult': false /* OBJECT_FIELD_SETTING */,
  '&Errors': [
    mistypedOperation,
    noSuchInvokeId,
    processingFailure,
  ] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 10,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION m_CancelGet */

/* eslint-enable */
