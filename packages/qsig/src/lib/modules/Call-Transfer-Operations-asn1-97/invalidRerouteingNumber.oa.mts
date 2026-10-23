/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary invalidRerouteingNumber
 * @description
 *
 * ROSE local 1004. The new connection was not established because
 * `rerouteingNumber` is not a valid PISN address. Listed on
 * `callTransferInitiate` and `callTransferSetup`. ECMA-178 §6.3.1.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * invalidRerouteingNumber ERROR ::= { CODE local: 1004 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const invalidRerouteingNumber: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1004 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
