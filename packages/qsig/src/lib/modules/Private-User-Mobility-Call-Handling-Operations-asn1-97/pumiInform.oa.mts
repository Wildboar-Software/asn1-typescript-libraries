/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { InformArg, _decode_InformArg, _encode_InformArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/InformArg.ta.mjs";

/**
 * @summary pumiInform
 * @description
 *
 * Identify the PUM user on the rerouted call (ECMA-284 §6.5.1.1, §6.5.4). The
 * Rerouteing PINX places it in the SETUP sent to the Visitor PINX. ROSE local
 * CODE 95. No result and no error
 * (`RETURN RESULT FALSE`, `ALWAYS RESPONDS FALSE`).
 * `pumIdentity` repeats the `pumiDivert` argument. The Visitor PINX
 * may check the VDB and shall offer the call to the terminal selected by the
 * Called party number, including this identity in the call request (§6.5.4.1).
 * If the user is not in the VDB it may clear the call with cause #41
 * (§6.5.4.2). A WTMI reroute that already carries this invoke forwards it with
 * `wtmiInform` (§6.8.22.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumiInform OPERATION ::= {
 *     -- Sent from the Rerouteing PINX to the Visitor PINX.
 *     ARGUMENT InformArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 95
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<InformArg>}
 * @implements {OPERATION<InformArg>}
 */
export
const pumiInform: OPERATION<InformArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InformArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InformArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 95 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
