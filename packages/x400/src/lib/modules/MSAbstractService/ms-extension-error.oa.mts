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
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import {
    MSExtensionErrorParameter,
    _decode_MSExtensionErrorParameter,
    _encode_MSExtensionErrorParameter,
} from '../MSAbstractService/MSExtensionErrorParameter.ta.mjs';
import { err_ms_extension_error } from '../MSAccessProtocol/err-ms-extension-error.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary ms_extension_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-extension-error ABSTRACT-ERROR ::= {
 *   PARAMETER  MSExtensionErrorParameter
 *   CODE       err-ms-extension-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<MSExtensionErrorParameter>}
 * @implements {ABSTRACT_ERROR<MSExtensionErrorParameter>}
 */
export const ms_extension_error: ABSTRACT_ERROR<MSExtensionErrorParameter> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_MSExtensionErrorParameter,
    },
    encoderFor: {
        '&ParameterType': _encode_MSExtensionErrorParameter,
    },
    '&errorCode': err_ms_extension_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
