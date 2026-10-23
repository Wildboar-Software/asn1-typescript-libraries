/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary invalidMsgCentreId
 * @description
 *
 * Error on `mWIInterrogate` only, local code 1018, with no parameter (ECMA-242
 * §6.3.1). §6.5.1.2.2 requires a return error when the received Message Centre
 * identifier is incorrect, and does not name this error.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * invalidMsgCentreId ERROR ::= { CODE local: 1018 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const invalidMsgCentreId: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1018 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
