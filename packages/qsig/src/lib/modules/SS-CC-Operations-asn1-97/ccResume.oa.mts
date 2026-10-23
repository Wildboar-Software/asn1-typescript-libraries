/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";

/**
 * @summary ccResume
 * @description
 *
 * User A is free again after `ccSuspend` without path reservation
 * (ECMA-186 §6.5.2.1.7). The Originating PINX sends the invoke in
 * FACILITY on the retained signalling connection and returns to
 * CC-Invoked-User-A-RET, waiting for another `ccExecPossible`. No
 * result. Local code 33. The Terminating PINX resumes monitoring
 * User B and enters CC-Invoked-User-B (§6.5.3.1.7). §6.5 does not
 * say whether the argument is `fullArg` or `extArg`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccResume OPERATION ::= {
 *     ARGUMENT CcExtension
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 33
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcExtension>}
 * @implements {OPERATION<CcExtension>}
 */
export
const ccResume: OPERATION<CcExtension> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcExtension,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcExtension,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 33 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
