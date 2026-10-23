/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary diversionToServedUserNr
 * @description
 *
 * Diverted-to number is the served user's own number. ROSE local code 15. No
 * parameter. Allowed on `activateDiversionQ` and `callRerouteing`, not on
 * `checkRestriction` (ECMA-174 §6.3.1). Stage 1 lists this as an activation
 * failure (ECMA-173 §6.2.3.1). The protocol procedures do not name this code.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * diversionToServedUserNr ERROR ::= { CODE local: 15 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const diversionToServedUserNr: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 15 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
