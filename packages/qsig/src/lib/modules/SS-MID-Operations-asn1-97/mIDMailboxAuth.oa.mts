/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MIDMailboxAuthArg, _decode_MIDMailboxAuthArg, _encode_MIDMailboxAuthArg } from "../SS-MID-Operations-asn1-97/MIDMailboxAuthArg.ta.mjs";
// export { MIDMailboxAuthArg, _decode_MIDMailboxAuthArg, _encode_MIDMailboxAuthArg } from "../SS-MID-Operations-asn1-97/MIDMailboxAuthArg.ta.mjs";
import { MIDDummyRes, _decode_MIDDummyRes, _encode_MIDDummyRes } from "../SS-MID-Operations-asn1-97/MIDDummyRes.ta.mjs";
// export { MIDDummyRes, _decode_MIDDummyRes, _encode_MIDDummyRes } from "../SS-MID-Operations-asn1-97/MIDDummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
// export { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { invalidMailbox } from "../SS-MID-Operations-asn1-97/invalidMailbox.oa.mjs";
// export { invalidMailbox } from "../SS-MID-Operations-asn1-97/invalidMailbox.oa.mjs";
import { authorizationFailed } from "../SS-MID-Operations-asn1-97/authorizationFailed.oa.mjs";
// export { authorizationFailed } from "../SS-MID-Operations-asn1-97/authorizationFailed.oa.mjs";
import { unspecified } from "../SS-MID-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../SS-MID-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary mIDMailboxAuth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mIDMailboxAuth OPERATION ::= {
 *     ARGUMENT MIDMailboxAuthArg
 *     RESULT MIDDummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | invalidMailbox
 *         | authorizationFailed
 *         | unspecified
 *     }
 *     CODE local 119
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MIDMailboxAuthArg, MIDDummyRes>}
 * @implements {OPERATION<MIDMailboxAuthArg, MIDDummyRes>}
 */
export
const mIDMailboxAuth: OPERATION<MIDMailboxAuthArg, MIDDummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MIDMailboxAuthArg,
        "&ResultType": _decode_MIDDummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MIDMailboxAuthArg,
        "&ResultType": _encode_MIDDummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, invalidMailbox, authorizationFailed, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": local /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
