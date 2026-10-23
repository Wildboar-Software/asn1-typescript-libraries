/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary shortTermRejection
 * @description
 *
 * Transient rejection of `ccbsRequest` or `ccnrRequest` (ECMA-186
 * §6.5.3.2.1). The examples given are a duplicate CC Request and an
 * excess of active CC Requests. The Terminating PINX sends it in
 * RELEASE with cause 16. Local code 1010.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortTermRejection ERROR ::= { CODE local: 1010 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const shortTermRejection: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1010 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
