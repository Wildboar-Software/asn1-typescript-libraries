/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CcRequestArg, _decode_CcRequestArg, _encode_CcRequestArg } from "../SS-CC-Operations-asn1-97/CcRequestArg.ta.mjs";
import { CcRequestRes, _decode_CcRequestRes, _encode_CcRequestRes } from "../SS-CC-Operations-asn1-97/CcRequestRes.ta.mjs";
import { shortTermRejection } from "../SS-CC-Operations-asn1-97/shortTermRejection.oa.mjs";
import { longTermRejection } from "../SS-CC-Operations-asn1-97/longTermRejection.oa.mjs";
import { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary ccbsRequest
 * @description
 *
 * Invokes Completion of Calls to Busy Subscriber (ECMA-186
 * §6.5.2.1.1). The Originating PINX sends it to the Terminating PINX
 * in the SETUP of a call-independent signalling connection after
 * User A requests SS-CCBS for a busy User B. Local code 40. Timer T1
 * (10-30 s) guards the response (§6.10.1). On a result the
 * Originating PINX starts service-duration timer T2, whose length is
 * implementation-dependent, and waits for `ccExecPossible`.
 *
 * The Terminating PINX accepts by returning a result and monitoring
 * User B (§6.5.3.1.1). The result is in CONNECT if the signalling
 * connection is retained, or in RELEASE with cause 16 if it is
 * released (§6.5.3.1.3). A request that cannot be accepted is
 * rejected in that RELEASE with `longTermRejection` when the failure
 * is persistent, or `shortTermRejection` when it is transient
 * (§6.5.3.2.1).
 *
 * `unspecified` and `supplementaryServiceInteractionNotAllowed` are
 * in the ERRORS set (§6.3.1). §6.5.3.2.1 does not name them.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccbsRequest OPERATION ::= {
 *     ARGUMENT CcRequestArg
 *     RESULT CcRequestRes
 *     ERRORS {
 *         shortTermRejection
 *         | longTermRejection
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 40
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcRequestArg, CcRequestRes>}
 * @implements {OPERATION<CcRequestArg, CcRequestRes>}
 */
export
const ccbsRequest: OPERATION<CcRequestArg, CcRequestRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcRequestArg,
        "&ResultType": _decode_CcRequestRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcRequestArg,
        "&ResultType": _encode_CcRequestRes,
    },
    "&Errors": [ shortTermRejection, longTermRejection, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 40 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
