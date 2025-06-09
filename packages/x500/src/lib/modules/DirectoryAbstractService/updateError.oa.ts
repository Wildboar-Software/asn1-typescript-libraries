/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
import { id_errcode_updateError } from "../CommonProtocolSpecification/id-errcode-updateError.va.js";
import {
    UpdateErrorData,
    _decode_UpdateErrorData,
    _encode_UpdateErrorData,
} from "../DirectoryAbstractService/UpdateErrorData.ta.js";
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
export { id_errcode_updateError } from "../CommonProtocolSpecification/id-errcode-updateError.va.js";
export {
    UpdateErrorData,
    _decode_UpdateErrorData,
    _encode_UpdateErrorData,
} from "../DirectoryAbstractService/UpdateErrorData.ta.js";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.js";

/* START_OF_SYMBOL_DEFINITION updateError */
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
/* END_OF_SYMBOL_DEFINITION updateError */

/* eslint-enable */
