/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unknownEquipment } from "../MAP-Errors/unknownEquipment.oa.mjs";
import { CheckIMEI_Arg, _decode_CheckIMEI_Arg, _encode_CheckIMEI_Arg } from "../MAP-MS-DataTypes/CheckIMEI-Arg.ta.mjs";
import { CheckIMEI_Res, _decode_CheckIMEI_Res, _encode_CheckIMEI_Res } from "../MAP-MS-DataTypes/CheckIMEI-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary checkIMEI
 * @description
 *
 * MAP_CHECK_IMEI: request a check of IMEI (MSC/VLR, MSC↔EIR, SGSN↔EIR,
 * IWF↔EIR). If the IMEI is not available in the MSC or SGSN it is requested
 * from the MS and transferred to the EIR. May also request BMUEF from the EIR.
 * Confirmed. Typical MAP path: MSC→EIR or SGSN→EIR. Local opcode 43. Timer
 * class `m` (15 s to 30 s). Distinctive error: `unknownEquipment`. (3GPP TS
 * 29.002 V19.1.0 clauses 8.7.1.1, 17.1.2, 17.3.2.14 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * checkIMEI  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     CheckIMEI-Arg
 *     RESULT
 *     CheckIMEI-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unknownEquipment}
 *     CODE    local:43 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CheckIMEI_Arg, CheckIMEI_Res>}
 * @implements {OPERATION<CheckIMEI_Arg, CheckIMEI_Res>}
 */
export
const checkIMEI: OPERATION<CheckIMEI_Arg, CheckIMEI_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CheckIMEI_Arg,
        "&ResultType": _decode_CheckIMEI_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_CheckIMEI_Arg,
        "&ResultType": _encode_CheckIMEI_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unknownEquipment, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 43 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
