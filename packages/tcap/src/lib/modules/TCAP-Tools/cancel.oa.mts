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
import * as $ from 'asn1-ts/dist/functional.mjs';
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
  TCInvokeIdSet,
  _decode_TCInvokeIdSet,
  _encode_TCInvokeIdSet,
} from '../TCAPMessages/TCInvokeIdSet.ta.mjs';
import { cancelFailed } from '../TCAP-Tools/cancelFailed.oa.mjs';
/**
 * @summary cancel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancel OPERATION ::= {
 *   ARGUMENT  present < TCInvokeIdSet
 *   -- a TC-user may redefine this type to include
 *   -- an empty result so that it becomes a Class 1 operation
 *   ERRORS    {cancelFailed}
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<$.Selection<TCInvokeIdSet, "present">>}
 * @implements {OPERATION<$.Selection<TCInvokeIdSet, "present">>}
 */
export const cancel: OPERATION<$.Selection<TCInvokeIdSet, 'present'>> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': $._decodeInteger,
    '&ResultType': undefined,
  },
  encoderFor: {
    '&ArgumentType': $._encodeInteger,
    '&ResultType': undefined,
  },
  '&Errors': [cancelFailed] /* OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
