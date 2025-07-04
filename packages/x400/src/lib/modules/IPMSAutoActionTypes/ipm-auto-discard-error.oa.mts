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
    ipm_auto_discard_error_ParameterType,
    _decode_ipm_auto_discard_error_ParameterType,
    _encode_ipm_auto_discard_error_ParameterType,
} from '../IPMSAutoActionTypes/ipm-auto-discard-error-ParameterType.ta.mjs';
import { id_aae_auto_discard_error } from '../IPMSObjectIdentifiers/id-aae-auto-discard-error.va.mjs';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
/**
 * @summary ipm_auto_discard_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-auto-discard-error AUTO-ACTION-ERROR ::= {
 *   PARAMETER  SET {problem  [0]  AutoDiscardProblem}
 *   CODE       global:id-aae-auto-discard-error
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR<ipm_auto_discard_error_ParameterType>}
 * @implements {AUTO_ACTION_ERROR<ipm_auto_discard_error_ParameterType>}
 */
export const ipm_auto_discard_error: AUTO_ACTION_ERROR<ipm_auto_discard_error_ParameterType> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_ipm_auto_discard_error_ParameterType,
    },
    encoderFor: {
        '&ParameterType': _encode_ipm_auto_discard_error_ParameterType,
    },
    '&errorCode': {
        global: id_aae_auto_discard_error,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
