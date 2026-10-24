/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MWIActivateArg, _decode_MWIActivateArg, _encode_MWIActivateArg } from "../MWI-Operations-asn1-97/MWIActivateArg.ta.mjs";
import { type DummyRes, _decode_DummyRes, _encode_DummyRes } from "../MWI-Operations-asn1-97/DummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../MWI-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mWIActivate
 * @description
 *
 * Message Centre PINX to Served User PINX, local code 80. On a request from the
 * Message Centre, the PINX sends this invoke on a call-independent signalling
 * connection (ECMA-165 §7.3), starts timer T1 (at least 15 s), and waits in
 * MWI-Mc-Wait (ECMA-242 §6.5.1.1.1, §6.9.1). The argument shall contain the
 * Served User's PISN number and the service. Message centre identity, message
 * count, originating number, timestamp, and priority are optional. The Served
 * User PINX activates SS-MWI and returns `DummyRes` (§6.5.2.1.1). The Message
 * Centre PINX clears the connection, or may keep it for another application.
 * Errors are `userNotSubscribed`, `invalidServedUserNr`,
 * `basicServiceNotProvided`, and `unspecified`. §6.5.2.2.1 says to return an
 * appropriate error and does not assign each error a cause. NFE destination is
 * `endPINX`. The Interpretation APDU is omitted or
 * `rejectAnyUnrecognizedInvokePdu` (§6.3.2.1). May be sent again when the
 * number of waiting messages changes (ECMA-241 §6.2.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mWIActivate OPERATION ::= {
 *     ARGUMENT MWIActivateArg
 *     RESULT DummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 80
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MWIActivateArg, DummyRes>}
 * @implements {OPERATION<MWIActivateArg, DummyRes>}
 */
export
const mWIActivate: OPERATION<MWIActivateArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MWIActivateArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MWIActivateArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 80 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
