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
 * Name the mailbox the following information belongs to
 * (ECMA-347 §7.5.1.1.2). The Message Centre PINX sends this
 * from MID-MC-idle, for example when the Served User has
 * more than one mailbox (§7.1). Local code 120.
 *
 * The invoke carries the Served User address, the Message
 * Centre identity, and the mailbox identifier (for example
 * its name). Message Type and Served User name are
 * optional. Timer T1 (at least 15 s, §7.9.1) runs in
 * MID-MC-wait. §7.5.1.1.2 writes "Server User" once; the
 * rest of the Standard says Served User.
 *
 * The Served User PINX returns `MIDDummyRes`, may tell the
 * user, and stays in MID-SU-idle (§7.5.2.1.2). An invalid
 * mailbox identifier is an example of a return error
 * (§7.5.2.2.2). On a return error or T1 expiry the Message
 * Centre PINX returns to MID-MC-idle. T1 expiry also
 * releases the call-independent connection unless it is
 * still required (§7.5.1.2.2).
 *
 * Errors: `userNotSubscribed`, `invalidServedUserNr`,
 * `invalidMailbox`, `unspecified`. The procedure does not
 * assign these codes to particular failures.
 *
 * In Message Centre Access profile 3, after the return
 * result the SS-MCM APDUs for that mailbox are sent, and a
 * different mailbox needs a new invoke first (ECMA-345
 * §7.3.2). On a return error or reject, `mCMNewMsg`,
 * `mCMNoNewMsg`, `mCMUpdate`, and `mCMailboxFull` may still
 * be sent (ECMA-347 §6.8.40).
 *
 * NFE destination `endPINX`. Interpretation APDU omitted or
 * `rejectAnyUnrecognizedInvokePdu` (§7.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-345/
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
