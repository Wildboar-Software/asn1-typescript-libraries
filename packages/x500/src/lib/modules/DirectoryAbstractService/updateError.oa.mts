/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import { id_errcode_updateError } from "../CommonProtocolSpecification/id-errcode-updateError.va.mjs";
import {
    UpdateErrorData,
    _decode_UpdateErrorData,
    _encode_UpdateErrorData,
} from "../DirectoryAbstractService/UpdateErrorData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary updateError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * updateError ERROR ::= {
 *   PARAMETER   OPTIONALLY-PROTECTED { UpdateErrorData }
 *   CODE        id-errcode-updateError }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<UpdateErrorData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<UpdateErrorData>>}
 */
export const updateError: ERROR<OPTIONALLY_PROTECTED<UpdateErrorData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<UpdateErrorData>(
            _decode_UpdateErrorData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<UpdateErrorData>(
            _encode_UpdateErrorData
        ),
    },
    "&errorCode": id_errcode_updateError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
