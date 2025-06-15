/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import {
    DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
    _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
    _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1,
} from "../DirectoryAbstractService/DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary directoryBindError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryBindError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED {DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1}}
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1>>}
 */
export const directoryBindError: ERROR<
    OPTIONALLY_PROTECTED<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1>
> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1>(
            _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1>(
            _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1
        ),
    },
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
