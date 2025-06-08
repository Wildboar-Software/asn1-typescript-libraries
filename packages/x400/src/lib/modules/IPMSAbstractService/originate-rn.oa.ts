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
    originate_rn_ArgumentType,
    _decode_originate_rn_ArgumentType,
    _encode_originate_rn_ArgumentType,
} from '../IPMSAbstractService/originate-rn-ArgumentType.ta';
export {
    originate_rn_ArgumentType,
    _decode_originate_rn_ArgumentType,
    _encode_originate_rn_ArgumentType,
} from '../IPMSAbstractService/originate-rn-ArgumentType.ta';
import {
    originate_rn_ResultType,
    _decode_originate_rn_ResultType,
    _encode_originate_rn_ResultType,
} from '../IPMSAbstractService/originate-rn-ResultType.ta';
export {
    originate_rn_ResultType,
    _decode_originate_rn_ResultType,
    _encode_originate_rn_ResultType,
} from '../IPMSAbstractService/originate-rn-ResultType.ta';
import { subscription_error } from '../IPMSAbstractService/subscription-error.oa';
export { subscription_error } from '../IPMSAbstractService/subscription-error.oa';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa';
export { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';
export { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca';

/* START_OF_SYMBOL_DEFINITION originate_rn */
/**
 * @summary originate_rn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-rn ABSTRACT-OPERATION ::= {
 *   ARGUMENT  SET {envelope  [0]  MessageSubmissionEnvelope,
 *                  content   [1]  RN}
 *   RESULT
 *     SET {submission-identifier  [0]  MessageSubmissionIdentifier,
 *          submission-time        [1]  MessageSubmissionTime}
 *   ERRORS    {subscription-error | recipient-improperly-specified}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<originate_rn_ArgumentType, originate_rn_ResultType>}
 * @implements {ABSTRACT_OPERATION<originate_rn_ArgumentType, originate_rn_ResultType>}
 */
export const originate_rn: ABSTRACT_OPERATION<
    originate_rn_ArgumentType,
    originate_rn_ResultType
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_originate_rn_ArgumentType,
        '&ResultType': _decode_originate_rn_ResultType,
    },
    encoderFor: {
        '&ArgumentType': _encode_originate_rn_ArgumentType,
        '&ResultType': _encode_originate_rn_ResultType,
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
/* END_OF_SYMBOL_DEFINITION originate_rn */

/* eslint-enable */
