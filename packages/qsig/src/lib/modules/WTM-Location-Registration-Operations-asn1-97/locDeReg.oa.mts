/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { LocDeRegArg, _decode_LocDeRegArg, _encode_LocDeRegArg } from "../WTM-Location-Registration-Operations-asn1-97/LocDeRegArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../WTM-Location-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary locDeReg
 * @description
 *
 * Deregister a WTM user's location (ECMA-302 §6.6). The Visitor PINX sends it
 * to the Home PINX when it determines that the user is deregistered, or when
 * the user requests deregistration. ROSE local CODE 52. The result is
 * `DummyRes`. The Home PINX checks the identity, may check the basic service,
 * updates the HDB, and returns a result (§6.6.2.1). If the user may not
 * deregister it returns `notAvailable` (§6.6.2.2). Timer T3, at least 15 s,
 * runs in VisitDeReg (§6.10.3). `unspecified` is also listed; clause 6 is
 * silent on when to return it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locDeReg OPERATION ::= {
 *     -- Sent from the Visitor PINX to the Home PINX.
 *     ARGUMENT LocDeRegArg
 *     RESULT DummyRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 52
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<LocDeRegArg, DummyRes>}
 * @implements {OPERATION<LocDeRegArg, DummyRes>}
 */
export
const locDeReg: OPERATION<LocDeRegArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocDeRegArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocDeRegArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 52 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
