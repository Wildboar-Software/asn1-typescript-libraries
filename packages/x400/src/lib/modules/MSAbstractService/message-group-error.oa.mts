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
    MessageGroupErrorParameter,
    _decode_MessageGroupErrorParameter,
    _encode_MessageGroupErrorParameter,
} from '../MSAbstractService/MessageGroupErrorParameter.ta.mjs';
import { err_message_group_error } from '../MSAccessProtocol/err-message-group-error.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary message_group_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-group-error ABSTRACT-ERROR ::= {
 *   PARAMETER  MessageGroupErrorParameter
 *   CODE       err-message-group-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<MessageGroupErrorParameter>}
 * @implements {ABSTRACT_ERROR<MessageGroupErrorParameter>}
 */
export const message_group_error: ABSTRACT_ERROR<MessageGroupErrorParameter> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_MessageGroupErrorParameter,
    },
    encoderFor: {
        '&ParameterType': _encode_MessageGroupErrorParameter,
    },
    '&errorCode': err_message_group_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
