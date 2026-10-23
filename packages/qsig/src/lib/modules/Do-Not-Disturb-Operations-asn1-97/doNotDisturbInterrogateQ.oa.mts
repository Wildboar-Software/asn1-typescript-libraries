/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DNDInterrogateArg, _decode_DNDInterrogateArg, _encode_DNDInterrogateArg } from "../Do-Not-Disturb-Operations-asn1-97/DNDInterrogateArg.ta.mjs";
import { DNDInterrogateRes, _decode_DNDInterrogateRes, _encode_DNDInterrogateRes } from "../Do-Not-Disturb-Operations-asn1-97/DNDInterrogateRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { temporarilyUnavailable } from "../Do-Not-Disturb-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { unspecified } from "../Do-Not-Disturb-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary doNotDisturbInterrogateQ
 * @description
 *
 * Remote interrogation of SS-DND (ECMA-194 §6.5.5, §6.5.6.1.3).
 * Call-independent. The Interrogating PINX runs timer T3 (>= 15 s,
 * §6.11.3) in state DND-iWait. A valid request is answered with the
 * basic services for which SS-DND is active, and optionally each
 * DNDPL (ECMA-193 §6.2.2.1.3, §8.2.1.8). ROSE local CODE 37. The
 * Interpretation APDU is omitted; NFE `destinationEntity` is
 * `endPINX` (§6.3.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * doNotDisturbInterrogateQ OPERATION ::= {
 *     ARGUMENT DNDInterrogateArg
 *     RESULT DNDInterrogateRes
 *     ERRORS {
 *         userNotSubscribed
 *         | notAvailable
 *         | invalidServedUserNr
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | unspecified
 *     }
 *     CODE local: 37
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DNDInterrogateArg, DNDInterrogateRes>}
 * @implements {OPERATION<DNDInterrogateArg, DNDInterrogateRes>}
 */
export
const doNotDisturbInterrogateQ: OPERATION<DNDInterrogateArg, DNDInterrogateRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DNDInterrogateArg,
        "&ResultType": _decode_DNDInterrogateRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DNDInterrogateArg,
        "&ResultType": _encode_DNDInterrogateRes,
    },
    "&Errors": [ userNotSubscribed, notAvailable, invalidServedUserNr, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 37 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
