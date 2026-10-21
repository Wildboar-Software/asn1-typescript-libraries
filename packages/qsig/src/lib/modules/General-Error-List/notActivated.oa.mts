/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notActivated
 * @description
 *
 * Imported by `MWI-Operations-asn1-97` from `General-Error-List`.
 * ITU-T Rec. Q.950 (06/1997) assigns local value 46. The 06/2000
 * module dropped this error; Q.950 (06/1997) is:
 *
 * ```
 * notActivated ERROR ::= 46
 * ```
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notActivated ERROR ::= { CODE local: 46 }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const notActivated: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 46 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
