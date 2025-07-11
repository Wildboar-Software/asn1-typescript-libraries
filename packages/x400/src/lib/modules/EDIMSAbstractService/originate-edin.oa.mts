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
    originate_edin_ArgumentType,
    _decode_originate_edin_ArgumentType,
    _encode_originate_edin_ArgumentType,
} from '../EDIMSAbstractService/originate-edin-ArgumentType.ta.mjs';
import {
    originate_edin_ResultType,
    _decode_originate_edin_ResultType,
    _encode_originate_edin_ResultType,
} from '../EDIMSAbstractService/originate-edin-ResultType.ta.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { type ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/**
 * @summary originate_edin
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-edin ABSTRACT-OPERATION ::= {
 *   ARGUMENT  SET {envelope  [0]  MessageSubmissionEnvelope,
 *                  content   [1]  EDIN}
 *   RESULT
 *     SET {submission-identifier  [0]  MessageSubmissionIdentifier,
 *          submission-time        [1]  MessageSubmissionTime}
 *   ERRORS    {recipient-improperly-specified}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<originate_edin_ArgumentType, originate_edin_ResultType>}
 * @implements {ABSTRACT_OPERATION<originate_edin_ArgumentType, originate_edin_ResultType>}
 */
export const originate_edin: ABSTRACT_OPERATION<
    originate_edin_ArgumentType,
    originate_edin_ResultType
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_originate_edin_ArgumentType,
        '&ResultType': _decode_originate_edin_ResultType,
    },
    encoderFor: {
        '&ArgumentType': _encode_originate_edin_ArgumentType,
        '&ResultType': _encode_originate_edin_ResultType,
    },
    '&Errors': [recipient_improperly_specified] /* OBJECT_FIELD_SETTING */,
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
