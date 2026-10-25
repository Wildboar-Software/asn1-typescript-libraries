/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PumDelRegArg, _decode_PumDelRegArg, _encode_PumDelRegArg } from "../PUM-Registration-Operations-asn1-97/PumDelRegArg.ta.mjs";
import { type DummyRes, _decode_DummyRes, _encode_DummyRes } from "../PUM-Registration-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { temporarilyUnavailable } from "../PUM-Registration-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../PUM-Registration-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";

/**
 * @summary pumDelReg
 * @description
 *
 * Delete one registration session from a Visitor PINX (ECMA-282 §6.5.3, §6.5.5,
 * §6.6). The Home PINX sends it to the previous Visitor PINX after a new
 * registration, or to the Visitor PINX whose session is being de-registered.
 * ROSE local CODE 90. The result is `DummyRes`. The addressed PINX deletes the
 * VDB entry selected by basic service, PUM identity, hosting address, and
 * service option, and still returns a result if that entry is already absent
 * (§6.5.5.2). It returns `temporarilyUnavailable` when the VDB is temporarily
 * unavailable. Timer T4, at least 15 s, runs at the Home PINX in HomeDelete
 * (§6.12.4). Expiry of T4, or a return error or reject, may lead to management
 * action to correct the VDB; the Home PINX returns to HomeIdle (§6.5.3.2).
 * Other errors: `notAvailable`, `unspecified`,
 * `supplementaryServiceInteractionNotAllowed`. Clause 6 is silent on when to
 * return those three.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumDelReg OPERATION ::= {
 *     -- Delete Registration (sent from the Home PINX to the Previous Visitor PINX)
 *     ARGUMENT PumDelRegArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | temporarilyUnavailable
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 90
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PumDelRegArg, DummyRes>}
 * @implements {OPERATION<PumDelRegArg, DummyRes>}
 */
export
const pumDelReg: OPERATION<PumDelRegArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PumDelRegArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_PumDelRegArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, temporarilyUnavailable, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 90 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
