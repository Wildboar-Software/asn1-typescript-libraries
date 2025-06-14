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
    ServiceErrorParameter,
    _decode_ServiceErrorParameter,
    _encode_ServiceErrorParameter,
} from '../MSAbstractService/ServiceErrorParameter.ta.mjs';
import { err_service_error } from '../MSAccessProtocol/err-service-error.va.mjs';
import { ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/* START_OF_SYMBOL_DEFINITION service_error */
/**
 * @summary service_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * service-error ABSTRACT-ERROR ::= {
 *   PARAMETER  ServiceErrorParameter
 *   CODE       err-service-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<ServiceErrorParameter>}
 * @implements {ABSTRACT_ERROR<ServiceErrorParameter>}
 */
export const service_error: ABSTRACT_ERROR<ServiceErrorParameter> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_ServiceErrorParameter,
    },
    encoderFor: {
        '&ParameterType': _encode_ServiceErrorParameter,
    },
    '&errorCode': err_service_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION service_error */

/* eslint-enable */
