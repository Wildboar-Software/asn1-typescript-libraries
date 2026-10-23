/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MIDMailboxAuthArg, _decode_MIDMailboxAuthArg, _encode_MIDMailboxAuthArg } from "../SS-MID-Operations-asn1-97/MIDMailboxAuthArg.ta.mjs";
import { MIDDummyRes, _decode_MIDDummyRes, _encode_MIDDummyRes } from "../SS-MID-Operations-asn1-97/MIDDummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { invalidMailbox } from "../SS-MID-Operations-asn1-97/invalidMailbox.oa.mjs";
import { authorizationFailed } from "../SS-MID-Operations-asn1-97/authorizationFailed.oa.mjs";
import { unspecified } from "../SS-MID-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mIDMailboxAuth
 * @description
 *
 * Authenticate the Served User at a mailbox (ECMA-347
 * §7.5.2.1.2). The Served User PINX sends this from
 * MID-SU-idle, starts timer T2 (at least 15 s, §7.9.2), and
 * waits in MID-SU-wait. Local code 119.
 *
 * The invoke carries the Served User address, the Message
 * Centre identity, and the password. Message Type, Served
 * User name, and mailbox identifier are optional.
 *
 * The Message Centre PINX checks the request. Doing that
 * in the PINX, or together with the Message Centre, is an
 * implementation option (§7.5.1.1.2). Success is a
 * `MIDDummyRes` and the PINX stays in MID-MC-idle. The
 * Served User PINX may tell the user. Further action is
 * its responsibility and may be a user action or a timer
 * expiry. §7.5.2.1.2 does not say to stop T2 or to leave
 * MID-SU-wait when the result arrives.
 *
 * An invalid password is an example of a return error; the
 * Message Centre PINX stays idle (§7.5.1.2.2). On a return
 * error the Served User PINX stops T2 and returns to
 * MID-SU-idle (§7.5.2.2.2). On T2 expiry it releases the
 * call-independent connection unless still required.
 *
 * Errors: `userNotSubscribed`, `invalidServedUserNr`,
 * `invalidMailbox`, `authorizationFailed`, `unspecified`.
 * The procedure does not assign these codes.
 *
 * On a return error or reject, `mCMUpdateReq`,
 * `mCMService`, and `mCMInterrogate` shall not be sent
 * (§6.8.40). §7.8.40 spells the last of those
 * `mCInterrogate`. After a return result, Message Centre
 * Access profile 3 treats following SS-MCM APDUs as
 * belonging to the mailbox named here (ECMA-345 §7.3.2).
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
    "&operationCode": { local: 119 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
