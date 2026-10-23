/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PathRetainArg, _decode_PathRetainArg, _encode_PathRetainArg } from "../Do-Not-Disturb-Operations-asn1-97/PathRetainArg.ta.mjs";

/**
 * @summary pathRetain
 * @description
 *
 * Ask the Terminating PINX to retain the network connection if it
 * meets the conditions for one or more listed supplementary services
 * (ECMA-194 Annex A §A.1, §A.5.1). Sent in SETUP. No result. For
 * SS-DNDO, a `dndo-low`, `dndo-medium`, or `dndo-high` bit asks for
 * retention when DNDPL is strictly less than the DNDOCL selected by
 * that bit (§6.6.1.1). Other bits request retention for other
 * supplementary services (§A.3.1). ROSE local CODE 41. The
 * Interpretation APDU is `discardAnyUnrecognisedInvokePdu`; NFE
 * `destinationEntity` is `endPINX` (§A.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathRetain OPERATION ::= {
 *     ARGUMENT PathRetainArg -- this operation may be used by other
 *     -- Supplementary Services using other
 *     -- values of the argument
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 41
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PathRetainArg>}
 * @implements {OPERATION<PathRetainArg>}
 */
export
const pathRetain: OPERATION<PathRetainArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PathRetainArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_PathRetainArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 41 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
