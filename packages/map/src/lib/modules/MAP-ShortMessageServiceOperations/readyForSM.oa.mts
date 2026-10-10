/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { ReadyForSM_Arg, _decode_ReadyForSM_Arg, _encode_ReadyForSM_Arg } from "../MAP-SM-DataTypes/ReadyForSM-Arg.ta.mjs";
import { ReadyForSM_Res, _decode_ReadyForSM_Res, _encode_ReadyForSM_Res } from "../MAP-SM-DataTypes/ReadyForSM-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary readyForSM
 * @description
 *
 * MAP_READY_FOR_SM: indicates that the subscriber is available for SM (memory
 * available, or radio/IMS contact while a message-waiting flag is active). Used
 * MSC↔VLR, VLR→HLR, SGSN→HLR, MME→HSS via IWF, and IP-SM-GW→HLR. Confirmed.
 * Typical MAP path: VLR→HLR or SGSN→HLR. Local opcode 66. Timer class `m` (15 s
 * to 30 s). (3GPP TS 29.002 V19.1.0 clauses 12.4.1, 17.1.2, 17.3.2.25 and
 * 17.6.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * readyForSM  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     ReadyForSM-Arg
 *     RESULT
 *     ReadyForSM-Res
 *     -- optional
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unknownSubscriber}
 *     CODE    local:66 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReadyForSM_Arg, ReadyForSM_Res>}
 * @implements {OPERATION<ReadyForSM_Arg, ReadyForSM_Res>}
 */
export
const readyForSM: OPERATION<ReadyForSM_Arg, ReadyForSM_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReadyForSM_Arg,
        "&ResultType": _decode_ReadyForSM_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReadyForSM_Arg,
        "&ResultType": _encode_ReadyForSM_Res,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, facilityNotSupported, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 66 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
