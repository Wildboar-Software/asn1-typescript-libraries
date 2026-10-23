/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PumoArg, _decode_PumoArg, _encode_PumoArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumoArg.ta.mjs";

/**
 * @summary pumoCall
 * @description
 *
 * Pass an outgoing PUM call to the Home PINX for processing (ECMA-284 §7.5).
 * The Originating PINX sends the first invoke in a SETUP whose Called party
 * number can route to the Home PINX, and sends further invokes in FACILITY
 * messages for overlap digits. ROSE local CODE 96. No result
 * (`RETURN RESULT FALSE`, `ALWAYS RESPONDS FALSE`). The Facility
 * information element uses Interpretation
 * `clearCallIfAnyInvokePduNotRecognised`. In a FACILITY message,
 * Interpretation is omitted or `rejectAnyUnrecognisedInvokePdu`
 * (§7.3.2.1).
 * A SETUP that contains this invoke shall not invoke ANF-PUMI
 * (§6.8.27.1). The Home PINX joins the incoming leg to a new leg
 * toward the destination once it has enough digits (§7.5.2.1). Timer T3
 * at the Home PINX is 14-16 s while the
 * number is incomplete (§7.9.2). On expiry the Home PINX extends the call if
 * the digits suffice, or clears it, for example with cause #28.
 * The value below does not set `&operationCode`, and `&returnResult`
 * stays at the class default `true`. ECMA-284 §6.3.1 specifies local
 * code 96 and `RETURN RESULT FALSE`, as in the ASN.1 below.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumoCall OPERATION ::= {
 *     ARGUMENT PumoArg
 *     ALWAYS RESPONDS FALSE
 *     RETURN RESULT FALSE
 *     CODE local: 96
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PumoArg>}
 * @implements {OPERATION<PumoArg>}
 */
export
const pumoCall: OPERATION<PumoArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PumoArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_PumoArg,
        "&ResultType": undefined,
    },
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
