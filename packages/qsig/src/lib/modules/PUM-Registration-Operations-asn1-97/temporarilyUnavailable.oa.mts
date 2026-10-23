/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary temporarilyUnavailable
 * @description
 *
 * ROSE local CODE 1000. No parameter (ECMA-282 §6.3.1). The previous Visitor
 * PINX returns this on `pumDelReg` when the VDB is temporarily unavailable
 * (§6.5.5.2, §6.6.1.2). A Visitor PINX also returns it to a Remote PINX when
 * timer T1 expires during remote registration (§6.5.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
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
