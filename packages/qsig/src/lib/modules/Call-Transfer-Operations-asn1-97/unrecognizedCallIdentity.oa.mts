/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unrecognizedCallIdentity
 * @description
 *
 * ROSE local 1005. The new connection could not be associated with an
 * SS-CT entity at the Secondary PINX. That PINX may send it in
 * DISCONNECT with cause 29 ("facility rejected") when the SETUP's
 * `callIdentity` matches no entity in CT-Await-Setup. The Primary PINX
 * relays a received `callTransferSetup` error, including this one, in
 * the `callTransferInitiate` return error. §6.5.3.4 forbids it on
 * `callTransferIdentify`. ECMA-178 §6.3.1, §6.5.2.4, §6.5.3.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unrecognizedCallIdentity ERROR ::= { CODE local: 1005 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const unrecognizedCallIdentity: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1005 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
