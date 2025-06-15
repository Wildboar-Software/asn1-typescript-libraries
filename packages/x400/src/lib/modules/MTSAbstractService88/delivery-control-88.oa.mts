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
    DeliveryControls88,
    _decode_DeliveryControls88,
    _encode_DeliveryControls88,
} from '../MTSAbstractService88/DeliveryControls88.ta.mjs';
import {
    Waiting,
    _decode_Waiting,
    _encode_Waiting,
} from '../MTSAbstractService/Waiting.ta.mjs';
import { control_violates_registration } from '../MTSAbstractService/control-violates-registration.oa.mjs';
import { security_error } from '../MTSAbstractService/security-error.oa.mjs';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.mjs';
import { op_delivery_control } from '../MTSAccessProtocol/op-delivery-control.va.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary delivery_control_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delivery-control-88 ABSTRACT-OPERATION ::= {
 *   ARGUMENT         DeliveryControls88
 *   RESULT           Waiting
 *   ERRORS           {control-violates-registration | security-error}
 *   LINKED
 *     {operationObject1,
 *       ...} -- This IOS needs to be extensible for Forward{} of X.880
 *   INVOKE PRIORITY  {3}
 *   CODE             op-delivery-control
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<DeliveryControls88, Waiting>}
 * @implements {ABSTRACT_OPERATION<DeliveryControls88, Waiting>}
 */
export const delivery_control_88: ABSTRACT_OPERATION<
    DeliveryControls88,
    Waiting
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_DeliveryControls88,
        '&ResultType': _decode_Waiting,
    },
    encoderFor: {
        '&ArgumentType': _encode_DeliveryControls88,
        '&ResultType': _encode_Waiting,
    },
    '&Errors': [
        control_violates_registration,
        security_error,
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
