/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DNDDeactivateArg, _decode_DNDDeactivateArg, _encode_DNDDeactivateArg } from "../Do-Not-Disturb-Operations-asn1-97/DNDDeactivateArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Do-Not-Disturb-Operations-asn1-97/DummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notActivated } from "../Do-Not-Disturb-Operations-asn1-97/notActivated.oa.mjs";
import { temporarilyUnavailable } from "../Do-Not-Disturb-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { unspecified } from "../Do-Not-Disturb-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary doNotDisturbDeactivateQ
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * doNotDisturbDeactivateQ OPERATION ::= {
 *     ARGUMENT DNDDeactivateArg
 *     RESULT DummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | notAvailable
 *         | invalidServedUserNr
 *         | notActivated
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | unspecified
 *     }
 *     CODE local: 36
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DNDDeactivateArg, DummyRes>}
 * @implements {OPERATION<DNDDeactivateArg, DummyRes>}
 */
export
const doNotDisturbDeactivateQ: OPERATION<DNDDeactivateArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DNDDeactivateArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DNDDeactivateArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ userNotSubscribed, notAvailable, invalidServedUserNr, notActivated, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 36 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
