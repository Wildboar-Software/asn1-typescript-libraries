/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary numberOfDiversionsExceeded
 * @description
 *
 * The diversion limit was exceeded on partial rerouteing. ROSE local code 24.
 * No parameter. Error of `callRerouteing` only, and the ASN.1 says it applies
 * only to partial rerouteing (ECMA-174 §6.3.1). The count of diversions is an
 * implementation option and includes every type of diversion (§6.1; ECMA-173
 * §6.2.3.3). If that limit is already exceeded, the Served User PINX does not
 * send `callRerouteing` (§6.5.3.2.5); that case is not this error. §6.6.1.3
 * allows a return error when the public ISDN rejects partial rerouteing,
 * without naming this code.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * numberOfDiversionsExceeded ERROR ::= { CODE local: 24 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const numberOfDiversionsExceeded: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 24 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
