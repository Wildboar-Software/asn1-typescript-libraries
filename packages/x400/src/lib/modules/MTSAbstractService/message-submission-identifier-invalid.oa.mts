/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import { err_message_submission_identifier_invalid } from '../MTSAccessProtocol/err-message-submission-identifier-invalid.va.mjs';
import { type ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary message_submission_identifier_invalid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-submission-identifier-invalid ABSTRACT-ERROR ::= {
 *   PARAMETER  NULL
 *   CODE       err-message-submission-identifier-invalid
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<NULL>}
 * @implements {ABSTRACT_ERROR<NULL>}
 */
export const message_submission_identifier_invalid: ABSTRACT_ERROR<NULL> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': $._decodeNull,
    },
    encoderFor: {
        '&ParameterType': $._encodeNull,
    },
    '&errorCode': err_message_submission_identifier_invalid /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
