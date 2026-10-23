/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CallIdentificationUpdateArg, _decode_CallIdentificationUpdateArg, _encode_CallIdentificationUpdateArg } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/CallIdentificationUpdateArg.ta.mjs";

/**
 * @summary callIdentificationUpdate
 * @description
 *
 * Replace stored call-identification data (ECMA-314 §6.5.2.1). No result.
 * Elements whose values changed shall be included; elements that did not
 * change may also be included. Several updated values between the same PINXs
 * go in one invoke. A received legID is ignored. On globalCallID or threadID
 * the receiver stores the value and, if it is not the End PINX, forwards it.
 * During simultaneous-assignment supervision, the higher binary linkage
 * identifier wins, then the later timestamp, then the higher
 * switchingSubDomainName (§6.5.2.2). ROSE local CODE 106. NFE
 * destinationEntity is anyTypeOfPINX. The Interpretation APDU is
 * discardAnyUnrecognisedInvokePdu (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIdentificationUpdate OPERATION ::= {
 *     ARGUMENT CallIdentificationUpdateArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 106
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallIdentificationUpdateArg>}
 * @implements {OPERATION<CallIdentificationUpdateArg>}
 */
export
const callIdentificationUpdate: OPERATION<CallIdentificationUpdateArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallIdentificationUpdateArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallIdentificationUpdateArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 106 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
