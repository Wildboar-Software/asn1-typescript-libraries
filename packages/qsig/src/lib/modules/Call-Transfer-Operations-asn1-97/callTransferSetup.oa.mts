/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CTSetupArg, _decode_CTSetupArg, _encode_CTSetupArg } from "../Call-Transfer-Operations-asn1-97/CTSetupArg.ta.mjs";
// export { CTSetupArg, _decode_CTSetupArg, _encode_CTSetupArg } from "../Call-Transfer-Operations-asn1-97/CTSetupArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Call-Transfer-Operations-asn1-97/DummyRes.ta.mjs";
// export { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Call-Transfer-Operations-asn1-97/DummyRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { invalidCallState } from "../General-Error-List/invalidCallState.oa.mjs";
// export { invalidCallState } from "../General-Error-List/invalidCallState.oa.mjs";
import { invalidRerouteingNumber } from "../Call-Transfer-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
// export { invalidRerouteingNumber } from "../Call-Transfer-Operations-asn1-97/invalidRerouteingNumber.oa.mjs";
import { unrecognizedCallIdentity } from "../Call-Transfer-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
// export { unrecognizedCallIdentity } from "../Call-Transfer-Operations-asn1-97/unrecognizedCallIdentity.oa.mjs";
import { unspecified } from "../Call-Transfer-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Call-Transfer-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";


/**
 * @summary callTransferSetup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferSetup OPERATION ::= {
 *     ARGUMENT CTSetupArg
 *     RESULT DummyRes
 *     ERRORS {
 *         notAvailable
 *         | invalidCallState
 *         | invalidRerouteingNumber
 *         | unrecognizedCallIdentity
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 10
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CTSetupArg, DummyRes>}
 * @implements {OPERATION<CTSetupArg, DummyRes>}
 */
export
const callTransferSetup: OPERATION<CTSetupArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CTSetupArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CTSetupArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ notAvailable, invalidCallState, invalidRerouteingNumber, unrecognizedCallIdentity, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 10 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
