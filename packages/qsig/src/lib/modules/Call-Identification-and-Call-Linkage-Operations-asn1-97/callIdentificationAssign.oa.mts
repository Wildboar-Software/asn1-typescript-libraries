/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CallIdentificationAssignArg, _decode_CallIdentificationAssignArg, _encode_CallIdentificationAssignArg } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/CallIdentificationAssignArg.ta.mjs";

/**
 * @summary callIdentificationAssign
 * @description
 *
 * Assign call-identification data (ECMA-314 §6.5.1.1). No result. Sent once
 * in the SETUP of a new call, containing every element the Originating PINX
 * generated. globalCallID is mandatory and shall be unique within the PISN;
 * threadID and legID are optional and likewise unique within the PISN. The
 * sender starts timer T1 (2 s, §6.9.1) and enters
 * CIDL-Simultaneous-Assignment-Supervision. A CIDL PINX that is not the End
 * PINX forwards the received data in another callIdentificationAssign toward
 * the End PINX (§6.5.2.1). ROSE local CODE 105. NFE destinationEntity is
 * anyTypeOfPINX. The Interpretation APDU is discardAnyUnrecognisedInvokePdu
 * (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIdentificationAssign OPERATION ::= {
 *     ARGUMENT CallIdentificationAssignArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 105
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallIdentificationAssignArg>}
 * @implements {OPERATION<CallIdentificationAssignArg>}
 */
export
const callIdentificationAssign: OPERATION<CallIdentificationAssignArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallIdentificationAssignArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallIdentificationAssignArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 105 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
