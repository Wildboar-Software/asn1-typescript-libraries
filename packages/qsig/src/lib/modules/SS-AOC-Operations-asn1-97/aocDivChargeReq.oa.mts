/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { AocDivChargeReqArg, _decode_AocDivChargeReqArg, _encode_AocDivChargeReqArg } from "../SS-AOC-Operations-asn1-97/AocDivChargeReqArg.ta.mjs";

/**
 * @summary aocDivChargeReq
 * @description
 *
 * Call Diversion interaction, local code 65, no return result. Used only when
 * the diverting user is charged for the diverted call (ECMA-212 §6.6.2.4). If
 * final charge provision is required, the Served User PINX sends this invoke in
 * the same FACILITY message as `callRerouting` (§6.9.4.1). The Rerouting PINX
 * forwards it in the SETUP that carries `divertingLegInformation2` (§6.9.4.2).
 * The later `aocFinal` uses a call-independent connection routed from
 * `divertingUser` (§6.6.2.4.1). Interpretation APDU is
 * `discardAnyUnrecognisedInvokePdu` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocDivChargeReq OPERATION ::= {
 *     ARGUMENT AocDivChargeReqArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 65
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocDivChargeReqArg>}
 * @implements {OPERATION<AocDivChargeReqArg>}
 */
export
const aocDivChargeReq: OPERATION<AocDivChargeReqArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocDivChargeReqArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocDivChargeReqArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 65 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
