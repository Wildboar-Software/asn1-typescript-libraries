/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ReAnswerArg, _decode_ReAnswerArg, _encode_ReAnswerArg } from "../Recall-Operations-asn1-97/ReAnswerArg.ta.mjs";

/**
 * @summary recallAnswered
 * @description
 *
 * User A has answered the recall. The Served User PINX sends it to the Primary
 * PINX in a FACILITY and then returns to RE-Idle (ECMA-214 §6.5.1.1).
 * Unconfirmed. ROSE local code 58. No errors. The Primary PINX gives user B an
 * answer notification and stays in RE-Idle-P (§6.5.2.1).
 *
 * The argument may include `connectedSubaddress` or `connectedName`
 * (ECMA-214 §6.5.1.1). §6.3.1 includes `connectedNumber`, which that
 * clause does not describe. Number information may be given to user B
 * subject to number presentation restriction, and a name subject to name
 * presentation restriction (§6.5.2.1).
 *
 * If CFU or CFB applies, the argument describes the diverted-to user instead of
 * user A (ECMA-214 §6.9.3.1, §6.9.4). If CFNR diverts the recall, answering by
 * the diverted-to user is handled as answering by user A (§6.9.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-214/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * recallAnswered OPERATION ::= {
 *     -- Sent from the Served User PINX to the Primary PINX
 *     ARGUMENT ReAnswerArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 58
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReAnswerArg>}
 * @implements {OPERATION<ReAnswerArg>}
 */
export
const recallAnswered: OPERATION<ReAnswerArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReAnswerArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReAnswerArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 58 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
