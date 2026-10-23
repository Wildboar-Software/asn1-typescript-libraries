/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DisplayArg, _decode_DisplayArg, _encode_DisplayArg } from "../SS-SD-Operations-asn1-97/DisplayArg.ta.mjs";
import { unspecified } from "../SS-SD-Operations-asn1-97/unspecified.oa.mjs";
import { noDisplayAvailable } from "../SS-SD-Operations-asn1-97/noDisplayAvailable.oa.mjs";
import { displayTemporarilyNotAvailable } from "../SS-SD-Operations-asn1-97/displayTemporarilyNotAvailable.oa.mjs";
import { notPresentable } from "../SS-SD-Operations-asn1-97/notPresentable.oa.mjs";

/**
 * @summary display
 * @description
 *
 * Server User PINX to Client User PINX, local code 103. No return result. On
 * request of the Server User, the PINX sends the display text as a BMP string
 * (ECMA-311 §6.5.2.1.2). Use the call reference of an existing call-related or
 * call-independent connection. If none exists and no call has to be
 * established, the Server User sets up a call-independent connection (ECMA-165
 * §7.3) and is responsible for clearing it. The Client User PINX presents the
 * text in an appropriate format (§6.5.1.1.2). Errors, sent by the Client User
 * PINX: `noDisplayAvailable`, `displayTemporarilyNotAvailable`,
 * `notPresentable`, and `unspecified` (§6.5.1.2.2). Success carries no result.
 * `ALWAYS RESPONDS FALSE` means a response is not required in every case; the
 * Client User PINX still sends those errors when the display cannot be used.
 * NFE destination is `endPINX`. The Interpretation APDU is omitted or
 * `rejectAnyUnrecognizedInvokePdu` (§6.3.2.1). There is no timer (§6.9).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * display OPERATION ::= {
 *     ARGUMENT DisplayArg
 *     RETURN RESULT FALSE
 *     ERRORS {
 *         unspecified
 *         | noDisplayAvailable
 *         | displayTemporarilyNotAvailable
 *         | notPresentable
 *     }
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 103
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DisplayArg>}
 * @implements {OPERATION<DisplayArg>}
 */
export
const display: OPERATION<DisplayArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DisplayArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DisplayArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ unspecified, noDisplayAvailable, displayTemporarilyNotAvailable, notPresentable, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 103 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
