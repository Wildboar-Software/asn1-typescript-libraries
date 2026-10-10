/* eslint-disable */
import { ResetArg, _decode_ResetArg, _encode_ResetArg } from "../MAP-MS-DataTypes/ResetArg.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary reset
 * @description
 *
 * MAP_RESET: after a restart, HSS/HLR or CSS indicates failure to a list of
 * VLRs, SGSNs or MMEs (via IWF). Also used as an O&M action (planned outage
 * without service interruption, or updating data shared by multiple
 * subscribers). Non-confirmed (argument only). Typical path: HLR/CSS→VLR or
 * SGSN. Local opcode 37. Timer class `m` (15 s to 30 s). (3GPP TS 29.002
 * V19.1.0 clauses 8.10.1.1, 17.1.2, 17.3.2.11 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reset  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     ResetArg
 *     CODE    local:37 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ResetArg>}
 * @implements {OPERATION<ResetArg>}
 */
export
const reset: OPERATION<ResetArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResetArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResetArg,
        "&ResultType": undefined,
    },
    "&operationCode": { local: 37 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
