/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SSCTSetupArg, _decode_SSCTSetupArg, _encode_SSCTSetupArg } from "../Single-Step-Call-Transfer-Operations-asn1-97/SSCTSetupArg.ta.mjs";

/**
 * @summary ssctSetup
 * @description
 *
 * Unconfirmed. Rerouting PINX to Transferred-To PINX, in the SETUP of
 * the new connection. ROSE local 100. Interpretation APDU:
 * `discardAnyUnrecognisedInvokePdu`. NFE `destinationEntity` is
 * `endPINX`. The SETUP also carries the original call's bearer
 * capability, User C's number as Called party number, and User B's
 * number as Calling party number. User B's name, if present, is a
 * separate `callingName` invoke, not part of this argument. On
 * diversion the invoke is forwarded with the new call; the diverted-to
 * PINX becomes the Transferred-To PINX. The Rerouting PINX may set
 * the Transit counter in that SETUP to zero; the Transferred-To PINX
 * ignores it. ECMA-300 §6.3.1, §6.3.2.1, §6.5.2.1, §6.5.4.1, §6.8.5.3,
 * §6.8.7.3, §6.8.18.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ssctSetup OPERATION ::= {
 *     -- sent from the Rerouting PINX to the Transferred-To PINX
 *     ARGUMENT SSCTSetupArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 100
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SSCTSetupArg>}
 * @implements {OPERATION<SSCTSetupArg>}
 */
export
const ssctSetup: OPERATION<SSCTSetupArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SSCTSetupArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SSCTSetupArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 100 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
