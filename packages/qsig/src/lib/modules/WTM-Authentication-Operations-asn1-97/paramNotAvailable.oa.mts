/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary paramNotAvailable
 * @description
 *
 * Local error code 1017, with no parameter (ECMA-306 §6.3.1). The
 * Authentication Server PINX returns it when authentication parameters are not
 * available (§6.5.7.2, §7.5.3.2). The Home PINX also returns it for
 * `getWtatParam` when a fetch fails other than by timeout (§6.5.2.2), and for
 * `getWtanParam` when the Authentication Server PINX rejects (§7.5.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * paramNotAvailable ERROR ::= { CODE local: 1017 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const paramNotAvailable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1017 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
