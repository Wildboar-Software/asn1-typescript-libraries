/* eslint-disable */
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { sm_DeliveryFailure } from "../MAP-Errors/sm-DeliveryFailure.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { MO_ForwardSM_Arg, _decode_MO_ForwardSM_Arg, _encode_MO_ForwardSM_Arg } from "../MAP-SM-DataTypes/MO-ForwardSM-Arg.ta.mjs";
import { MO_ForwardSM_Res, _decode_MO_ForwardSM_Res, _encode_MO_ForwardSM_Res } from "../MAP-SM-DataTypes/MO-ForwardSM-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary mo_ForwardSM
 * @description
 *
 * MAP_MO_FORWARD_SHORT_MESSAGE: serving MSC, SGSN or IP-SM-GW forwards a
 * mobile-originated short message to the SMS Interworking MSC. Confirmed.
 * Typical path: MSC→IWMSC or SGSN→IWMSC. Local opcode 46. Timer class `ml` (1
 * min to 10 min). Distinctive error: `sm-DeliveryFailure`. (3GPP TS 29.002
 * V19.1.0 clauses 12.2.1, 17.1.2, 17.3.2.22 and 17.6.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mo-ForwardSM  OPERATION ::= {    --Timer ml
 *     ARGUMENT
 *     MO-ForwardSM-Arg
 *     RESULT
 *     MO-ForwardSM-Res
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     sm-DeliveryFailure}
 *     CODE    local:46 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MO_ForwardSM_Arg, MO_ForwardSM_Res>}
 * @implements {OPERATION<MO_ForwardSM_Arg, MO_ForwardSM_Res>}
 */
export
const mo_ForwardSM: OPERATION<MO_ForwardSM_Arg, MO_ForwardSM_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MO_ForwardSM_Arg,
        "&ResultType": _decode_MO_ForwardSM_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_MO_ForwardSM_Arg,
        "&ResultType": _encode_MO_ForwardSM_Res,
    },
    "&Errors": [ systemFailure, unexpectedDataValue, facilityNotSupported, sm_DeliveryFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 46 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
