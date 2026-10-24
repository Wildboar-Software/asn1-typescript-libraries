/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { LocUpdArg, _decode_LocUpdArg, _encode_LocUpdArg } from "../WTM-Location-Registration-Operations-asn1-97/LocUpdArg.ta.mjs";
import { type DummyRes, _decode_DummyRes, _encode_DummyRes } from "../WTM-Location-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../WTM-Location-Registration-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary locUpdate
 * @description
 *
 * Register a WTM user's location (ECMA-302 §6.5). The Visitor PINX sends it to
 * the Home PINX when a user who is not already registered in this visitor area
 * makes a valid request and the Visitor PINX can address the Home PINX. ROSE
 * local CODE 50. The Home PINX stores `visitPINX` in the HDB. If the visitor
 * area for that basic service changed, it sends `locDelete` to the previous
 * Visitor PINX (§6.5.4.1). If the area is unchanged it returns the result and
 * stays idle (§6.5.4.2). Timer T1, at least 15 s, runs in VisitUpdate
 * (§6.10.1). Errors: `invalidServedUserNr` when the user is not in the HDB;
 * `notAuthorized` when the user may not update location information;
 * `unspecified`. Clause 6 is silent on when to return `unspecified`. Before
 * this invoke, the Visitor PINX may send `pisnEnquiry` to the previous Visitor
 * PINX or a Directory PINX to turn an identifier into a PISN number (§6.5.1.1
 * notes 2 and 3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locUpdate OPERATION ::= {
 *     -- Sent from the Visitor PINX to the Home PINX.
 *     ARGUMENT LocUpdArg
 *     RESULT DummyRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | notAuthorized
 *         | unspecified
 *     }
 *     CODE local: 50
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<LocUpdArg, DummyRes>}
 * @implements {OPERATION<LocUpdArg, DummyRes>}
 */
export
const locUpdate: OPERATION<LocUpdArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocUpdArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocUpdArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ invalidServedUserNr, notAuthorized, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 50 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
