/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MWIDeactivateArg, _decode_MWIDeactivateArg, _encode_MWIDeactivateArg } from "../MWI-Operations-asn1-97/MWIDeactivateArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../MWI-Operations-asn1-97/DummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../MWI-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mWIDeactivate
 * @description
 *
 * Message Centre PINX to Served User PINX, local code 81. Cancels the
 * message-waiting indication for one service. Same call-independent connection,
 * timer T1, and result as `mWIActivate` (ECMA-242 §6.5.1.1.1, §6.5.2.1.1,
 * §6.9.1). The argument shall contain the Served User's PISN number and the
 * service. The same errors are listed. §6.5.2.2.1 does not assign each error a
 * cause. If a previous activation included a Message Centre identity,
 * deactivation shall include it again (ECMA-241 §7.2.1.2 note 3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mWIDeactivate OPERATION ::= {
 *     ARGUMENT MWIDeactivateArg
 *     RESULT DummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 81
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MWIDeactivateArg, DummyRes>}
 * @implements {OPERATION<MWIDeactivateArg, DummyRes>}
 */
export
const mWIDeactivate: OPERATION<MWIDeactivateArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MWIDeactivateArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MWIDeactivateArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 81 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
