/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary temporarilyUnavailable
 * @description
 *
 * Local error code 1000, with no parameter (ECMA-306 §6.3.1). The Visitor PINX
 * returns it when the WTM user does not answer an SS-WTAT request (§6.5.5.2).
 * The Home PINX returns it for `getWtatParam` when the parameter fetch times
 * out (§6.5.2.2), and for `getWtanParam` when timer T5 expires (§7.5.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * temporarilyUnavailable ERROR ::= { CODE local: 1000 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const temporarilyUnavailable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1000 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
