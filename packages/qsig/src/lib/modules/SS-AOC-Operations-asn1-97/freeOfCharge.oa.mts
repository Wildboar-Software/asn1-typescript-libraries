/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary freeOfCharge
 * @description
 *
 * `chargeRequest` error, local code 1016, with no parameter. A Terminating PINX
 * returns it for a `chargeRequest` received in SETUP (the error goes in
 * CONNECT) or in FACILITY (ECMA-212 §6.6.4.2). The Outgoing Gateway may return
 * it when the accounting function rejects the request (§6.6.2.2). This error is
 * distinct from the `freeOfCharge` alternatives inside rate and recorded-charge
 * values.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * freeOfCharge ERROR ::= { CODE local: 1016 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const freeOfCharge: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1016 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
