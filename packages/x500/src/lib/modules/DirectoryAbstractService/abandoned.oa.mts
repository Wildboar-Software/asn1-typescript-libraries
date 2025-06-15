/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import { id_errcode_abandoned } from "../CommonProtocolSpecification/id-errcode-abandoned.va.mjs";
import {
    AbandonedData,
    _decode_AbandonedData,
    _encode_AbandonedData,
} from "../DirectoryAbstractService/AbandonedData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary abandoned
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * abandoned ERROR ::= {-- not literally an "error"
 *   PARAMETER     OPTIONALLY-PROTECTED { AbandonedData }
 *   CODE          id-errcode-abandoned }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<AbandonedData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<AbandonedData>>}
 */
export const abandoned: ERROR<OPTIONALLY_PROTECTED<AbandonedData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<AbandonedData>(
            _decode_AbandonedData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<AbandonedData>(
            _encode_AbandonedData
        ),
    },
    "&errorCode": id_errcode_abandoned /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
