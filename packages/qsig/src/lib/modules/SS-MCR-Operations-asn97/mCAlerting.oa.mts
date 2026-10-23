/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCAlertingArg, _decode_MCAlertingArg, _encode_MCAlertingArg } from "../SS-MCR-Operations-asn97/MCAlertingArg.ta.mjs";

/**
 * @summary mCAlerting
 * @description
 *
 * The Requested Call is alerting (ECMA-344 §6.5.2.1.2). Direction:
 * Co-operating PINX to Requesting PINX, in a FACILITY message, when an
 * ALERTING message arrives from the Destination PINX while the Co-operating
 * PINX is in MCR-Active. ROSE local CODE 114. No result (`RETURN RESULT
 * FALSE`, `ALWAYS RESPONDS FALSE`). No errors.
 *
 * `correlation` is the value from the `mCRequest` invoke. The Requesting PINX
 * may indicate this to the Requesting User and remains in MCR-Active
 * (§6.5.1.1.2).
 *
 * Invoke interpretation is `discardAnyUnrecognisedInvokePdu`. The NFE
 * destination entity is `endPINX` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCAlerting OPERATION ::= {
 *     ARGUMENT MCAlertingArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 114
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCAlertingArg>}
 * @implements {OPERATION<MCAlertingArg>}
 */
export
const mCAlerting: OPERATION<MCAlertingArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCAlertingArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCAlertingArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 114 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
