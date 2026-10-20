/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MCRequestArg, _decode_MCRequestArg, _encode_MCRequestArg } from "../SS-MCR-Operations-asn97/MCRequestArg.ta.mjs";
// export { MCRequestArg, _decode_MCRequestArg, _encode_MCRequestArg } from "../SS-MCR-Operations-asn97/MCRequestArg.ta.mjs";
import { MCRequestResult, _decode_MCRequestResult, _encode_MCRequestResult } from "../SS-MCR-Operations-asn97/MCRequestResult.ta.mjs";
// export { MCRequestResult, _decode_MCRequestResult, _encode_MCRequestResult } from "../SS-MCR-Operations-asn97/MCRequestResult.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
// export { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
// export { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { invalidDestinationNumber } from "../SS-MCR-Operations-asn97/invalidDestinationNumber.oa.mjs";
// export { invalidDestinationNumber } from "../SS-MCR-Operations-asn97/invalidDestinationNumber.oa.mjs";
import { invalidCooperationNumber } from "../SS-MCR-Operations-asn97/invalidCooperationNumber.oa.mjs";
// export { invalidCooperationNumber } from "../SS-MCR-Operations-asn97/invalidCooperationNumber.oa.mjs";
import { mCRequestNotAllowed } from "../SS-MCR-Operations-asn97/mCRequestNotAllowed.oa.mjs";
// export { mCRequestNotAllowed } from "../SS-MCR-Operations-asn97/mCRequestNotAllowed.oa.mjs";
import { mCExecutionNotAllowed } from "../SS-MCR-Operations-asn97/mCExecutionNotAllowed.oa.mjs";
// export { mCExecutionNotAllowed } from "../SS-MCR-Operations-asn97/mCExecutionNotAllowed.oa.mjs";
import { mCDestUserBusy } from "../SS-MCR-Operations-asn97/mCDestUserBusy.oa.mjs";
// export { mCDestUserBusy } from "../SS-MCR-Operations-asn97/mCDestUserBusy.oa.mjs";
import { mCCoopUserBusy } from "../SS-MCR-Operations-asn97/mCCoopUserBusy.oa.mjs";
// export { mCCoopUserBusy } from "../SS-MCR-Operations-asn97/mCCoopUserBusy.oa.mjs";
import { mCCoopUserRejected } from "../SS-MCR-Operations-asn97/mCCoopUserRejected.oa.mjs";
// export { mCCoopUserRejected } from "../SS-MCR-Operations-asn97/mCCoopUserRejected.oa.mjs";
import { establishmentFailure } from "../Path-Replacement-Operations-asn1-97/establishmentFailure.oa.mjs";
// export { establishmentFailure } from "../Path-Replacement-Operations-asn1-97/establishmentFailure.oa.mjs";
import { unspecified } from "../SS-MCR-Operations-asn97/unspecified.oa.mjs";
// export { unspecified } from "../SS-MCR-Operations-asn97/unspecified.oa.mjs";


/**
 * @summary mCRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCRequest OPERATION ::= {
 *     ARGUMENT MCRequestArg
 *     RESULT MCRequestResult
 *     ERRORS {
 *         userNotSubscribed
 *         | basicServiceNotProvided
 *         | supplementaryServiceInteractionNotAllowed
 *         | invalidDestinationNumber
 *         | invalidCooperationNumber
 *         | mCRequestNotAllowed
 *         | mCExecutionNotAllowed
 *         | mCDestUserBusy
 *         | mCCoopUserBusy
 *         | mCCoopUserRejected
 *         | establishmentFailure
 *         | unspecified
 *     }
 *     CODE local: 112
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCRequestArg, MCRequestResult>}
 * @implements {OPERATION<MCRequestArg, MCRequestResult>}
 */
export
const mCRequest: OPERATION<MCRequestArg, MCRequestResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCRequestArg,
        "&ResultType": _decode_MCRequestResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCRequestArg,
        "&ResultType": _encode_MCRequestResult,
    },
    "&Errors": [ userNotSubscribed, basicServiceNotProvided, supplementaryServiceInteractionNotAllowed, invalidDestinationNumber, invalidCooperationNumber, mCRequestNotAllowed, mCExecutionNotAllowed, mCDestUserBusy, mCCoopUserBusy, mCCoopUserRejected, establishmentFailure, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 112 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
