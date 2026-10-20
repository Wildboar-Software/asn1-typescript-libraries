/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MIDMailboxIDArg, _decode_MIDMailboxIDArg, _encode_MIDMailboxIDArg } from "../SS-MID-Operations-asn1-97/MIDMailboxIDArg.ta.mjs";
import { MIDDummyRes, _decode_MIDDummyRes, _encode_MIDDummyRes } from "../SS-MID-Operations-asn1-97/MIDDummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { invalidMailbox } from "../SS-MID-Operations-asn1-97/invalidMailbox.oa.mjs";
import { unspecified } from "../SS-MID-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mIDMailboxID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mIDMailboxID OPERATION ::= {
 *     ARGUMENT MIDMailboxIDArg
 *     RESULT MIDDummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | invalidMailbox
 *         | unspecified
 *     }
 *     CODE local 120
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MIDMailboxIDArg, MIDDummyRes>}
 * @implements {OPERATION<MIDMailboxIDArg, MIDDummyRes>}
 */
export
const mIDMailboxID: OPERATION<MIDMailboxIDArg, MIDDummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MIDMailboxIDArg,
        "&ResultType": _decode_MIDDummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MIDMailboxIDArg,
        "&ResultType": _encode_MIDDummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, invalidMailbox, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 120 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
