/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { KeypadArg, _decode_KeypadArg, _encode_KeypadArg } from "../SS-SD-Operations-asn1-97/KeypadArg.ta.mjs";

/**
 * @summary keypad
 * @description
 *
 * Client User PINX to Server User PINX, local code 104. No return result and no
 * errors. The Client User PINX sends the Client User's keypad information as a
 * BMP string of the normal size (ECMA-311 §6.5.1.1.2). Transport uses an
 * existing call-related or call-independent connection; otherwise the Client
 * User sets up a call-independent connection (ECMA-165 §7.3) and clears it. The
 * Server User PINX delivers the keypad information to the Server User
 * (§6.5.2.1.2). On a keypad reject APDU, the Client User PINX generates DTMF
 * tones toward the Server User PINX (§6.5.1.2.2). Generation of those tones
 * toward a public network is outside this standard (§6.6). NFE destination is
 * `endPINX`. The Interpretation APDU is omitted or
 * `rejectAnyUnrecognizedInvokePdu` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * keypad OPERATION ::= {
 *     ARGUMENT KeypadArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 104
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<KeypadArg>}
 * @implements {OPERATION<KeypadArg>}
 */
export
const keypad: OPERATION<KeypadArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_KeypadArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_KeypadArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 104 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
