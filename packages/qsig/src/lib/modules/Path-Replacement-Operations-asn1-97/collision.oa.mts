/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary collision
 * @description
 *
 * ROSE local 1001. Returned on `pathReplacePropose` when the receiving
 * PINX has itself already sent `pathReplacePropose` (state
 * PR-Req-Initiated). The state does not change, and the peer can
 * expect the same error in return. A note recommends a later attempt
 * after a random delay. ECMA-176 §6.3.1, §6.5.1.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * collision ERROR ::= { CODE local: 1001 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const collision: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1001 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
