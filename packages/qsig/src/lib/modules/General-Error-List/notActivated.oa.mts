/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notActivated
 * @description
 *
 * Bound here as local value 46 because QSIG services import `notActivated` from
 * General-Error-List. ITU-T Q.950 (06/2000) §5.1.3 does not export it. §5.1.4
 * defines the same local value as a service-specific error: an indication of a
 * call-diversion failure because the supplementary service has not been
 * activated, used by Q.950 for diversion services. ECMA-165 Annex J §J.2 only
 * names the module. A QSIG service that imports this error states its own
 * condition for returning it; that condition is not defined here.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 * @see https://www.itu.int/rec/T-REC-Q.950/en
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notActivated ERROR ::= { CODE local: 46 }
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
    "&errorCode": { local: 46 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
