/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Offer-Operations-asn1-97/DummyArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Call-Offer-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { notBusy } from "../Call-Offer-Operations-asn1-97/notBusy.oa.mjs";
import { temporarilyUnavailable } from "../Call-Offer-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { unspecified } from "../Call-Offer-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary callOfferRequest
 * @description
 *
 * Invokes Call Offer (ECMA-192 §6.6). The Originating PINX sends
 * it to the Terminating PINX. Local code 34. Without path
 * retention the invoke is in the SETUP that establishes the call.
 * With path retention it is in a FACILITY on a connection retained
 * after `serviceAvailable` showed that SS-CO is invokable
 * (§6.6.1.1). If the called user is busy and SS-CO is allowed, the
 * Terminating PINX returns a result instead of clearing and enters
 * CO-Dest-Invoked (§6.6.2.1). NFE destination is the end PINX; the
 * Interpretation APDU is omitted (§6.3.3.1). Timer T1 at the
 * Originating PINX is at least 30 s (§6.10.1).
 *
 * `notBusy` means the called user is not busy (§6.6.2.2).
 * `notAvailable` is returned by an Outgoing Gateway PINX when the
 * public ISDN has no equivalent service (§6.7, §6.8). Any error
 * other than `notBusy` is used when the user is busy but SS-CO
 * cannot be invoked (§6.6.2.2). `temporarilyUnavailable`,
 * `unspecified`, and `supplementaryServiceInteractionNotAllowed`
 * are in the ERRORS set (§6.3.1). §6.6 does not say which of those
 * three is sent in that case.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callOfferRequest OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | notBusy
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | unspecified
 *     }
 *     CODE local: 34
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, DummyRes>}
 * @implements {OPERATION<DummyArg, DummyRes>}
 */
export
const callOfferRequest: OPERATION<DummyArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, notBusy, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 34 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
