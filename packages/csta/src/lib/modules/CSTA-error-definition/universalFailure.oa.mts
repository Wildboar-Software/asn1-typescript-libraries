/* eslint-disable */





import { UniversalFailure, _decode_UniversalFailure, _encode_UniversalFailure } from "../CSTA-error-definition/UniversalFailure.ta.mjs";

import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary universalFailure
 * @description
 *
 * ROSE ERROR with local code 1. Parameter is `UniversalFailure`. Used as the
 * ERRORS set of almost all CSTA operations. ECMA-269 §9.3, §12.2.14; ECMA-285
 * §9.19.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * universalFailure ERROR ::= {    PARAMETER     UniversalFailure
 *     CODE         local:1 }
 * ```
 * 
 * @constant
 * @type {ERROR<UniversalFailure>}
 * @implements {ERROR<UniversalFailure>}
 */
export
const universalFailure: ERROR<UniversalFailure> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UniversalFailure,
    },
    encoderFor: {
        "&ParameterType": _encode_UniversalFailure,
    },
    "&errorCode": { local: 1 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
