/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary criteriaTemporarilyUnachievable
 * @description
 *
 * ROSE local 1003. Requested special criteria for the new connection
 * cannot be met because the resources are temporarily unavailable. A
 * later attempt can succeed. The criteria are not carried in the
 * ANF-PR arguments. ECMA-176 §6.1, §6.3.1, §6.5.1.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * criteriaTemporarilyUnachievable ERROR ::= { CODE local: 1003 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const criteriaTemporarilyUnachievable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1003 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
