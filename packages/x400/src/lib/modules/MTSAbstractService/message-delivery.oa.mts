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
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    MessageDeliveryArgument,
    _decode_MessageDeliveryArgument,
    _encode_MessageDeliveryArgument,
} from '../MTSAbstractService/MessageDeliveryArgument.ta.mjs';
import {
    MessageDeliveryResult,
    _decode_MessageDeliveryResult,
    _encode_MessageDeliveryResult,
} from '../MTSAbstractService/MessageDeliveryResult.ta.mjs';
import { delivery_control_violated } from '../MTSAbstractService/delivery-control-violated.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { unsupported_critical_function } from '../MTSAbstractService/unsupported-critical-function.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_message_delivery } from '../MTSAccessProtocol/op-message-delivery.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
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

/* eslint-enable */
