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
    DeliveryControlArgument,
    _decode_DeliveryControlArgument,
    _encode_DeliveryControlArgument,
} from '../MTSAbstractService/DeliveryControlArgument.ta.mjs';
import {
    DeliveryControlResult,
    _decode_DeliveryControlResult,
    _encode_DeliveryControlResult,
} from '../MTSAbstractService/DeliveryControlResult.ta.mjs';
import { control_violates_registration } from '../MTSAbstractService/control-violates-registration.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { operation_refused } from '../MTSAbstractService/operation-refused.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_delivery_control } from '../MTSAccessProtocol/op-delivery-control.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary delivery_control
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delivery-control ABSTRACT-OPERATION ::= {
 *   ARGUMENT         DeliveryControlArgument
 *   RESULT           DeliveryControlResult
 *   ERRORS
 *     {control-violates-registration | security-error | operation-refused}
 *   LINKED           {operationObject1, ...}
 *   INVOKE PRIORITY  {3}
 *   CODE             op-delivery-control
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<DeliveryControlArgument, DeliveryControlResult>}
 * @implements {ABSTRACT_OPERATION<DeliveryControlArgument, DeliveryControlResult>}
 */
export const delivery_control: ABSTRACT_OPERATION<
    DeliveryControlArgument,
    DeliveryControlResult
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_DeliveryControlArgument,
        '&ResultType': _decode_DeliveryControlResult,
    },
    encoderFor: {
        '&ArgumentType': _encode_DeliveryControlArgument,
        '&ResultType': _encode_DeliveryControlResult,
    },
    '&Errors': [
        control_violates_registration,
        security_error,
        operation_refused,
    ] /* OBJECT_FIELD_SETTING */,
    '&Linked': [operationObject1] /* OBJECT_FIELD_SETTING */,
    '&operationCode': op_delivery_control /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
