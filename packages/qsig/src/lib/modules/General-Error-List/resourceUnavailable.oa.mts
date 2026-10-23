/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary resourceUnavailable
 * @description
 *
 * ITU-T Q.950 (06/2000) §5.1.3 general error, local value 11. The service
 * provider temporarily has no resource available for the requested service.
 * ECMA-165 Annex J §J.2 names this module and does not say when the error is
 * returned. The supplementary service that lists the error does.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 * @see https://www.itu.int/rec/T-REC-Q.950/en
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resourceUnavailable ERROR ::= {CODE  local:11
 * }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const resourceUnavailable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 11 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
