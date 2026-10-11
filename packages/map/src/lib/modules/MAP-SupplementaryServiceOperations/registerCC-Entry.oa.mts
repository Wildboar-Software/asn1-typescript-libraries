/* eslint-disable */
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { illegalSS_Operation } from "../MAP-Errors/illegalSS-Operation.oa.mjs";
import { longTermDenial } from "../MAP-Errors/longTermDenial.oa.mjs";
import { shortTermDenial } from "../MAP-Errors/shortTermDenial.oa.mjs";
import { ss_ErrorStatus } from "../MAP-Errors/ss-ErrorStatus.oa.mjs";
import { ss_Incompatibility } from "../MAP-Errors/ss-Incompatibility.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { RegisterCC_EntryArg, _decode_RegisterCC_EntryArg, _encode_RegisterCC_EntryArg } from "../MAP-SS-DataTypes/RegisterCC-EntryArg.ta.mjs";
import { RegisterCC_EntryRes, _decode_RegisterCC_EntryRes, _encode_RegisterCC_EntryRes } from "../MAP-SS-DataTypes/RegisterCC-EntryRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary registerCC_Entry
 * @description
 *
 * MAP_REGISTER_CC_ENTRY: register data for a requested call-completion
 * supplementary service. Used MSC→VLR and VLR→HLR; the VLR relays to the HLR.
 * Confirmed. Typical MAP path: VLR→HLR. Local opcode 76. Timer class `m` (15 s
 * to 30 s). Distinctive errors: `shortTermDenial`, `longTermDenial`. (3GPP TS
 * 29.002 V19.1.0 clauses 11.13.1, 17.1.2, 17.3.2.38 and 17.6.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * registerCC-Entry  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     RegisterCC-EntryArg
 *     RESULT
 *     RegisterCC-EntryRes
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     callBarred |
 *     illegalSS-Operation |
 *     ss-ErrorStatus |
 *     ss-Incompatibility |
 *     shortTermDenial |
 *     longTermDenial |
 *     facilityNotSupported}
 *     CODE    local:76 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RegisterCC_EntryArg, RegisterCC_EntryRes>}
 * @implements {OPERATION<RegisterCC_EntryArg, RegisterCC_EntryRes>}
 */
export
const registerCC_Entry: OPERATION<RegisterCC_EntryArg, RegisterCC_EntryRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RegisterCC_EntryArg,
        "&ResultType": _decode_RegisterCC_EntryRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_RegisterCC_EntryArg,
        "&ResultType": _encode_RegisterCC_EntryRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, callBarred, illegalSS_Operation, ss_ErrorStatus, ss_Incompatibility, shortTermDenial, longTermDenial, facilityNotSupported, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 76 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
