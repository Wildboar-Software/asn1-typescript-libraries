/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary mCMModeNotProvided
 * @description
 *
 * Error on `mCMService` and `mCMInterrogate` (ECMA-347
 * §6.3.1). Local code 1037. No parameter.
 *
 * §6.5.1.2.1 requires a return error for an invalid
 * activation, deactivation, or interrogation, for example a
 * Message Type the service provider does not provide. It
 * does not say when this error is chosen rather than
 * `unspecified` or an imported general error. The
 * identifier says the mode is not provided; the procedure
 * does not use that wording.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMModeNotProvided ERROR ::= { CODE local 1037 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const mCMModeNotProvided: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1037 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
