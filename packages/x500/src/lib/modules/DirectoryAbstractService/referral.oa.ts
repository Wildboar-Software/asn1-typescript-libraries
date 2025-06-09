/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
import { id_errcode_referral } from "../CommonProtocolSpecification/id-errcode-referral.va.js";
import {
    ReferralData,
    _decode_ReferralData,
    _encode_ReferralData,
} from "../DirectoryAbstractService/ReferralData.ta.js";
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
export { id_errcode_referral } from "../CommonProtocolSpecification/id-errcode-referral.va.js";
export {
    ReferralData,
    _decode_ReferralData,
    _encode_ReferralData,
} from "../DirectoryAbstractService/ReferralData.ta.js";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.js";

/* START_OF_SYMBOL_DEFINITION referral */
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
/* END_OF_SYMBOL_DEFINITION referral */

/* eslint-enable */
