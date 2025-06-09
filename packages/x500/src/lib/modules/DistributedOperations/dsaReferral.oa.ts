/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
import { id_errcode_dsaReferral } from "../CommonProtocolSpecification/id-errcode-dsaReferral.va.js";
import {
    DsaReferralData,
    _decode_DsaReferralData,
    _encode_DsaReferralData,
} from "../DistributedOperations/DsaReferralData.ta.js";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_errcode_dsaReferral } from "../CommonProtocolSpecification/id-errcode-dsaReferral.va.js";
export {
    DsaReferralData,
    _decode_DsaReferralData,
    _encode_DsaReferralData,
} from "../DistributedOperations/DsaReferralData.ta.js";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.js";

/* START_OF_SYMBOL_DEFINITION dsaReferral */
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
/* END_OF_SYMBOL_DEFINITION dsaReferral */

/* eslint-enable */
