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
