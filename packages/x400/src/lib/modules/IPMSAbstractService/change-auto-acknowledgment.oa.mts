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
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import {
    change_auto_acknowledgment_ArgumentType,
    _decode_change_auto_acknowledgment_ArgumentType,
    _encode_change_auto_acknowledgment_ArgumentType,
} from '../IPMSAbstractService/change-auto-acknowledgment-ArgumentType.ta.mjs';
import { subscription_error } from '../IPMSAbstractService/subscription-error.oa.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary change_auto_acknowledgment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * change-auto-acknowledgment ABSTRACT-OPERATION ::= {
 *   ARGUMENT
 *     SET {auto-acknowledge-IPMs                [0]  BOOLEAN,
 *          auto-acknowledge-suppl-receipt-info
 *            [1]  SupplementaryInformation OPTIONAL}
 *   ERRORS    {subscription-error}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<change_auto_acknowledgment_ArgumentType>}
 * @implements {ABSTRACT_OPERATION<change_auto_acknowledgment_ArgumentType>}
 */
export const change_auto_acknowledgment: ABSTRACT_OPERATION<change_auto_acknowledgment_ArgumentType> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_change_auto_acknowledgment_ArgumentType,
        '&ResultType': undefined,
    },
    encoderFor: {
        '&ArgumentType': _encode_change_auto_acknowledgment_ArgumentType,
        '&ResultType': undefined,
    },
    '&Errors': [subscription_error] /* OBJECT_FIELD_SETTING */,
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
