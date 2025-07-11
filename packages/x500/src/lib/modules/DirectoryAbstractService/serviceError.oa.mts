/* eslint-disable */
import { type ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import { id_errcode_serviceError } from "../CommonProtocolSpecification/id-errcode-serviceError.va.mjs";
import {
    ServiceErrorData,
    _decode_ServiceErrorData,
    _encode_ServiceErrorData,
} from "../DirectoryAbstractService/ServiceErrorData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary serviceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceError ERROR ::= {
 *   PARAMETER   OPTIONALLY-PROTECTED { ServiceErrorData }
 *   CODE        id-errcode-serviceError }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<ServiceErrorData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<ServiceErrorData>>}
 */
export const serviceError: ERROR<OPTIONALLY_PROTECTED<ServiceErrorData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<ServiceErrorData>(
            _decode_ServiceErrorData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<ServiceErrorData>(
            _encode_ServiceErrorData
        ),
    },
    "&errorCode": id_errcode_serviceError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
