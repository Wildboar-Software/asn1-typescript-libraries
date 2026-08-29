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
  EventReportArgument,
  _decode_EventReportArgument,
  _encode_EventReportArgument,
} from '../CMIP-1/EventReportArgument.ta.mjs';

/**
 * @summary m_EventReport
 * @description
 *
 * Non-confirmed M-EVENT-REPORT (ROSE local:0). No
 * result. Confirmed mode uses
 * `m-EventReport-Confirmed`. ITU-T Rec. X.711 (10/97)
 * [§6.3](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * Table 1, Table 4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-EventReport OPERATION ::= {
 *   ARGUMENT         EventReportArgument
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             local:0
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<EventReportArgument>}
 * @implements {OPERATION<EventReportArgument>}
 */
export const m_EventReport: OPERATION<EventReportArgument> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_EventReportArgument,
    '&ResultType': undefined,
  },
  encoderFor: {
    '&ArgumentType': _encode_EventReportArgument,
    '&ResultType': undefined,
  },
  '&returnResult': false /* OBJECT_FIELD_SETTING */,
  '&alwaysReturns': false /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 0,
  } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
  '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
  '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
  '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
