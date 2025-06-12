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
    ReportDeliveryArgument,
    _decode_ReportDeliveryArgument,
    _encode_ReportDeliveryArgument,
} from '../MTSAbstractService/ReportDeliveryArgument.ta.mjs';
export {
    ReportDeliveryArgument,
    _decode_ReportDeliveryArgument,
    _encode_ReportDeliveryArgument,
} from '../MTSAbstractService/ReportDeliveryArgument.ta.mjs';
import {
    ReportDeliveryResult,
    _decode_ReportDeliveryResult,
    _encode_ReportDeliveryResult,
} from '../MTSAbstractService/ReportDeliveryResult.ta.mjs';
export {
    ReportDeliveryResult,
    _decode_ReportDeliveryResult,
    _encode_ReportDeliveryResult,
} from '../MTSAbstractService/ReportDeliveryResult.ta.mjs';
import { delivery_control_violated } from '../MTSAbstractService/delivery-control-violated.oa.mjs';
export { delivery_control_violated } from '../MTSAbstractService/delivery-control-violated.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
export { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
export { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_report_delivery } from '../MTSAccessProtocol/op-report-delivery.va.mjs';
export { op_report_delivery } from '../MTSAccessProtocol/op-report-delivery.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';

/* START_OF_SYMBOL_DEFINITION report_delivery */
/**
 * @summary report_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * report-delivery ABSTRACT-OPERATION ::= {
 *   ARGUMENT         ReportDeliveryArgument
 *   RESULT           ReportDeliveryResult
 *   ERRORS
 *     {delivery-control-violated | security-error |
 *       unsupported-critical-function}
 *   LINKED           {operationObject1, ...}
 *   INVOKE PRIORITY  {5}
 *   CODE             op-report-delivery
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<ReportDeliveryArgument, ReportDeliveryResult>}
 * @implements {ABSTRACT_OPERATION<ReportDeliveryArgument, ReportDeliveryResult>}
 */
export const report_delivery: ABSTRACT_OPERATION<
    ReportDeliveryArgument,
    ReportDeliveryResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_ReportDeliveryArgument,
        '&ResultType': _decode_ReportDeliveryResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_ReportDeliveryArgument,
        '&ResultType': _encode_ReportDeliveryResult,
    },
    '&Errors': [
        delivery_control_violated,
        security_error,
        unsupported_critical_function,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_report_delivery /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION report_delivery */

/* eslint-enable */
