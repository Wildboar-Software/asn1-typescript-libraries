/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary criteriaPermanentlyUnachievable
 * @description
 *
 * ROSE local 1002. Requested special criteria for the new connection
 * cannot be met because the resources are permanently unavailable.
 * Those criteria are not carried in the ANF-PR arguments; ECMA-175
 * Annex A gives examples. ECMA-176 §6.1, §6.3.1, §6.5.1.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-175/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * criteriaPermanentlyUnachievable ERROR ::= { CODE local: 1002 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const criteriaPermanentlyUnachievable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1002 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
