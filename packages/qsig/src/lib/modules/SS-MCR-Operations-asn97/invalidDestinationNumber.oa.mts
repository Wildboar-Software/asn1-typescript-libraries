/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary invalidDestinationNumber
 * @description
 *
 * ROSE local CODE 1030 (ECMA-344 §6.3.1). No parameter. Listed on `mCRequest`
 * and `mCInform`.
 *
 * The procedures require an appropriate return error and never name this code.
 * That covers a request the Co-operating PINX will not perform, a busy
 * Co-operating User, a Co-operating User who rejects after prompting,
 * Requested-Call failure, and a busy Destination User (§6.5.2.2.2,
 * §6.5.3.2.2). §6.8.10 to §6.8.13 and §6.8.17 likewise say only "an
 * appropriate error" when forwarding, deflection, or do-not-disturb is not
 * overridden.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * invalidDestinationNumber ERROR ::= { CODE local: 1030 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const invalidDestinationNumber: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1030 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
