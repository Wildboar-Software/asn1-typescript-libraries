/* eslint-disable */
import { type ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import { id_errcode_referral } from "../CommonProtocolSpecification/id-errcode-referral.va.mjs";
import {
    ReferralData,
    _decode_ReferralData,
    _encode_ReferralData,
} from "../DirectoryAbstractService/ReferralData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary referral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * referral ERROR ::= { -- not literally an "error"
 *   PARAMETER      OPTIONALLY-PROTECTED { ReferralData }
 *   CODE           id-errcode-referral }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<ReferralData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<ReferralData>>}
 */
export const referral: ERROR<OPTIONALLY_PROTECTED<ReferralData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<ReferralData>(
            _decode_ReferralData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<ReferralData>(
            _encode_ReferralData
        ),
    },
    "&errorCode": id_errcode_referral /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
