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
    originate_ipm_ArgumentType,
    _decode_originate_ipm_ArgumentType,
    _encode_originate_ipm_ArgumentType,
} from '../IPMSAbstractService/originate-ipm-ArgumentType.ta.mjs';
import {
    originate_ipm_ResultType,
    _decode_originate_ipm_ResultType,
    _encode_originate_ipm_ResultType,
} from '../IPMSAbstractService/originate-ipm-ResultType.ta.mjs';
import { subscription_error } from '../IPMSAbstractService/subscription-error.oa.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { type ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary originate_ipm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-ipm ABSTRACT-OPERATION ::= {
 *   ARGUMENT  SET {envelope  [0]  MessageSubmissionEnvelope,
 *                  content   [1]  IPM}
 *   RESULT
 *     SET {submission-identifier  [0]  MessageSubmissionIdentifier,
 *          submission-time        [1]  MessageSubmissionTime}
 *   ERRORS    {subscription-error | recipient-improperly-specified}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<originate_ipm_ArgumentType, originate_ipm_ResultType>}
 * @implements {ABSTRACT_OPERATION<originate_ipm_ArgumentType, originate_ipm_ResultType>}
 */
export const originate_ipm: ABSTRACT_OPERATION<
    originate_ipm_ArgumentType,
    originate_ipm_ResultType
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_originate_ipm_ArgumentType,
        '&ResultType': _decode_originate_ipm_ResultType,
    },
    encoderFor: {
        '&ArgumentType': _encode_originate_ipm_ArgumentType,
        '&ResultType': _encode_originate_ipm_ResultType,
    },
    '&Errors': [
        subscription_error,
        recipient_improperly_specified,
    ] /* OBJECT_FIELD_SETTING */,
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
