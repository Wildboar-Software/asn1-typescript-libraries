/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary invalidDivertedToNr
 * @description
 *
 * Diverted-to number is not a valid PISN number. ROSE local code 12. No
 * parameter. Allowed on `activateDiversionQ`, `checkRestriction`, and
 * `callRerouteing` (ECMA-174 §6.3.1). Activation is rejected when the
 * diverted-to number is invalid (§6.5.3.2.1), and `checkRestriction` returns an
 * error when the Diverted-to PINX finds a restriction (§6.5.5.2.2). Stage 1
 * lists an invalid PISN number as an activation failure (ECMA-173 §6.2.3.1).
 * The protocol procedures say "appropriate error" and do not name this code.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * invalidDivertedToNr ERROR ::= { CODE local: 12 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const invalidDivertedToNr: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 12 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
