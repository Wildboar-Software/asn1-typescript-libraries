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
    CancelDeferredDeliveryArgument,
    _decode_CancelDeferredDeliveryArgument,
    _encode_CancelDeferredDeliveryArgument,
} from '../MTSAbstractService/CancelDeferredDeliveryArgument.ta.mjs';
import {
    CancelDeferredDeliveryResult,
    _decode_CancelDeferredDeliveryResult,
    _encode_CancelDeferredDeliveryResult,
} from '../MTSAbstractService/CancelDeferredDeliveryResult.ta.mjs';
import { deferred_delivery_cancellation_rejected } from '../MTSAbstractService/deferred-delivery-cancellation-rejected.oa.mjs';
import { message_submission_identifier_invalid } from '../MTSAbstractService/message-submission-identifier-invalid.oa.mjs';
import { remote_bind_error } from '../MTSAbstractService/remote-bind-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_cancel_deferred_delivery } from '../MTSAccessProtocol/op-cancel-deferred-delivery.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary cancel_deferred_delivery
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancel-deferred-delivery ABSTRACT-OPERATION ::= {
 *   ARGUMENT         CancelDeferredDeliveryArgument
 *   RESULT           CancelDeferredDeliveryResult
 *   ERRORS
 *     {deferred-delivery-cancellation-rejected |
 *       message-submission-identifier-invalid | remote-bind-error}
 *   LINKED           {operationObject1, ...}
 *   INVOKE PRIORITY  {3}
 *   CODE             op-cancel-deferred-delivery
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<CancelDeferredDeliveryArgument, CancelDeferredDeliveryResult>}
 * @implements {ABSTRACT_OPERATION<CancelDeferredDeliveryArgument, CancelDeferredDeliveryResult>}
 */
export const cancel_deferred_delivery: ABSTRACT_OPERATION<
    CancelDeferredDeliveryArgument,
    CancelDeferredDeliveryResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_CancelDeferredDeliveryArgument,
        '&ResultType': _decode_CancelDeferredDeliveryResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_CancelDeferredDeliveryArgument,
        '&ResultType': _encode_CancelDeferredDeliveryResult,
    },
    '&Errors': [
        deferred_delivery_cancellation_rejected,
        message_submission_identifier_invalid,
        remote_bind_error,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_cancel_deferred_delivery /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
