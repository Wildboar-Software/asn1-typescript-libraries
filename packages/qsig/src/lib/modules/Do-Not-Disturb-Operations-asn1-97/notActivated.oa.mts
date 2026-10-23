/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notActivated
 * @description
 *
 * SS-DND is not activated for the PISN number and basic service in
 * the deactivation request (ECMA-194 §6.5.6.2.2). Returned on
 * `doNotDisturbDeactivateQ`. ROSE local CODE 43. No parameter.
 * ECMA-194 gives no other use.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * notActivated ERROR ::= { CODE local: 43 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const notActivated: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 43 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
