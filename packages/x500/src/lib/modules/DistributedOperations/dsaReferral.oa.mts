/* eslint-disable */
import { type ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import { id_errcode_dsaReferral } from "../CommonProtocolSpecification/id-errcode-dsaReferral.va.mjs";
import {
    DsaReferralData,
    _decode_DsaReferralData,
    _encode_DsaReferralData,
} from "../DistributedOperations/DsaReferralData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary dsaReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dsaReferral ERROR ::= {
 *   PARAMETER           OPTIONALLY-PROTECTED { DsaReferralData }
 *   CODE                id-errcode-dsaReferral }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<DsaReferralData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<DsaReferralData>>}
 */
export const dsaReferral: ERROR<OPTIONALLY_PROTECTED<DsaReferralData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<DsaReferralData>(
            _decode_DsaReferralData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<DsaReferralData>(
            _encode_DsaReferralData
        ),
    },
    "&errorCode": id_errcode_dsaReferral /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
