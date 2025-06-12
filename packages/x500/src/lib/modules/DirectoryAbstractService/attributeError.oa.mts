/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import { id_errcode_attributeError } from "../CommonProtocolSpecification/id-errcode-attributeError.va.mjs";
import {
    AttributeErrorData,
    _decode_AttributeErrorData,
    _encode_AttributeErrorData,
} from "../DirectoryAbstractService/AttributeErrorData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.mjs";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
export { id_errcode_attributeError } from "../CommonProtocolSpecification/id-errcode-attributeError.va.mjs";
export {
    AttributeErrorData,
    _decode_AttributeErrorData,
    _encode_AttributeErrorData,
} from "../DirectoryAbstractService/AttributeErrorData.ta.mjs";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";

/* START_OF_SYMBOL_DEFINITION attributeError */
/**
 * @summary attributeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeError ERROR ::= {
 *   PARAMETER     OPTIONALLY-PROTECTED { AttributeErrorData }
 *   CODE          id-errcode-attributeError }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<AttributeErrorData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<AttributeErrorData>>}
 */
export const attributeError: ERROR<OPTIONALLY_PROTECTED<AttributeErrorData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<AttributeErrorData>(
            _decode_AttributeErrorData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<AttributeErrorData>(
            _encode_AttributeErrorData
        ),
    },
    "&errorCode": id_errcode_attributeError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeError */

/* eslint-enable */
