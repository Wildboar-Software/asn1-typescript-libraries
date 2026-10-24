/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type PathRetainArg, _decode_PathRetainArg, _encode_PathRetainArg } from "../Call-Offer-Operations-asn1-97/PathRetainArg.ta.mjs";

/**
 * @summary pathRetain
 * @description
 *
 * Asks the Terminating PINX to retain the network connection if a
 * selected supplementary service becomes invokable (ECMA-192
 * Annex A). The Originating PINX sends the invoke in SETUP
 * (§A.5.1). No result. Local code 41. Other supplementary services
 * may reuse this operation with other argument values (§6.3.1).
 * NFE destination is the end PINX; the Interpretation APDU is
 * `discardAnyUnrecognisedInvokePdu` (§A.3.2). For SS-CO the
 * `callOffer` bit is set to ONE.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathRetain OPERATION ::= {
 *     ARGUMENT PathRetainArg
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
