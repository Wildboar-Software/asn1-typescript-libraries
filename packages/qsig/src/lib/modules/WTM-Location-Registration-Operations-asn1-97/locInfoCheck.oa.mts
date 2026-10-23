/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { LocInfoCheckArg, _decode_LocInfoCheckArg, _encode_LocInfoCheckArg } from "../WTM-Location-Registration-Operations-asn1-97/LocInfoCheckArg.ta.mjs";
import { LocInfoCheckRes, _decode_LocInfoCheckRes, _encode_LocInfoCheckRes } from "../WTM-Location-Registration-Operations-asn1-97/LocInfoCheckRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary locInfoCheck
 * @description
 *
 * Check stored location data (ANF-WTINFO, ECMA-302 §7.6). Either direction:
 * Visitor PINX to Home PINX, or Home PINX to Visitor PINX. ROSE local CODE 98.
 * The receiver compares `wtmUserId` with the HDB or the VDB and returns
 * `CheckResult`. It returns `notAvailable` when that user is not in the
 * database being checked (§7.6.1.2, §7.6.2.2). Timer T6, at least 15 s, runs at
 * the invoker in VisitWaitIC or HomeWaitIC (§7.10.2). `unspecified` is also
 * listed; clause 7 is silent on when to return it. The invoker may act on the
 * result; §7.6 is silent on what either `CheckResult` value requires. On a
 * return error, reject, or T6 expiry, §7.6.2.2 tells the Home PINX to enter
 * VisitIdle; the Home state defined for this operation is HomeWaitIC
 * (§7.4.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locInfoCheck OPERATION ::= {
 *     -- Sent from the Visitor PINX to the Home PINX or vice versa.
 *     ARGUMENT LocInfoCheckArg
 *     RESULT LocInfoCheckRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 98
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<LocInfoCheckArg, LocInfoCheckRes>}
 * @implements {OPERATION<LocInfoCheckArg, LocInfoCheckRes>}
 */
export
const locInfoCheck: OPERATION<LocInfoCheckArg, LocInfoCheckRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocInfoCheckArg,
        "&ResultType": _decode_LocInfoCheckRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocInfoCheckArg,
        "&ResultType": _encode_LocInfoCheckRes,
    },
    "&Errors": [ notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 98 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
