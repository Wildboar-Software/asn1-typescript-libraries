/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary establishmentFailure
 * @description
 *
 * ROSE local 1006. Establishment of the new connection failed and no
 * other error of Call-Transfer-Operations applies. The Primary PINX
 * returns it on `callTransferInitiate` when timer T4 expires or the
 * new connection clears without a `callTransferSetup` return error.
 * ECMA-178 §6.3.1, §6.5.2.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * establishmentFailure ERROR ::= { CODE local: 1006 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const establishmentFailure: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1006 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
