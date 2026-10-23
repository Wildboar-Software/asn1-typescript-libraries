/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCInformArg, _decode_MCInformArg, _encode_MCInformArg } from "../SS-MCR-Operations-asn97/MCInformArg.ta.mjs";

/**
 * @summary mCInform
 * @description
 *
 * Tell the Destination PINX about a Make Call Request (ECMA-344 §6.5.2.1.2,
 * §6.5.3). Direction: Co-operating PINX to Destination PINX, in the SETUP of
 * the Requested Call. ROSE local CODE 113. No result (`RETURN RESULT FALSE`,
 * `ALWAYS RESPONDS FALSE`).
 *
 * Carries `requestingAddress`, `cooperatingAddress`, and `correlation` as
 * received in `mCRequest`. The Destination PINX may show that information to
 * the Destination User (§6.5.3.1.2). There are no SS-MCR states at the
 * Destination PINX (§6.4.3).
 *
 * Errors: `userNotSubscribed`, `basicServiceNotProvided`,
 * `supplementaryServiceInteractionNotAllowed`, `invalidDestinationNumber`,
 * `mCExecutionNotAllowed`, `mCDestUserBusy`, `unspecified`. The imported
 * errors are not defined in ECMA-344. The Destination PINX returns an error
 * when the Destination User is busy or another error condition is found
 * (§6.5.3.2.2). The Co-operating PINX maps that error onto `mCRequest` with
 * the same code (§6.5.2.2.2). The text does not bind codes to conditions. If
 * do-not-disturb at the Destination User overrides SS-MCR, the Destination
 * PINX returns an error (§6.8.17).
 *
 * Invoke interpretation is `discardAnyUnrecognisedInvokePdu`. The NFE
 * destination entity is `endPINX` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCInform OPERATION ::= {
 *     ARGUMENT MCInformArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     ERRORS {
 *         userNotSubscribed
 *         | basicServiceNotProvided
 *         | supplementaryServiceInteractionNotAllowed
 *         | invalidDestinationNumber
 *         | mCExecutionNotAllowed
 *         | mCDestUserBusy
 *         | unspecified
 *     }
 *     CODE local: 113
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCInformArg>}
 * @implements {OPERATION<MCInformArg>}
 */
export
const mCInform: OPERATION<MCInformArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCInformArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCInformArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
