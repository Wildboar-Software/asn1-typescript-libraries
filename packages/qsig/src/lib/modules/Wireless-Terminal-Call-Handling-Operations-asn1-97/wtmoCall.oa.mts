/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { WtmoArg, _decode_WtmoArg, _encode_WtmoArg } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmoArg.ta.mjs";

/**
 * @summary wtmoCall
 * @description
 *
 * Unconfirmed ANF-WTMO invoke from the Originating PINX to the Home PINX
 * (ECMA-304 §7.1, §7.5). Local code 71. There is no return result. The SETUP
 * carries the first invoke; further destination digits go in FACILITY messages.
 * In a SETUP the interpretation APDU is `clearCallIfAnyInvokePduNotRecognised`.
 * In a FACILITY message it is omitted or is `rejectAnyUnrecognisedInvokePdu`
 * (§7.3.2.1). The NFE `destinationEntity` is `endPINX`. The Home PINX extends
 * the call once the digits suffice to select a route (§7.5.2.1). Timer T3,
 * while the number is incomplete, should be 14 to 16 s (§7.9.2). A `wtmoCall`
 * invoke in a FACILITY message during state WTMO-Idle is ignored (§7.5.2.2). A
 * SETUP that contains `wtmoCall` does not invoke ANF-WTMI (§6.8.23.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wtmoCall OPERATION ::= {
 *     ARGUMENT WtmoArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 71
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<WtmoArg>}
 * @implements {OPERATION<WtmoArg>}
 */
export
const wtmoCall: OPERATION<WtmoArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_WtmoArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_WtmoArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 71 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
