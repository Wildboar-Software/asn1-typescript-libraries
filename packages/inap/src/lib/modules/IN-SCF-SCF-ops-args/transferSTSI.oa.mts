import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TransferSTSIArg, _decode_TransferSTSIArg, _encode_TransferSTSIArg } from "../IN-SCF-SCF-ops-args/TransferSTSIArg.ta.mjs";
// export { TransferSTSIArg, _decode_TransferSTSIArg, _encode_TransferSTSIArg } from "../IN-SCF-SCF-ops-args/TransferSTSIArg.ta.mjs";
import { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
// export { missingParameter } from "../IN-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
// export { systemFailure } from "../IN-errortypes/systemFailure.oa.mjs";
import { scfTaskRefused } from "../IN-errortypes/scfTaskRefused.oa.mjs";
// export { scfTaskRefused } from "../IN-errortypes/scfTaskRefused.oa.mjs";
import { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
// export { unexpectedDataValue } from "../IN-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
// export { unexpectedParameter } from "../IN-errortypes/unexpectedParameter.oa.mjs";
import { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
// export { parameterOutOfRange } from "../IN-errortypes/parameterOutOfRange.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
// export { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { opcode_transferSTSI } from "../IN-operationcodes/opcode-transferSTSI.va.mjs";
// export { opcode_transferSTSI } from "../IN-operationcodes/opcode-transferSTSI.va.mjs";


/**
 * @summary transferSTSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * transferSTSI OPERATION ::= {
 *   ARGUMENT         TransferSTSIArg
 *   RETURN RESULT    FALSE
 *   ERRORS
 *     {missingParameter | systemFailure | scfTaskRefused | unexpectedDataValue |
 *       unexpectedParameter | parameterOutOfRange | securityError}
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-transferSTSI
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<TransferSTSIArg>}
 * @implements {OPERATION<TransferSTSIArg>}
 */
export
const transferSTSI: OPERATION<TransferSTSIArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TransferSTSIArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TransferSTSIArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, scfTaskRefused, unexpectedDataValue, unexpectedParameter, parameterOutOfRange, securityError, ] as unknown as ERROR[] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_transferSTSI /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
