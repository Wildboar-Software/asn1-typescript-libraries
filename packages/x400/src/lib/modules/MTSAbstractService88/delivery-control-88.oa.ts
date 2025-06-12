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
import { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.js';
export { ERROR } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/ERROR.oca.js';
import { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
export { OPERATION } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/OPERATION.oca.js';
import {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
export {
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.js';
import {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
export {
    Code,
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.js';
import {
    DeliveryControls88,
    _decode_DeliveryControls88,
    _encode_DeliveryControls88,
} from '../MTSAbstractService88/DeliveryControls88.ta.js';
export {
    DeliveryControls88,
    _decode_DeliveryControls88,
    _encode_DeliveryControls88,
} from '../MTSAbstractService88/DeliveryControls88.ta.js';
import {
    Waiting,
    _decode_Waiting,
    _encode_Waiting,
} from '../MTSAbstractService/Waiting.ta.js';
export {
    Waiting,
    _decode_Waiting,
    _encode_Waiting,
} from '../MTSAbstractService/Waiting.ta.js';
import { control_violates_registration } from '../MTSAbstractService/control-violates-registration.oa.js';
export { control_violates_registration } from '../MTSAbstractService/control-violates-registration.oa.js';
import { security_error } from '../MTSAbstractService/security-error.oa.js';
export { security_error } from '../MTSAbstractService/security-error.oa.js';
import { operationObject1 } from '../MTSAbstractService/operationObject1.oa.js';
export { operationObject1 } from '../MTSAbstractService/operationObject1.oa.js';
import { op_delivery_control } from '../MTSAccessProtocol/op-delivery-control.va.js';
export { op_delivery_control } from '../MTSAccessProtocol/op-delivery-control.va.js';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.js';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.js';

/* START_OF_SYMBOL_DEFINITION delivery_control_88 */
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
/* END_OF_SYMBOL_DEFINITION delivery_control_88 */

/* eslint-enable */
