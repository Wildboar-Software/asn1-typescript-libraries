/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DNDActivateArg, _decode_DNDActivateArg, _encode_DNDActivateArg } from "../Do-Not-Disturb-Operations-asn1-97/DNDActivateArg.ta.mjs";
// export { DNDActivateArg, _decode_DNDActivateArg, _encode_DNDActivateArg } from "../Do-Not-Disturb-Operations-asn1-97/DNDActivateArg.ta.mjs";
import { DNDActivateRes, _decode_DNDActivateRes, _encode_DNDActivateRes } from "../Do-Not-Disturb-Operations-asn1-97/DNDActivateRes.ta.mjs";
// export { DNDActivateRes, _decode_DNDActivateRes, _encode_DNDActivateRes } from "../Do-Not-Disturb-Operations-asn1-97/DNDActivateRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
// export { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
// export { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { temporarilyUnavailable } from "../Do-Not-Disturb-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../Do-Not-Disturb-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { unspecified } from "../Do-Not-Disturb-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Do-Not-Disturb-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary doNotDisturbActivateQ
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * doNotDisturbActivateQ OPERATION ::= {
 *     ARGUMENT DNDActivateArg
 *     RESULT DNDActivateRes
 *     ERRORS {
 *         userNotSubscribed
 *         | notAvailable
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | unspecified
 *     }
 *     CODE local: 35
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DNDActivateArg, DNDActivateRes>}
 * @implements {OPERATION<DNDActivateArg, DNDActivateRes>}
 */
export
const doNotDisturbActivateQ: OPERATION<DNDActivateArg, DNDActivateRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DNDActivateArg,
        "&ResultType": _decode_DNDActivateRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DNDActivateArg,
        "&ResultType": _encode_DNDActivateRes,
    },
    "&Errors": [ userNotSubscribed, notAvailable, invalidServedUserNr, basicServiceNotProvided, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 35 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
