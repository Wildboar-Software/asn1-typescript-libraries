import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { NetworkCapabilityArg, _decode_NetworkCapabilityArg, _encode_NetworkCapabilityArg } from "../IN-CS3-SCF-SCF-ops-args/NetworkCapabilityArg.ta.mjs";
// export { NetworkCapabilityArg, _decode_NetworkCapabilityArg, _encode_NetworkCapabilityArg } from "../IN-CS3-SCF-SCF-ops-args/NetworkCapabilityArg.ta.mjs";
import { NetworkCapabilityResultArg, _decode_NetworkCapabilityResultArg, _encode_NetworkCapabilityResultArg } from "../IN-CS3-SCF-SCF-ops-args/NetworkCapabilityResultArg.ta.mjs";
// export { NetworkCapabilityResultArg, _decode_NetworkCapabilityResultArg, _encode_NetworkCapabilityResultArg } from "../IN-CS3-SCF-SCF-ops-args/NetworkCapabilityResultArg.ta.mjs";
import { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
// export { missingCustomerRecord } from "../IN-CS3-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-CS3-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-CS3-errortypes/systemFailure.oa.mjs";
import { scfTaskRefused } from "../IN-CS3-errortypes/scfTaskRefused.oa.mjs";
// export { scfTaskRefused } from "../IN-CS3-errortypes/scfTaskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
// export { unexpectedComponentSequence } from "../IN-CS3-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-CS3-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-CS3-errortypes/unexpectedParameter.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { opcode_networkCapability } from "../IN-CS3-operationcodes/opcode-networkCapability.va.mjs";
// export { opcode_networkCapability } from "../IN-CS3-operationcodes/opcode-networkCapability.va.mjs";


/**
 * @summary networkCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkCapability OPERATION ::= {
 *   ARGUMENT  NetworkCapabilityArg
 *   RESULT    NetworkCapabilityResultArg
 *   ERRORS
 *     {missingCustomerRecord | missingParameter | systemFailure | scfTaskRefused
 *       | unexpectedComponentSequence | unexpectedDataValue | unexpectedParameter
 *       | securityError}
 *   CODE      opcode-networkCapability
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<NetworkCapabilityArg, NetworkCapabilityResultArg>}
 * @implements {OPERATION<NetworkCapabilityArg, NetworkCapabilityResultArg>}
 */
export
const networkCapability: OPERATION<NetworkCapabilityArg, NetworkCapabilityResultArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_NetworkCapabilityArg,
        "&ResultType": _decode_NetworkCapabilityResultArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_NetworkCapabilityArg,
        "&ResultType": _encode_NetworkCapabilityResultArg,
    },
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, scfTaskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, securityError, ] as unknown as ERROR[] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_networkCapability /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
