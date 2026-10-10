/* eslint-disable */
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { MT_ForwardSM_VGCS_Arg, _decode_MT_ForwardSM_VGCS_Arg, _encode_MT_ForwardSM_VGCS_Arg } from "../MAP-SM-DataTypes/MT-ForwardSM-VGCS-Arg.ta.mjs";
import { MT_ForwardSM_VGCS_Res, _decode_MT_ForwardSM_VGCS_Res, _encode_MT_ForwardSM_VGCS_Res } from "../MAP-SM-DataTypes/MT-ForwardSM-VGCS-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary mt_ForwardSM_VGCS
 * @description
 *
 * MAP_MT_FORWARD_SM_FOR_VGCS: SMS-GMSC forwards a mobile-terminated short
 * message into an ongoing voice group call at the Group Call Anchor MSC.
 * Confirmed. Typical path: SMS-GMSC→MSC. Local opcode 21. Timer class `ml` (1
 * min to 10 min). (3GPP TS 29.002 V19.1.0 clauses 12.10.1, 17.1.2, 17.3.2.51
 * and 17.6.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mt-ForwardSM-VGCS  OPERATION ::= {    --Timer ml
 *     ARGUMENT
 *     MT-ForwardSM-VGCS-Arg
 *     RESULT
 *     MT-ForwardSM-VGCS-Res
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     unexpectedDataValue }
 *     CODE    local:21 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MT_ForwardSM_VGCS_Arg, MT_ForwardSM_VGCS_Res>}
 * @implements {OPERATION<MT_ForwardSM_VGCS_Arg, MT_ForwardSM_VGCS_Res>}
 */
export
const mt_ForwardSM_VGCS: OPERATION<MT_ForwardSM_VGCS_Arg, MT_ForwardSM_VGCS_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MT_ForwardSM_VGCS_Arg,
        "&ResultType": _decode_MT_ForwardSM_VGCS_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_MT_ForwardSM_VGCS_Arg,
        "&ResultType": _encode_MT_ForwardSM_VGCS_Res,
    },
    "&Errors": [ systemFailure, unexpectedDataValue, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 21 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
