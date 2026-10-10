/* eslint-disable */
import { bearerServiceNotProvisioned } from "../MAP-Errors/bearerServiceNotProvisioned.oa.mjs";
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { illegalSS_Operation } from "../MAP-Errors/illegalSS-Operation.oa.mjs";
import { ss_ErrorStatus } from "../MAP-Errors/ss-ErrorStatus.oa.mjs";
import { ss_Incompatibility } from "../MAP-Errors/ss-Incompatibility.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { teleserviceNotProvisioned } from "../MAP-Errors/teleserviceNotProvisioned.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { RegisterSS_Arg, _decode_RegisterSS_Arg, _encode_RegisterSS_Arg } from "../MAP-SS-DataTypes/RegisterSS-Arg.ta.mjs";
import { SS_Info, _decode_SS_Info, _encode_SS_Info } from "../MAP-SS-DataTypes/SS-Info.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary registerSS
 * @description
 *
 * MAP_REGISTER_SS: register data related to a supplementary service. Used
 * MSC→VLR and VLR→HLR; the VLR relays to the HLR. Confirmed. Typical MAP path:
 * VLR→HLR. Local opcode 10. Timer class `m` (15 s to 30 s). (3GPP TS 29.002
 * V19.1.0 clauses 11.1.1, 17.1.2, 17.3.2.19 and 17.6.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * registerSS  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     RegisterSS-Arg
 *     RESULT
 *     SS-Info
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     bearerServiceNotProvisioned |
 *     teleserviceNotProvisioned |
 *     callBarred |
 *     illegalSS-Operation |
 *     ss-ErrorStatus |
 *     ss-Incompatibility}
 *     CODE    local:10 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RegisterSS_Arg, SS_Info>}
 * @implements {OPERATION<RegisterSS_Arg, SS_Info>}
 */
export
const registerSS: OPERATION<RegisterSS_Arg, SS_Info> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RegisterSS_Arg,
        "&ResultType": _decode_SS_Info,
    },
    encoderFor: {
        "&ArgumentType": _encode_RegisterSS_Arg,
        "&ResultType": _encode_SS_Info,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, bearerServiceNotProvisioned, teleserviceNotProvisioned, callBarred, illegalSS_Operation, ss_ErrorStatus, ss_Incompatibility, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 10 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
