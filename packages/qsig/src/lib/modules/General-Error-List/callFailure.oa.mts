/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary callFailure
 * @description
 *
 * ITU-T Q.950 (06/2000) §5.1.3 general error, local value 25. The requested
 * supplementary service could not be executed because the basic call failed.
 * ECMA-165 Annex J §J.2 names this module and does not say when the error is
 * returned. The supplementary service that lists the error does.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 * @see https://www.itu.int/rec/T-REC-Q.950/en
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callFailure ERROR ::= {CODE  local:25
 * }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const callFailure: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 25 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
