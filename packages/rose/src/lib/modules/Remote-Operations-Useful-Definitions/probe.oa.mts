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
import { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca.mjs';
export { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca.mjs';
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '../Remote-Operations-Information-Objects/Priority.ta.mjs';
export {
  Priority,
  _decode_Priority,
  _encode_Priority,
} from '../Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
  Code,
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';
export {
  Code,
  _decode_Code,
  _encode_Code,
} from '../Remote-Operations-Information-Objects/Code.ta.mjs';
import {
  probe_ArgumentType,
  _decode_probe_ArgumentType,
  _encode_probe_ArgumentType,
} from '../Remote-Operations-Useful-Definitions/probe-ArgumentType.ta.mjs';
export {
  probe_ArgumentType,
  _decode_probe_ArgumentType,
  _encode_probe_ArgumentType,
} from '../Remote-Operations-Useful-Definitions/probe-ArgumentType.ta.mjs';
import {
  probe_ResultType,
  _enum_for_probe_ResultType,
  probe_ResultType_running /* IMPORTED_LONG_ENUMERATION_ITEM */,
  running /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  probe_ResultType_finished /* IMPORTED_LONG_ENUMERATION_ITEM */,
  finished /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  probe_ResultType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_probe_ResultType,
  _encode_probe_ResultType,
} from '../Remote-Operations-Useful-Definitions/probe-ResultType.ta.mjs';
export {
  probe_ResultType,
  _enum_for_probe_ResultType,
  probe_ResultType_running /* IMPORTED_LONG_ENUMERATION_ITEM */,
  running /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  probe_ResultType_finished /* IMPORTED_LONG_ENUMERATION_ITEM */,
  finished /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  probe_ResultType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_probe_ResultType,
  _encode_probe_ResultType,
} from '../Remote-Operations-Useful-Definitions/probe-ResultType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION probe */
/**
 * @summary probe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * probe OPERATION ::= {
 *   ARGUMENT    SEQUENCE {invokeId  [0]  InvokeId}
 *   RESULT      ENUMERATED {running(0), finished(1), unknown(2), ...
 *                           }
 *   IDEMPOTENT  TRUE
 *   CODE        local:-2
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<probe_ArgumentType, probe_ResultType>}
 * @implements {OPERATION<probe_ArgumentType, probe_ResultType>}
 */
export const probe: OPERATION<probe_ArgumentType, probe_ResultType> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_probe_ArgumentType,
    '&ResultType': _decode_probe_ResultType,
  },
  encoderFor: {
    '&ArgumentType': _encode_probe_ArgumentType,
    '&ResultType': _encode_probe_ResultType,
  },
  '&idempotent': false /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: -2,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION probe */

/* eslint-enable */
