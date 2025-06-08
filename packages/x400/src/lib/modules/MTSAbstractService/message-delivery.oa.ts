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
import * as $ from 'asn1-ts/dist/node/functional';
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta';
import {
    MessageDeliveryArgument,
    _decode_MessageDeliveryArgument,
    _encode_MessageDeliveryArgument,
} from '../MTSAbstractService/MessageDeliveryArgument.ta';
export {
    MessageDeliveryArgument,
    _decode_MessageDeliveryArgument,
    _encode_MessageDeliveryArgument,
} from '../MTSAbstractService/MessageDeliveryArgument.ta';
import {
    MessageDeliveryResult,
    _decode_MessageDeliveryResult,
    _encode_MessageDeliveryResult,
} from '../MTSAbstractService/MessageDeliveryResult.ta';
export {
    MessageDeliveryResult,
    _decode_MessageDeliveryResult,
    _encode_MessageDeliveryResult,
} from '../MTSAbstractService/MessageDeliveryResult.ta';
import { delivery_control_violated } from '../MTSAbstractService/delivery-control-violated.oa';
export { delivery_control_violated } from '../MTSAbstractService/delivery-control-violated.oa';
import { security_error } from '../MTSAbstractService/security-error.oa';
export { security_error } from '../MTSAbstractService/security-error.oa';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa';
export { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa';
import { op_message_delivery } from '../MTSAccessProtocol/op-message-delivery.va';
export { op_message_delivery } from '../MTSAccessProtocol/op-message-delivery.va';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';

/* START_OF_SYMBOL_DEFINITION message_delivery */
/**
 * @summary message_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-delivery ABSTRACT-OPERATION ::= {
 *   ARGUMENT         MessageDeliveryArgument
 *   RESULT           MessageDeliveryResult
 *   ERRORS
 *     {delivery-control-violated | security-error |
 *       unsupported-critical-function}
 *   LINKED           {operationObject1, ...}
 *   INVOKE PRIORITY  {4 | 6 | 7}
 *   CODE             op-message-delivery
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<MessageDeliveryArgument, MessageDeliveryResult>}
 * @implements {ABSTRACT_OPERATION<MessageDeliveryArgument, MessageDeliveryResult>}
 */
export const message_delivery: ABSTRACT_OPERATION<
    MessageDeliveryArgument,
    MessageDeliveryResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_MessageDeliveryArgument,
        '&ResultType': _decode_MessageDeliveryResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_MessageDeliveryArgument,
        '&ResultType': _encode_MessageDeliveryResult,
    },
    '&Errors': [
        delivery_control_violated,
        security_error,
        unsupported_critical_function,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_message_delivery /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ArgumentType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ResultType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&InvokePriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&ResultPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    '&returnResult': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&synchronous': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&idempotent': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&alwaysReturns': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION message_delivery */

/* eslint-enable */
