/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PRSetupArg, _decode_PRSetupArg, _encode_PRSetupArg } from "../Path-Replacement-Operations-asn1-97/PRSetupArg.ta.mjs";
import { DummyResult, _decode_DummyResult, _encode_DummyResult } from "../Path-Replacement-Operations-asn1-97/DummyResult.ta.mjs";
import { criteriaPermanentlyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaPermanentlyUnachievable.oa.mjs";
import { criteriaTemporarilyUnachievable } from "../Path-Replacement-Operations-asn1-97/criteriaTemporarilyUnachievable.oa.mjs";
import { invalidRerouteingNumber } from "../Path-Replacement-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { unrecognizedCallIdentity } from "../Path-Replacement-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
import { temporarilyUnavailable } from "../Path-Replacement-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../Path-Replacement-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary pathReplaceSetup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathReplaceSetup OPERATION ::= {
 *     ARGUMENT PRSetupArg
 *     RESULT DummyResult
 *     ERRORS {
 *         criteriaPermanentlyUnachievable
 *         | criteriaTemporarilyUnachievable
 *         | invalidRerouteingNumber
 *         | unrecognizedCallIdentity
 *         | temporarilyUnavailable
 *         | unspecified
 *     }
 *     CODE local: 5
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PRSetupArg, DummyResult>}
 * @implements {OPERATION<PRSetupArg, DummyResult>}
 */
export
const pathReplaceSetup: OPERATION<PRSetupArg, DummyResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PRSetupArg,
        "&ResultType": _decode_DummyResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_PRSetupArg,
        "&ResultType": _encode_DummyResult,
    },
    "&Errors": [ criteriaPermanentlyUnachievable, criteriaTemporarilyUnachievable, invalidRerouteingNumber, unrecognizedCallIdentity, temporarilyUnavailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 5 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
