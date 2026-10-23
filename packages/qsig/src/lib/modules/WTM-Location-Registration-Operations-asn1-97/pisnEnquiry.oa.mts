/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PisnEnqArg, _decode_PisnEnqArg, _encode_PisnEnqArg } from "../WTM-Location-Registration-Operations-asn1-97/PisnEnqArg.ta.mjs";
import { PisnEnqRes, _decode_PisnEnqRes, _encode_PisnEnqRes } from "../WTM-Location-Registration-Operations-asn1-97/PisnEnqRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary pisnEnquiry
 * @description
 *
 * Translate an alternative identifier into a WTM user identity (ECMA-302
 * §6.5.2, §6.5.3, §6.5.7, §6.5.8). The Visitor PINX sends it to the previous
 * Visitor PINX or to a Directory PINX. ROSE local CODE 53. The previous Visitor
 * PINX returns the identity stored in the VDB. The Directory PINX translates
 * the identifier. Either returns `invalidServedUserNr` when it cannot.
 * A PINX that is both Visitor and Directory PINX should return that
 * error only when the user is in neither the VDB nor the directory
 * (§6.5.7.2 note 9, §6.5.8.2 note 10). Timer T2, at least
 * 15 s, runs in VisitEnquiry (§6.10.2). `unspecified` is also listed; clause 6
 * is silent on when to return it. ECMA-282 §6.8 reuses this operation so a PUM
 * PINX can ask a Directory PINX to translate a PUM identifier into a PISN
 * number. ECMA-282 §6.8.2.1 requires that PISN number in the result and is
 * silent on which `WtmUserId` alternative carries it. Its timer for this invoke
 * is also T2, at least 15 s (ECMA-282 §6.12.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pisnEnquiry OPERATION ::= {
 *     -- Sent from the Visitor PINX to the previous Visitor PINX or a Directory PINX.
 *     ARGUMENT PisnEnqArg
 *     RESULT PisnEnqRes
 *     ERRORS { invalidServedUserNr | unspecified }
 *     CODE local: 53
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PisnEnqArg, PisnEnqRes>}
 * @implements {OPERATION<PisnEnqArg, PisnEnqRes>}
 */
export
const pisnEnquiry: OPERATION<PisnEnqArg, PisnEnqRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PisnEnqArg,
        "&ResultType": _decode_PisnEnqRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_PisnEnqArg,
        "&ResultType": _encode_PisnEnqRes,
    },
    "&Errors": [ invalidServedUserNr, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 53 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
