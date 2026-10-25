/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MWIInterrogateArg, _decode_MWIInterrogateArg, _encode_MWIInterrogateArg } from "../MWI-Operations-asn1-97/MWIInterrogateArg.ta.mjs";
import { type MWIInterrogateRes, _decode_MWIInterrogateRes, _encode_MWIInterrogateRes } from "../MWI-Operations-asn1-97/MWIInterrogateRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { invalidMsgCentreId } from "../MWI-Operations-asn1-97/invalidMsgCentreId.oa.mjs";
import { unspecified } from "../MWI-Operations-asn1-97/unspecified.oa.mjs";
import { notActivated } from "../General-Error-List/notActivated.oa.mjs";

/**
 * @summary mWIInterrogate
 * @description
 *
 * Served User PINX to Message Centre PINX, local code 82. The Served User PINX
 * sends this invoke on a call-independent connection, starts timer T2 (at least
 * 15 s), and waits in MWI-Ser-Wait (ECMA-242 §6.5.2.1.2, §6.9.2). The argument
 * contains the Served User's PISN number, the service, and optionally a Message
 * Centre identity. If interrogation is possible and any received identity is
 * correct, the Message Centre PINX returns the status and stays in MWI-Mc-Idle
 * (§6.5.1.1.2). The result may carry the same optional information as
 * `mWIActivate`. The Served User PINX clears the connection. Errors are
 * `userNotSubscribed`, `invalidServedUserNr`, `notActivated`,
 * `invalidMsgCentreId`, and `unspecified`. §6.5.1.2.2 requires an error when
 * interrogation is not possible or the Message Centre identifier is incorrect,
 * and does not name which error. The corresponding public ISDN service does not
 * support interrogation (§6.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mWIInterrogate OPERATION ::= {
 *     ARGUMENT MWIInterrogateArg
 *     RESULT MWIInterrogateRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | notActivated
 *         | invalidMsgCentreId
 *         | unspecified
 *     }
 *     CODE local: 82
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MWIInterrogateArg, MWIInterrogateRes>}
 * @implements {OPERATION<MWIInterrogateArg, MWIInterrogateRes>}
 */
export
const mWIInterrogate: OPERATION<MWIInterrogateArg, MWIInterrogateRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MWIInterrogateArg,
        "&ResultType": _decode_MWIInterrogateRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MWIInterrogateArg,
        "&ResultType": _encode_MWIInterrogateRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, notActivated, invalidMsgCentreId, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 82 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
