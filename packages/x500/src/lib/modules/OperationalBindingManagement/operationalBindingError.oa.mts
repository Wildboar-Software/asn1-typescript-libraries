/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
import { id_err_operationalBindingError } from "../CommonProtocolSpecification/id-err-operationalBindingError.va.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import {
    OpBindingErrorParam,
    _decode_OpBindingErrorParam,
    _encode_OpBindingErrorParam,
} from "../OperationalBindingManagement/OpBindingErrorParam.ta.mjs";
/* START_OF_SYMBOL_DEFINITION operationalBindingError */
/**
 * @summary operationalBindingError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalBindingError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED-SEQ  {OpBindingErrorParam}
 *   CODE      id-err-operationalBindingError }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED_SEQ<OpBindingErrorParam>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED_SEQ<OpBindingErrorParam>>}
 */
export const operationalBindingError: ERROR<
    OPTIONALLY_PROTECTED_SEQ<OpBindingErrorParam>
> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<OpBindingErrorParam>(
            _decode_OpBindingErrorParam
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<OpBindingErrorParam>(
            _encode_OpBindingErrorParam
        ),
    },
    "&errorCode": id_err_operationalBindingError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION operationalBindingError */

/* eslint-enable */
