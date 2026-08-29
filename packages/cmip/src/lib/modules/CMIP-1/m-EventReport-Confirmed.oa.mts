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
import {
  EventReportResult,
  _decode_EventReportResult,
  _encode_EventReportResult,
} from '../CMIP-1/EventReportResult.ta.mjs';
import { noSuchEventType } from '../CMIP-1/noSuchEventType.oa.mjs';
import { noSuchObjectClass } from '../CMIP-1/noSuchObjectClass.oa.mjs';
import { noSuchObjectInstance } from '../CMIP-1/noSuchObjectInstance.oa.mjs';
import { processingFailure } from '../CMIP-1/processingFailure.oa.mjs';
import { invalidArgumentValue } from '../CMIP-1/invalidArgumentValue.oa.mjs';
import { noSuchArgument } from '../CMIP-1/noSuchArgument.oa.mjs';


/**
 * @summary m_EventReport_Confirmed
 * @description
 *
 * Confirmed M-EVENT-REPORT (ROSE local:1). Single
 * response (no linked replies). Result is optional.
 * ITU-T Rec. X.711 (10/97)
 * [§6.3](https://www.itu.int/rec/T-REC-X.711-199710-I),
 * Table 4, §7.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m-EventReport-Confirmed OPERATION ::= {
 *   ARGUMENT  EventReportArgument
 *   RESULT    EventReportResult
 *   OPTIONAL  TRUE
 *   ERRORS
 *     {invalidArgumentValue | noSuchArgument | noSuchEventType |
 *       noSuchObjectClass | noSuchObjectInstance | processingFailure}
 *   CODE      local:1
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<EventReportArgument, EventReportResult>}
 * @implements {OPERATION<EventReportArgument, EventReportResult>}
 */
export const m_EventReport_Confirmed: OPERATION<
  EventReportArgument,
  EventReportResult
> = {
  class: 'OPERATION',
  decoderFor: {
    '&ArgumentType': _decode_EventReportArgument,
    '&ResultType': _decode_EventReportResult,
  },
  encoderFor: {
    '&ArgumentType': _encode_EventReportArgument,
    '&ResultType': _encode_EventReportResult,
  },
  '&resultTypeOptional': false /* OBJECT_FIELD_SETTING */,
  '&Errors': [
    invalidArgumentValue,
    noSuchArgument,
    noSuchEventType,
    noSuchObjectClass,
    noSuchObjectInstance,
    processingFailure,
  ] /* OBJECT_FIELD_SETTING */,
  '&operationCode': {
    local: 1,
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
