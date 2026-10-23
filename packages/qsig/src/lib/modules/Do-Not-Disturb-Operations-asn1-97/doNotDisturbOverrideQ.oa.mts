/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DNDOverrideArg, _decode_DNDOverrideArg, _encode_DNDOverrideArg } from "../Do-Not-Disturb-Operations-asn1-97/DNDOverrideArg.ta.mjs";

/**
 * @summary doNotDisturbOverrideQ
 * @description
 *
 * Immediate SS-DNDO, without path retention (ECMA-194 §6.6.2.1.1).
 * Carried in SETUP. No result (`RETURN RESULT FALSE`,
 * `ALWAYS RESPONDS FALSE`). The Terminating PINX overrides SS-DND
 * only when the called user's DNDPL is strictly less than this
 * DNDOCL (ECMA-194 §6.6.1.1; ECMA-193 §6.3.15). Otherwise SS-DND
 * runs as if this invoke were absent. ROSE local CODE 38. The
 * Interpretation APDU is `discardAnyUnrecognisedInvokePdu`; NFE
 * `destinationEntity` is `endPINX` (§6.3.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * doNotDisturbOverrideQ OPERATION ::= {
 *     ARGUMENT DNDOverrideArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 38
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DNDOverrideArg>}
 * @implements {OPERATION<DNDOverrideArg>}
 */
export
const doNotDisturbOverrideQ: OPERATION<DNDOverrideArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DNDOverrideArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DNDOverrideArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 38 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
