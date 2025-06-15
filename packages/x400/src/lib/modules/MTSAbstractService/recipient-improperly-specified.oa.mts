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
    ImproperlySpecifiedRecipients,
    _decode_ImproperlySpecifiedRecipients,
    _encode_ImproperlySpecifiedRecipients,
} from '../MTSAbstractService/ImproperlySpecifiedRecipients.ta.mjs';
import { err_recipient_improperly_specified } from '../MTSAccessProtocol/err-recipient-improperly-specified.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary recipient_improperly_specified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * recipient-improperly-specified ABSTRACT-ERROR ::= {
 *   PARAMETER  ImproperlySpecifiedRecipients
 *   CODE       err-recipient-improperly-specified
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<ImproperlySpecifiedRecipients>}
 * @implements {ABSTRACT_ERROR<ImproperlySpecifiedRecipients>}
 */
export const recipient_improperly_specified: ABSTRACT_ERROR<ImproperlySpecifiedRecipients> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_ImproperlySpecifiedRecipients,
    },
    encoderFor: {
        '&ParameterType': _encode_ImproperlySpecifiedRecipients,
    },
    '&errorCode': err_recipient_improperly_specified /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
