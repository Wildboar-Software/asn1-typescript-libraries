/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PRRetainArg, _decode_PRRetainArg, _encode_PRRetainArg } from "../Path-Replacement-Operations-asn1-97/PRRetainArg.ta.mjs";
// export { PRRetainArg, _decode_PRRetainArg, _encode_PRRetainArg } from "../Path-Replacement-Operations-asn1-97/PRRetainArg.ta.mjs";
import { DummyResult, _decode_DummyResult, _encode_DummyResult } from "../Path-Replacement-Operations-asn1-97/DummyResult.ta.mjs";
// export { DummyResult, _decode_DummyResult, _encode_DummyResult } from "../Path-Replacement-Operations-asn1-97/DummyResult.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { temporarilyUnavailable } from "../Path-Replacement-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../Path-Replacement-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { criteriaPermanentlyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaPermanentlyUnachievable.oa.mjs";
// export { criteriaPermanentlyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaPermanentlyUnachievable.oa.mjs";
import { criteriaTemporarilyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaTemporarilyUnachievable.oa.mjs";
// export { criteriaTemporarilyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaTemporarilyUnachievable.oa.mjs";
import { invalidRerouteingNumber } from "../Path-Replacement-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
// export { invalidRerouteingNumber } from "../Path-Replacement-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { unrecognizedCallIdentity } from "../Path-Replacement-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
// export { unrecognizedCallIdentity } from "../Path-Replacement-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
import { establishmentFailure } from "../Path-Replacement-Operations-asn1-97/establishmentFailure.oa.mjs";
// export { establishmentFailure } from "../Path-Replacement-Operations-asn1-97/establishmentFailure.oa.mjs";
import { unspecified } from "../Path-Replacement-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Path-Replacement-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary pathReplaceRetain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathReplaceRetain OPERATION ::= {
 *     ARGUMENT PRRetainArg
 *     RESULT DummyResult
 *     ERRORS {
 *         notAvailable
 *         | temporarilyUnavailable
 *         | supplementaryServiceInteractionNotAllowed
 *         | criteriaPermanentlyUnachievable
 *         | criteriaTemporarilyUnachievable
 *         | invalidRerouteingNumber
 *         | unrecognizedCallIdentity
 *         | establishmentFailure
 *         | unspecified
 *     }
 *     CODE local: 6
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PRRetainArg, DummyResult>}
 * @implements {OPERATION<PRRetainArg, DummyResult>}
 */
export
const pathReplaceRetain: OPERATION<PRRetainArg, DummyResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PRRetainArg,
        "&ResultType": _decode_DummyResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_PRRetainArg,
        "&ResultType": _encode_DummyResult,
    },
    "&Errors": [ notAvailable, temporarilyUnavailable, supplementaryServiceInteractionNotAllowed, criteriaPermanentlyUnachievable, criteriaTemporarilyUnachievable, invalidRerouteingNumber, unrecognizedCallIdentity, establishmentFailure, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 6 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
