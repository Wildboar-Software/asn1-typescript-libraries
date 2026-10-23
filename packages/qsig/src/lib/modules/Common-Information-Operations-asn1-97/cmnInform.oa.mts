/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CmnArg, _decode_CmnArg, _encode_CmnArg } from "../Common-Information-Operations-asn1-97/CmnArg.ta.mjs";

/**
 * @summary cmnInform
 * @description
 *
 * Unsolicited ANF-CMN (ECMA-251 §6.6.1.1, §6.6.2.1). No result. The argument
 * is the common information. During establishment it may be sent in SETUP
 * or, backward, in ALERTING, CONNECT, or PROGRESS, or in FACILITY after the
 * first end-to-end basic-call message. During the active phase it is sent in
 * FACILITY. The receiver stays in CMN-Idle. ROSE local CODE 85. NFE
 * destinationEntity is endPINX. The Interpretation APDU is
 * discardAnyUnrecognisedInvokePdu (§6.3.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cmnInform OPERATION ::= {
 *     ARGUMENT CmnArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 85
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CmnArg>}
 * @implements {OPERATION<CmnArg>}
 */
export
const cmnInform: OPERATION<CmnArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CmnArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CmnArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 85 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
