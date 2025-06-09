/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
import { id_errcode_shadowError } from "../CommonProtocolSpecification/id-errcode-shadowError.va.js";
import {
    ShadowErrorData,
    _decode_ShadowErrorData,
    _encode_ShadowErrorData,
} from "../DirectoryShadowAbstractService/ShadowErrorData.ta.js";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_errcode_shadowError } from "../CommonProtocolSpecification/id-errcode-shadowError.va.js";
export {
    ShadowErrorData,
    _decode_ShadowErrorData,
    _encode_ShadowErrorData,
} from "../DirectoryShadowAbstractService/ShadowErrorData.ta.js";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.js";

/* START_OF_SYMBOL_DEFINITION shadowError */
/**
 * @summary shadowError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED-SEQ { ShadowErrorData }
 *   CODE                               id-errcode-shadowError }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED_SEQ<ShadowErrorData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED_SEQ<ShadowErrorData>>}
 */
export const shadowError: ERROR<OPTIONALLY_PROTECTED_SEQ<ShadowErrorData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ShadowErrorData>(
            _decode_ShadowErrorData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ShadowErrorData>(
            _encode_ShadowErrorData
        ),
    },
    "&errorCode": id_errcode_shadowError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shadowError */

/* eslint-enable */
