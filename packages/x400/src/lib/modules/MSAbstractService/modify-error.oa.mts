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
    ModifyErrorParameter,
    _decode_ModifyErrorParameter,
    _encode_ModifyErrorParameter,
} from '../MSAbstractService/ModifyErrorParameter.ta.mjs';
import { err_modify_error } from '../MSAccessProtocol/err-modify-error.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary modify_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modify-error ABSTRACT-ERROR ::= {
 *   PARAMETER  ModifyErrorParameter
 *   CODE       err-modify-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<ModifyErrorParameter>}
 * @implements {ABSTRACT_ERROR<ModifyErrorParameter>}
 */
export const modify_error: ABSTRACT_ERROR<ModifyErrorParameter> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_ModifyErrorParameter,
    },
    encoderFor: {
        '&ParameterType': _encode_ModifyErrorParameter,
    },
    '&errorCode': err_modify_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
