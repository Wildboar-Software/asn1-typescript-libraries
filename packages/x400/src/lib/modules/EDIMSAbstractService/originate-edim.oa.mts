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
    originate_edim_ArgumentType,
    _decode_originate_edim_ArgumentType,
    _encode_originate_edim_ArgumentType,
} from '../EDIMSAbstractService/originate-edim-ArgumentType.ta.mjs';
import {
    originate_edim_ResultType,
    _decode_originate_edim_ResultType,
    _encode_originate_edim_ResultType,
} from '../EDIMSAbstractService/originate-edim-ResultType.ta.mjs';
import { recipient_improperly_specified } from '../MTSAbstractService/recipient-improperly-specified.oa.mjs';
import { ABSTRACT_OPERATION } from '../MTSAbstractService/ABSTRACT-OPERATION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION originate_edim */
/**
 * @summary originate_edim
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originate-edim ABSTRACT-OPERATION ::= {
 *   ARGUMENT  SET {envelope  [0]  MessageSubmissionEnvelope,
 *                  content   [1]  EDIM}
 *   RESULT
 *     SET {submission-identifier  [0]  MessageSubmissionIdentifier,
 *          submission-time        [1]  MessageSubmissionTime}
 *   ERRORS    {recipient-improperly-specified}
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_OPERATION<originate_edim_ArgumentType, originate_edim_ResultType>}
 * @implements {ABSTRACT_OPERATION<originate_edim_ArgumentType, originate_edim_ResultType>}
 */
export const originate_edim: ABSTRACT_OPERATION<
    originate_edim_ArgumentType,
    originate_edim_ResultType
> = {
    class: 'OPERATION',
    decoderFor: {
        '&ArgumentType': _decode_originate_edim_ArgumentType,
        '&ResultType': _decode_originate_edim_ResultType,
    },
    encoderFor: {
        '&ArgumentType': _encode_originate_edim_ArgumentType,
        '&ResultType': _encode_originate_edim_ResultType,
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
/* END_OF_SYMBOL_DEFINITION originate_edim */

/* eslint-enable */
