/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import { id_errcode_nameError } from "../CommonProtocolSpecification/id-errcode-nameError.va.mjs";
import {
    NameErrorData,
    _decode_NameErrorData,
    _encode_NameErrorData,
} from "../DirectoryAbstractService/NameErrorData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary nameError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameError ERROR ::= {
 *   PARAMETER     OPTIONALLY-PROTECTED { NameErrorData }
 *   CODE          id-errcode-nameError }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<NameErrorData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<NameErrorData>>}
 */
export const nameError: ERROR<OPTIONALLY_PROTECTED<NameErrorData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<NameErrorData>(
            _decode_NameErrorData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<NameErrorData>(
            _encode_NameErrorData
        ),
    },
    "&errorCode": id_errcode_nameError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
