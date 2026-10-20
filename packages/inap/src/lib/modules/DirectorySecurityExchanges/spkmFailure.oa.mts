/* eslint-disable */
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../Notation/Identifier.ta.mjs";
import { SPKM_ERROR, _decode_SPKM_ERROR, _encode_SPKM_ERROR } from "../SpkmGssTokens/SPKM-ERROR.ta.mjs";
// export { SPKM_ERROR, _decode_SPKM_ERROR, _encode_SPKM_ERROR } from "../SpkmGssTokens/SPKM-ERROR.ta.mjs";
import { type SE_ERROR } from "../Notation/SE-ERROR.oca.mjs";


/**
 * @summary spkmFailure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * spkmFailure SE-ERROR ::= {PARAMETER SPKM-ERROR ERROR-CODE  local:1
 * }
 * ```
 * 
 * @constant
 * @type {SE_ERROR<SPKM_ERROR>}
 * @implements {SE_ERROR<SPKM_ERROR>}
 */
export
const spkmFailure: SE_ERROR<SPKM_ERROR> = {
    class: "SE-ERROR",
    decoderFor: {
        "&ParameterType": _decode_SPKM_ERROR,
    },
    encoderFor: {
        "&ParameterType": _encode_SPKM_ERROR,
    },
    "&errorCode": { local: 1 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
