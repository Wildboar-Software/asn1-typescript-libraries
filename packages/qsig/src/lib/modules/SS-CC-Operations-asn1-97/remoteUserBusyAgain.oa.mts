/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary remoteUserBusyAgain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteUserBusyAgain ERROR ::= { CODE local: 1012 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const remoteUserBusyAgain: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1012 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
