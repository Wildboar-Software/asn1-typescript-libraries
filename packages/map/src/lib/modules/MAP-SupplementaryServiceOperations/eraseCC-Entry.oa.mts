/* eslint-disable */
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { illegalSS_Operation } from "../MAP-Errors/illegalSS-Operation.oa.mjs";
import { ss_ErrorStatus } from "../MAP-Errors/ss-ErrorStatus.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { EraseCC_EntryArg, _decode_EraseCC_EntryArg, _encode_EraseCC_EntryArg } from "../MAP-SS-DataTypes/EraseCC-EntryArg.ta.mjs";
import { EraseCC_EntryRes, _decode_EraseCC_EntryRes, _encode_EraseCC_EntryRes } from "../MAP-SS-DataTypes/EraseCC-EntryRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary eraseCC_Entry
 * @description
 *
 * MAP_ERASE_CC_ENTRY: erase data related to a call-completion supplementary
 * service. Used MSC→VLR and VLR→HLR; the VLR relays to the HLR. Confirmed.
 * Typical MAP path: VLR→HLR. Local opcode 77. Timer class `m` (15 s to 30 s).
 * (3GPP TS 29.002 V19.1.0 clauses 11.14.1, 17.1.2, 17.3.2.38 and 17.6.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eraseCC-Entry  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     EraseCC-EntryArg
 *     RESULT
 *     EraseCC-EntryRes
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     callBarred |
 *     illegalSS-Operation |
 *     ss-ErrorStatus}
 *     CODE    local:77 }
 * ```
 * 
 * @constant
 * @type {OPERATION<EraseCC_EntryArg, EraseCC_EntryRes>}
 * @implements {OPERATION<EraseCC_EntryArg, EraseCC_EntryRes>}
 */
export
const eraseCC_Entry: OPERATION<EraseCC_EntryArg, EraseCC_EntryRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EraseCC_EntryArg,
        "&ResultType": _decode_EraseCC_EntryRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_EraseCC_EntryArg,
        "&ResultType": _encode_EraseCC_EntryRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, callBarred, illegalSS_Operation, ss_ErrorStatus, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 77 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
